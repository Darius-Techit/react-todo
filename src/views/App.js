import logo from './logo.svg';
import './App.scss';
import ListTodo from './todo-app/ListTodo.js';

// Function App()
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Todo App</h3>
        <ListTodo />

      </header>
    </div>
  );
}

export default App;
