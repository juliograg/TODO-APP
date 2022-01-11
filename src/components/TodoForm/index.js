import React from "react";

const TodoForm = (props) => {
  const onCancel = () => {
    return 0;
  };

  const onAdd = (e) => {
    e.preventDefault();
    return 0;
  };

  return (
    <form onSubmit={onAdd}>
      <label>....</label>
      <textarea placeholder="TAREA QUE QUIERE AGREGAR ......." />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submits">Agregar</button>
      </div>
    </form>
  );
};

export { TodoForm };
