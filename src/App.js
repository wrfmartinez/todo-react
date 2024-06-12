import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = () => {
    setTodoItems([...todoItems, userInput]);
    setUserInput("");
  }

  const deleteTodo = (idx) => {
    const updatedTodos = [];
    for (let i = 0; i < todoItems.length; i++) {
      if (i !== idx) {
        updatedTodos.push(todoItems[i]);
      }
    }
    setTodoItems(updatedTodos);
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);
  }

  return (
    <>
      <h1>Todooly</h1>
      <input
        type="text"
        value={userInput}
        placeholder='Enter a task here'
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add New</button>
      <ul className='todo-list'>
        {todoItems.map((todoItem, idx) => {
          return <li className={idx}>{todoItem} <button onClick={() => deleteTodo(idx)}>Delete</button></li>
        })}
      </ul>
    </>
  );
}

export default App;
