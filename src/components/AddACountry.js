import React, { useState } from 'react'

export default function AddACountry(props) {
    const [name , set_name] = useState("") 
    
    const clickHandler = () => {
        console.log("Click!", name)
        props.add_a_country_to_the_list(name)
    }
    
    console.log("what are my props", props)
    return (
        <div style={   { backgroundColor: "red", borderColor:"blue", borderStyle:"solid"  }}>
             <p>Fill in a new country name</p>
            <input value={name} onChange={e=> set_name(e.target.value)} />   
            <button onClick={ clickHandler}>add the Country </button >     
        </div>
    )
}
