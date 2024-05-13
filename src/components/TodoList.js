import React from 'react';
import './TodoList.css';

const TodoList = ({ todos , deleteTodo}) => {
  return (
    <ul> className="todo-list">
      {todos.map((todo) => (
         <li key={todo.id} className="todo-item">
            {todo.text}
           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
           </li> 
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;