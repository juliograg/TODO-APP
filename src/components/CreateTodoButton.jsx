import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = () => {
    alert("hola");
  };
  return (
    <button className="CreateTodoButton" onClick={() => handleClick()}>
      +
    </button>
  );
}

export { CreateTodoButton };
