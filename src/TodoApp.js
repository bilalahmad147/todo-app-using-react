import React, { useState } from 'react'

function TodoApp() {

    let todoList = {
        todoItem: ["bilal", "jawad", "ali"],
        value: '',
    }

    let { todoItem, value } = todoList;
    let [todo, setTodo] = useState(todoList);
    console.log()

    return (
        <div>
            <input onChange={(e) => setTodo({ value: e.target.value })} type="text" placeholder="Enter Todos Name..." />
            <button>Add Todo</button>
            {
                todoItem.map((todoName, ind) => {
                    return <li key={ind}>{todoName}</li>
                })
            }
        </div>
    )
}

export default TodoApp
