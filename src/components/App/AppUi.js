import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

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
          {error && <TodosError />}
          {loading && <TodosLoading />}
          {!loading && !searchTodos.length && <EmptyTodos />}

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
