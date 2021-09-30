import React, { useState, useContext, useReducer, createContext } from "react";
import { reducerArray, reducerCount } from "../reducer";
import { getArrayRandom, getRandomIconsArray } from "../utils";
import { IconsName } from "../asset/IconsName";

const MainContext = createContext();

const getRandomIcons = (square) => {
  const squareInt = parseInt(square, 10);
  const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  return getArrayRandom(arrRandomIcons, squareInt);
};

export const useMain = () => {
  return useContext(MainContext);
};

const ContextProvider = ({ children }) => {
  // Hard-coded the size of the field
  const [initStart, setInitStart] = useState({
    square: "4",
    login: "",
    ready: false,
  });
  const [stateArray, dispatchArray] = useReducer(
    reducerArray,
    initStart.square ? getRandomIcons(initStart.square) : []
  );
  const [stateCount, dispatchCount] = useReducer(reducerCount, 0);
  
  return (
    <MainContext.Provider
      value={{
        initStart,
        setInitStart,
        stateArray,
        dispatchArray,
        stateCount,
        dispatchCount,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
