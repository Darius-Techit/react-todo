import React from "react";
import './ListTodo.scss';

class ListTodo extends React.Component {
    state = {
        listTodoS: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ]
    }
    render() {
        let { listTodoS } = this.state;
        // let ListTodoS = this.state.ListTodoS;
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" placeholder="Add a new todo" />
                    <button className="add" type="button">Add</button>
                </div>
                <div className="list-todo-content">
                    {listTodoS && listTodoS.length > 0 &&
                        listTodoS.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1}- {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}
export default ListTodo;