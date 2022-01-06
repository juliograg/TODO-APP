import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert("ya se completo");
    return 0;
  };
  const onDelete = () => {
    alert("ya se borro");
    return 0;
  };
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check">
        <input
          type="checkbox"
          onClick={onComplete}
          defaultChecked={props.completed && "checked"}
        />
      </span>
      <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <i className="fas fa-trash-alt" onClick={onDelete}></i>
      </span>
    </li>
  );
}

export { TodoItem };
