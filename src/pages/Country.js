import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Country() {

    const params = useParams()
    const [countryInfo , set_countryInfo] = useState("")
    const [appState, set_appState] = useState("okay")
    console.log("the new hook:", params)

    useEffect( ()=> {
        const getData = async () => {
            try{

                const response = await Axios.get(`https://restcountries.eu/rest/v2/alpha/${params.countyId}`)
                console.log("response", response.data)
                set_countryInfo(response.data)
            }catch(err){
                set_appState("error")
            }   
        }
        getData()
    }, [params.countyId])


    // if(appState === "error"){
    //     return (
    //          <div>
    //             <h1>Country page </h1>
    //             <h1>unknown country</h1>
    //          </div>
    //     )
    // }

    return (
        <div>
            <h1>Country page </h1>
            {(appState === "error" ? <h1>unknown country</h1> : null)}
                <p>Name: {countryInfo.name}</p>
                <p>Capital: {countryInfo.capital}</p>
                <p>Population: {countryInfo.population}</p>
        </div>
    )
}
