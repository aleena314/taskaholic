import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(), // Use the current timestamp as a unique ID
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Taskaholic</h1>
      <TodoForm 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />
      <TodoList todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;