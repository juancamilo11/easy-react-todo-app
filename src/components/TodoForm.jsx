import React, { useState } from 'react'

const TodoForm = ({addNewToDo}) => {

  const [formValues, setFormValues] = useState({title:'', content:''});
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const {title, content} = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    });
  };

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


    const newToDo = {
      id: Date.now(),
      title,
      content,
      completed:false
    }

    addNewToDo(newToDo);
    setFormValues({title:'', content:''});
    setSuccessMessage('New task successfully added');
  
    setTimeout(()=> {
      setSuccessMessage(false);
    },3000);

    setError(null);
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">New Task Form</h2>  
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
          <input type="submit" className="btn btn-primary m-3" value="Input new task" />
        </form>
        
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
