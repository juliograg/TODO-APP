import React from "react";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

const AppUi = ({
  searchTodos,
  totalTodos,
  searchValue,
  completedTodos,
  setsearchValue,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
      <TodoList>
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
      <CreateTodoButton />
    </>
  );
};

export { AppUi };
