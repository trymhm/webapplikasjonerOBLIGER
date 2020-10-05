import React from "react";

const Modal = ({ addTodo, setFormData, formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  const updateValue = (event) => {
    setFormData({ title: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.title} onChange={updateValue} autoFocus />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Modal;
