import React, { useState, useEffect } from "react";
import { AppUi } from "./AppUi";
// import "./App.css";

// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "cortar cebolla", completed: false },
//   { text: "DDDDDDDDDDDDDDD", completed: false },
//   { text: "CCCCCCCCCCCCCC", completed: true },
// ];

function App() {
  const defaultTodos = JSON.parse(localStorage.getItem("todo_V1"));

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setsearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    saveLocalStorage();
  }, [todos]);

  const saveLocalStorage = () => {
    localStorage.setItem("todo_V1", JSON.stringify(searchTodos));
  };

  let searchTodos = [];
  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (key, completed) => {
    let newTodos = [...todos];
    newTodos[key].completed = !completed;
    console.log(newTodos);
    setTodos(newTodos);
  };

  const deleteTodo = (key) => {
    let newTodos = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
  };

  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchTodos={searchTodos}
    />
  );
}

export default App;
