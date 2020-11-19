import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import Country from '../components/Country'

export default function Search() {
    const [searchText, set_searchText] =  useState("")
    const [searchResults, set_searchResults] =  useState([])
    const history =  useHistory()
    const {text} = useParams()
    const [error, set_error] =  useState(false)

    const search = async (topic) => {
        console.log("search for", topic)
        try{
            const response = await Axios.get(`https://restcountries.eu/rest/v2/name/${topic}`)
            set_searchResults(response.data)
            set_error(false)
        }catch(err)
        {
            set_searchResults([])
            set_searchText("")
            set_error(true)
            console.log("err", err)
        }
    }

    useEffect(()=> {
        console.log("hello from useEffect: params:", text)
        if(text){
            search(text)
        }
    } ,[text])

    const submitHandler = (event) => {
        console.log("hello from submit fn")
        event.preventDefault()
        history.push(`/search/${searchText}`)
    }
    const onChangeHandler = (event) => {
        set_searchText(event.target.value)
    }

    return (
        <div>
            Search
            <Form onSubmit={submitHandler}>
                <input type="text" value={searchText} onChange={onChangeHandler}/>
                <button type="submit">Search! </button>
            </Form>
            { error ? <p>not found</p> : null}

            {searchResults.map( result => {
                return  (
                     <Country data={result} />
                )
            })}

        </div>
    )
}
