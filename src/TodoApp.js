import React, { useState } from 'react'

function TodoApp() {

    let initTodo =["bilal","zubi"]
    let [Todo, setTodo] = useState(initTodo)

    const changeTodoList = e => {
        console.log(e.target.value)
    }

    return (
        <div>
            <input value="" onChange={changeTodoList} type="text" placeholder="Enter todo name" />
            <button onClick={()=>{setTodo()}}>Add Todo</button>
            {
                Todo.map((todoName, ind) => {
                    return <li key={ind}>{todoName}</li>
                })
            }
        </div>
    )
}

export default TodoApp
