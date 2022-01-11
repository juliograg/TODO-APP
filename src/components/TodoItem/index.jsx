import React from "react";
import "./TodoItem.css";

function TodoItem({ completed, text, completeTodo, index, deleteTodo }) {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check">
        <input
          type="checkbox"
          onClick={() => completeTodo(index, completed)}
          checked={completed}
          readOnly
        />
      </span>
      <p className={`TodoItem-p  ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">
        <i className="fas fa-trash-alt" onClick={() => deleteTodo(index)}></i>
      </span>
    </li>
  );
}

export { TodoItem };
