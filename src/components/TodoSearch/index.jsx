import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setsearchValue } = useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setsearchValue(e.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Search......"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </>
  );
}

export { TodoSearch };
