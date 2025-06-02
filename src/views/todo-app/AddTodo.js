import React, { useState } from 'react';

const AddTodo = (props) => {

    const { listTodoS, setListTodoS } = props
    const [input, setInput] = useState('');
    const handleOnChangeInput = (event) => {
        setInput(event.target.value);
    }
    const handleAddTodo = () => {
        if (!input) {
            alert("Please Input Data")
            return;
        }

        const todo = {
            id: Math.floor(Math.random() * 10000),
            input: input
        };
        setListTodoS([...listTodoS, todo])
        setInput('');
    }
    return (
        <div className="add-todo">
            <input type="text" value={input}
                onChange={handleOnChangeInput}
            />
            <button className="add" type="button"
                onClick={handleAddTodo}
            >Add</button>
        </div>
    )
}
export default AddTodo;