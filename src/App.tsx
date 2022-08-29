import React, { useState } from 'react';
import { TodoList } from './List';

const initialTodos: Array<Todo> = [
  { text: 'task 1', complete: true },
  { text: 'task 2', complete: false },
  { text: 'task 3', complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TODO app</h1>
      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </React.Fragment>
    </div>
  );
}

export default App;
