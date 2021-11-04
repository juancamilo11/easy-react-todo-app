import React from 'react';
import  TodoForm  from './components/TodoForm';
import  TodoList  from './components/TodoList';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <TodoList />
        </div>
        <div className="col-6">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
