import React from "react";
import Board from "./view/Board";
import ContextProvider from "./context/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <Board />
    </ContextProvider>
  );
}
