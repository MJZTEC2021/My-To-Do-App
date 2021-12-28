import React, { useState } from 'react';
import './style.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Build really cool to-do app', isCompleted: false },
    { text: 'Commit to GitHub', isCompleted: false },
    { text: 'Talk a walk', isCompleted: false},
  ]);
  
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1> My To-Do App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />    
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;