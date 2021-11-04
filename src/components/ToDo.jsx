import React from 'react'

const ToDo = ({todo}) => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3 className="card-title">{todo.title}</h3>
                <p className="card-text">
                {todo.content}   
                </p>    
                <hr />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success m-3">Set as completed</button>
                    <button className="btn btn-primary m-3">Update</button>
                    <button className="btn btn-danger m-3">Delete</button>
                </div>
            </div>    
        </div>
    )
}

export default ToDo;
