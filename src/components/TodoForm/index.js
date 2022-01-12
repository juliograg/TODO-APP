import React, { useState, useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

const TodoForm = (props) => {
  const [todoText, setTodoText] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (todoText) {
      addTodo({ text: todoText, completed: false });
      setOpenModal(false);
    } else {
      alert("add Todo in the TEXTAREA");
    }
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={onAdd}>
      <label>ADD NEW TO DO ... </label>
      <textarea
        maxLength={40}
        onChange={handleChange}
        placeholder="TAREA QUE QUIERE AGREGAR ......."
        value={todoText}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submits">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
