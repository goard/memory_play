import React, { useContext, createContext } from "react";

const MainContext = createContext();

export const useMain = () => {
  return useContext(MainContext);
};

const ContextProvider = ({ children }) => {
  return <MainContext.Provider>{children}</MainContext.Provider>;
};

export default ContextProvider;
