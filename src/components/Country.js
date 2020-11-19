import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Country(props) {
    // console.log("what are my props", props)

    let populationShort = props.data.population
    if(props.data.population >= 1000){
        populationShort = `${props.data.population /1000} k`
    }
    if(props.data.population >= 1000000){
        populationShort = `${props.data.population /1000000} M`
    }
    if(props.data.population >= 1000000000){
        populationShort = `${props.data.population /1000000000}  B`
    }


    return (
        <div style={{borderStyle: "solid", margin: "1em 1em 1em "}}>
            <li > {props.data.name} ({props.data.capital}) population: {populationShort }</li>
            {/* <a href={`/country/${props.data.alpha3Code}`}> Goto details</a> */}
            <Link to={`/country/${props.data.alpha3Code}`}> gotoDetails link</Link>
            { props.increase ? <Button  onClick={ () => props.increase(props.data.alpha3Code)}>increase population by 1000 </Button> : null}
        </div>
    )
}
