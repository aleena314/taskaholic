import React from 'react';
import './TodoList.css';

function TodoList({ todos, deleteTodo, editTodo }) {
  const handleEdit = (id) => {
    const newText = prompt('Edit todo:', todos.find(todo => todo.id === id).text);
    if (newText) {
      editTodo(id, newText);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <div>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
