import React, { useState } from 'react';
import { Footer } from './components/Footer';
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
  const [toDoForEdit, setToDoForEdit] = useState(null);

  const deleteToDo = (toDoId) => {
    const newToDoList = toDoList.filter(toDo => toDo.id !== toDoId);
    
    setToDoList(newToDoList);
  }

  const toggleComplete = (toDoId) => {
    
    //FORMA 1
    // const newToDoList = toDoList.map(toDo => {
    //   if(toDo.id === toDoId) {
    //     return {
    //       ...toDo,
    //       completed:!toDo.completed
    //     }
    //   } else {
    //     return toDo;
    //   }
    // });

    //FORMA 2
    // const newToDoList = toDoList.map(toDo => (
    //   toDo.id === toDoId 
    //   ? { ...toDo, completed: !toDo.completed }
    //   : toDo
    // ));

    //FORMA 3
    const newToDoList = toDoList.map(toDo => toDo.id === toDoId ? {...toDo, completed:!toDo.completed} : toDo);

    setToDoList(newToDoList);
  }

  const addNewToDo = (toDo) => {
    setToDoList([toDo, ...toDoList]);
  }

  const updateToDo = (toDoUpdated) => {
    const newToDoList = toDoList.map(toDo => toDo.id === toDoUpdated.id ? toDoUpdated : toDo);
    setToDoList(newToDoList);
  }

  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-8">
            <TodoList toDoList={toDoList} deleteToDo={deleteToDo} toggleComplete= {toggleComplete} setToDoForEdit={setToDoForEdit}/>
          </div>
          <div className="col-4">
            <TodoForm addNewToDo={addNewToDo} toDoForEdit={toDoForEdit} setToDoForEdit={setToDoForEdit} updateToDo={updateToDo}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
