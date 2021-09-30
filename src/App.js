import React, { useState } from "react";
import BoardView from "./view/BoardView";
import ContextProvider from "./context/ContextProvider";

export default function App() {

  return (
    <ContextProvider>
      <BoardView />
    </ContextProvider>
  );
}
