import React, { useState } from 'react'

function TodoApp() {

    let initTodo = ["bilal","zubair","talha"]
    let [Todo, setTodo] = useState(initTodo)

    const changeTodoList = (e) => {
        let value = e.target.value
    }

    return (
        <div>
            <input onChange={changeTodoList} type="text" placeholder="Enter todo name" />
            <button >Add Todo</button>
            {
                Todo.map((todoName,ind)=>{
                return <li key={ind}>{todoName}</li>
                })
            }
        </div>
    )
}

export default TodoApp
