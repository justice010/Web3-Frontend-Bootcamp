// src/components/AddToDo.jsx
import React, { useState } from 'react';

const AddToDo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="添加新的待办事项"
      />
      <button type="submit">添加</button>
    </form>
  );
};

export default AddToDo;