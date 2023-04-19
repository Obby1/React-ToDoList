import React, { useState } from 'react';

function ToDo({ id, text, completed, removeToDo, editToDo, update, ...props }) {
    const [editTask, setEditTask] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
      };

      const handleChange = evt => {
        setEditTask(evt.target.value);
      };
    

  const handleRemove = () => removeToDo(id);


const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

    // default todo view
    let jsx = (
        <div {...props}>
            <li>{text}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleRemove}>X</button>
        </div>
        );

    if (isEditing) {
        jsx = (
            <div {...props}>
            <form onSubmit={handleUpdate}>
                <input type="text" value={editTask} onChange={handleChange} data-testid="update-input" />
                <button data-testid="update-button">Update!</button>
            </form>
            </div>
        );
        }

    return jsx;
}

export default ToDo;
