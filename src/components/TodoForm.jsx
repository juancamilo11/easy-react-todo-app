import React, { useState } from 'react'

const TodoForm = ({addNewToDo}) => {

  const [formValues, setFormValues] = useState({title:'', content:''});
  const [error, setError] = useState(false);
  const {title, content} = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(title.length >=3 && content.length >=3) {
      const newToDo = {
        id: Date.now(),
        title,
        content,
        completed:false
      }
      addNewToDo(newToDo);
      setFormValues({title:'', content:''});
      setError(null);
    } else {
      setError('Title and content for the new task are required');
    }
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">TodoForm</h2>  
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
        
    </div>
  )
}

export default TodoForm;
