import React, { useEffect, useState } from "react";
import '../../scss/ListTodo.scss';
import AddTodo from "./AddTodo";
import SearchList from "./SearchList";

const defaultTodos = [
    { id: 'todo1', input: 'Doing Homework' },
    { id: 'todo2', input: 'Making Video' },
    { id: 'todo3', input: 'Fixing bugs' },
]
const ListTodo = () => {
    const [searchList, setSearchList] = useState('');
    const [listTodoS, setListTodoS] = useState([]);
    const [editTodoId, setEditTodoId] = useState(null);
    const [editInput, setEditInput] = useState('');
    useEffect(() => {
        const storeTodos = localStorage.getItem('todos');
        if (storeTodos) {
            setListTodoS(JSON.parse(storeTodos));
        } else {
            setListTodoS(defaultTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listTodoS));
    }, [listTodoS]);

    const handleDeleteTodo = (id) => {
        const confirmDelete = window.confirm('Bạn có muốn xóa không?');
        if (confirmDelete) {
            setListTodoS(currentTodos => {
                return currentTodos.filter(todo => todo.id !== id);
            })

        }
    }
    const handleEditTodo = (row) => {
        setEditTodoId(row.id);
        setEditInput(row.input);
    };
    const handleCancleEditTodo = () => {
        setEditTodoId(null);
        setEditInput('');
    }
    const handleSaveTodo = () => {
        const updateTodos = listTodoS.map(todo =>
            todo.id === editTodoId ? { ...todo, input: editInput } : todo
        );
        setListTodoS(updateTodos);
        setEditTodoId(null);
        setEditInput('');
    }
    return (
        <div className="list-todo-container">
            <SearchList onSearch={setSearchList} />
            <AddTodo
                listTodoS={listTodoS}
                setListTodoS={setListTodoS}
            // addNewTodo={(todo) => setListTodoS([...listTodoS, todo])}
            />
            <div className="list-todo-content">
                {listTodoS && listTodoS.length > 0 &&
                    listTodoS.filter(todo => todo.input.toLowerCase().includes(searchList.toLowerCase()))
                        .map((row, index) => {
                            return (
                                <div className="todo-child" key={row.id}>
                                    {editTodoId === row.id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editInput}
                                                onChange={(e) => setEditInput(e.target.value)}
                                            />
                                            <button className="save" onClick={handleSaveTodo} >Save</button>
                                            <button className="cancel" onClick={handleCancleEditTodo}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <span>{index + 1} - {row.input}</span>
                                            <button className="edit" onClick={() => handleEditTodo(row)}>Edit</button>
                                            <button className="delete" onClick={() => handleDeleteTodo(row.id)}>Delete</button>
                                        </>
                                    )}
                                </div>
                            )
                        })
                }

            </div>

        </div>
    )
}
export default ListTodo;