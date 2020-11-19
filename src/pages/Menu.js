import React, { useState } from 'react'

export default function Menu() {
    const [todoList, set_todoList] = useState(["Learn React and more"])
    const [todoItem, set_todoItem] = useState("Please fill in your todo item")
    const [searchItem, set_searchItem] = useState("search")

    const onsubmitHandler = (event) => {
        event.preventDefault()
        // todoList.push("Henk") // this didn't work

        // let newTodoList = todoList.map(item => item)

        // newTodoList.push(todoItem)
        // set_todoList(newTodoList)


        set_todoList([ ...todoList,  todoItem ])
        set_todoItem("")
    }

    const onChangeHandler = (event) => {
        set_todoItem(event.target.value)
    }


    const changeHandler =() => {
        const modifiedList = todoList.map( item => {
            console.log("what is my item", item)
            if(item === searchItem){
                console.log("do i get here?")
                return "I can do React now! "

            }else{
                return item
            }
        })


        set_todoList(modifiedList)
    }



    return (
        <div>
            <h2>Menu for today:</h2>
                <input  value={searchItem} onChange={ e=> set_searchItem(e.target.value) } />     
            <ul>
             {todoList.map( (todoItem, i) => {
                 return  <li key={i}>{todoItem} </li>
                }
                )}   
            </ul>
            <form onSubmit={onsubmitHandler} >
                <input  value={todoItem} onChange={ onChangeHandler } />     
                    
                <button type="submit">Submit</button> 
            </form>
            <button onClick={changeHandler}> change first item</button>
        </div>
    )
}

