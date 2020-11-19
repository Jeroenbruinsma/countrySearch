
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import AddACountry from '../components/AddACountry'
import Country from "../components/Country"


export default function Countries() {
    const url = "https://restcountries.eu/rest/v2/all"
   
    const [countries, set_countries] =  useState([])


    useEffect( ()=> {
        const fetchDate = async () => {
            const response = await Axios.get(url)

            const sortedCounties = response.data.sort( (a,b ) => {
                return a.population - b.population
            }) 
            sortedCounties.length = 25
            set_countries(sortedCounties)
        }
        fetchDate()
    } , [] )

    const add = (countryName) => {
        console.log("add is called with", countryName)
        set_countries(   [...countries, { name: countryName, population: 0, capital: "eeeh" }] )
    }

    const increasePopulation =  (name) => {
        const newCountriesList =  countries.map( countryCard => {

            if(countryCard.alpha3Code === name){
                const  newCountryCard = {...countryCard}
                newCountryCard.population = countryCard.population + 1000
                return newCountryCard
            }
            else{
                return countryCard
            }
        })
        set_countries(newCountriesList)

    }

    // const sortedCounties = [...counties].sort( (a,b ) => {
    //     return a.population - b.population
    // }) 

    console.log("debug time:", countries)
    return (
        <div>
            <ListGroup>
          {countries.map(( countryCard, i) =>  {
              return <Country key={countryCard.alpha3Code}  data={countryCard}  increase={increasePopulation}  />
            })}
            </ListGroup>
            <AddACountry add_a_country_to_the_list={add}/>

        </div>
    )
}

