import React from 'react';

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;