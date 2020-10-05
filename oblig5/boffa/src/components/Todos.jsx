import React from "react";

const Todos = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <li onClick={() => removeTodo(todo.id)} key={todo.id}>
            {todo.title}
          </li>
        ))}
    </ul>
  );
};

export default Todos;
