import React from 'react';
import { TodoListItem } from './ListItem';

const todos: Array<Todo> = [
  { text: 'task 1', complete: true },
  { text: 'task 2', complete: false },
];

function App() {
  return (
    <div className="App">
      <h1>TODO app</h1>
      <React.Fragment>
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </React.Fragment>
    </div>
  );
}

export default App;
