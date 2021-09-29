import React, { useState, useContext, useReducer, createContext } from "react";
import { reducerArray, reducerCount } from "../reducer";
import { getArrayRandom, getRandomIconsArray } from "../utils";
import { IconsName } from "../asset/IconsName";

const MainContext = createContext();

const getRandomIcons = (squareInt) => {
  const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  return getArrayRandom(arrRandomIcons, squareInt);
};

export const useMain = () => {
  return useContext(MainContext);
};

const ContextProvider = ({ children }) => {
  // Hard-coded the size of the field
  const [squareInt, setSquareInt] = useState(4);
  const [stateArray, dispatchArray] = useReducer(
    reducerArray,
    getRandomIcons(squareInt)
  );
  const [stateCount, dispatchCount] = useReducer(reducerCount, 0);
  return (
    <MainContext.Provider
      value={{
        stateArray,
        squareInt,
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
