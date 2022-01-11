import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";
// import "./App.css";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
