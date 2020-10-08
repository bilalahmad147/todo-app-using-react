import React, { useState } from 'react'
import firebase from '../config/firebase'

function TodoApp() {

    let [todo, setTodo] = useState("");
    let [todos, setTodos] = useState([]);

    const handleChange = e => {
        setTodo(e.target.value)
    }
    const saveChanges = (e) => {
        e.preventDefault();
        todos = [...todos, todo];
        firebase.database().ref('/').child('todos').push(todo)
        setTodos(todos)
        setTodo('')
    }
    const deleteTodo = (index) => {
        todos = todos.splice(index, 1)
        setTodos(todos)
    }

    return (
        <div>
            <h2>Enter Todays Plan ?</h2>
            <form>
                <input required value={todo} onChange={handleChange} type="text" placeholder="Todo Name" />
                <button onClick={saveChanges}>Add Todo</button>
            </form>
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
