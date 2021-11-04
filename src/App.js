import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import  TodoForm  from './components/TodoForm';
import  TodoList  from './components/TodoList';

const initialToDos = () => {
  return JSON.parse(localStorage.getItem('toDoList')) || [];
}

const App = () => {

  const [toDoList, setToDoList] = useState(initialToDos);
  const [toDoForEdit, setToDoForEdit] = useState(null);

  const deleteToDo = (toDoId) => {
    if(toDoId === toDoForEdit?.id) {
      window.alert('Cannot delete a task while updating it');
      return;
    }
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

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList])

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
