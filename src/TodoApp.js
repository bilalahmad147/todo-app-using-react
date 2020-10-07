import React, { useState } from 'react'

function TodoApp() {

    let todoList = {
        todoItem: ["bilal", "jawad", "ali"],
        value: '',
    }

    let { todoItem, value } = todoList;
    let [todo, setTodo] = useState(todoList);

    const addTodoItem = (value) => {
        setTodo({todoItem : [...todoItem,value]})
        console.log(todoItem)
    }

    return (
        <div>
            <input value={value} onChange={(e) => setTodo({value : e.target.value})} type="text" placeholder="Enter Todos Name..." />
            <button onClick={addTodoItem}>Add Todo</button>
            {
                todoItem.map((todoName, ind) => {
                    return <li key={ind}>{todoName}</li>
                })
            }
        </div>
    )
}

export default TodoApp
