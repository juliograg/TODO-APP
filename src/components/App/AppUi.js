import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUi = () => {
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {
        <TodoList>
          {error && <p>Desesperate</p>}
          {loading && <p>Estamos cargando</p>}
          {!loading && !searchTodos.length && <p>Crea tu primer TODO!</p>}

          {searchTodos.map((todo, index) => (
            <TodoItem
              key={index}
              {...todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              index={index}
            />
          ))}
        </TodoList>
      }
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export { AppUi };
