import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setsearchValue }) {
  // const [searchValue, setsearchValue] = useState("");
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
