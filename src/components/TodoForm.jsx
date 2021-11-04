import React, { useEffect, useState } from 'react'

const TodoForm = ({addNewToDo, toDoForEdit, setToDoForEdit, updateToDo}) => {

  const [formValues, setFormValues] = useState({title:'', content:''});
  const {title, content} = formValues;
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    });
  };

  const addToDo = () => {
    const newToDo = {
      id: Date.now(),
      title,
      content,
      completed:false
    }
    addNewToDo(newToDo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(title.trim().length < 3 && content.trim().length < 3){
      setError('Title and content for the new task are required');
      return;
    }

    if(title.trim().length < 3){
      setError('Title for the new task is required');
      return;
    }

    if(content.trim().length < 3){
      setError('Content for the new task is required');
      return;
    }

    if(toDoForEdit) {
      updateToDo({
        ...toDoForEdit,
        title,
        content
      });
      setSuccessMessage('New task successfully updated');
    } else {
      addToDo();
      setSuccessMessage('New task successfully added');
    }

    setFormValues({title:'', content:''});
  
    setTimeout(()=> {
      setSuccessMessage(false);
    },3000);

    setError(null);
  }

  useEffect(() => {
    if(toDoForEdit) {
      setFormValues(toDoForEdit);
    } else {
      setFormValues({title:'', content:''});
    }
  }, [toDoForEdit]);

  return (
    <div className="container">
      <h2 className="text-center my-4">{toDoForEdit ? 'Update Task Form' : 'New Task Form' }</h2>  
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Task title" 
            className="form-control m-3" 
            value={title} 
            name="title" 
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            placeholder="Task content" 
            className="form-control m-3" 
            name="content" 
            value={content}
            onChange={handleInputChange}
          />
          <input type="submit" className="btn btn-primary m-3" value={toDoForEdit ? 'Update Task' : 'Input new task'} />          
        </form>
        
        {toDoForEdit && <button className="btn btn-warning m-3 mt-0" onClick={() => setToDoForEdit(null)}>Finish updating</button>}
        
        {error && 
          <div className="alert alert-danger m-3">
            {error}
          </div>
        }

        {successMessage && 
          <div className="alert alert-success m-3">
            {successMessage}
          </div>
        }

    </div>
  )
}

export default TodoForm;
