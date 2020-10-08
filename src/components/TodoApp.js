import React, { useState } from 'react'

function TodoApp() {

    let [todo, setTodo] = useState("");
    let [todos, setTodos] = useState(['bilal']);

    const handleChange = e => {
        setTodo(e.target.value)
    }
    const saveChanges = (e) => {
        e.preventDefault();
        todos = [...todos, todo];
        setTodos(todos)
        setTodo('')
    }
    const deleteTodo = (ind) => {
        todos = todos.splice(ind,1)
        setTodos(todos)
    }

    return (
        <div>
            <h2>Enter Todays Plan ?</h2>
            <input value={todo} onChange={handleChange} type="text" placeholder="Todo Name" />
            <button onClick={saveChanges}>Add Todo</button>
            <ul>
                {
                    todos.map((obj, ind) => {
                        return <li key={ind}>
                            {obj}
                            <button onClick={() => deleteTodo(ind)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoApp
