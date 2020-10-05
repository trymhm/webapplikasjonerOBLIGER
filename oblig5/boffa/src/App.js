import React, { useState } from "react";
import Modal from "./components/Modal";
import Todos from "./components/Todos";

export default function App() {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ title: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <pre>{JSON.stringify(todos)}</pre>
      {todos && todos.length < 1 ? (
        <p>Ingen todos</p>
      ) : (
        <Todos removeTodo={removeTodo} todos={todos} />
      )}
      {modal && (
        <Modal
          addTodo={addTodo}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      <button onClick={() => setModal(!modal)}>Toggle Modal</button>
    </div>
  );
}
