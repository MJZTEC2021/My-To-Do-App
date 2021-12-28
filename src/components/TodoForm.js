import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');    
  };

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter new to-do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        style={{ backgroundColor: '#0c7cfb'}}
        onClick={() => handleSubmit}
      >
        Submit 
      </button>
    </form>
  );
}

export default TodoForm;
