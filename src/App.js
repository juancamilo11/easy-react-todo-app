import React, { useState } from 'react';
import  TodoForm  from './components/TodoForm';
import  TodoList  from './components/TodoList';

const initialToDoList = [{
        id:'1',
        title:'todo1',
        content:'Contenido del todo 1',
        completed:false
    },{
        id:'2',
        title:'todo2',
        content:'Contenido del todo 2',
        completed:true
    },{
        id:'3',
        title:'todo3',
        content:'Contenido del todo 3',
        completed:true
    }
];

const App = () => {

  const [toDoList, setToDoList] = useState(initialToDoList);

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-6">
          <TodoList toDoList={toDoList}/>
        </div>
        <div className="col-6">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
