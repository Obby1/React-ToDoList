import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function ToDoForm({ addToDo, ...props }) {
  const INITIAL_STATE = { text: '', completed: false};
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <label htmlFor="text">Text:</label>
      <input id="text" name="text" value={formData.text} onChange={handleChange} />
      <button>Add To Do</button>
    </form>
  );
}

export default ToDoForm;
