import React, { useState, useContext, useReducer, createContext } from "react";
import { reducerArray, reducerCountError } from "../reducer";
import { getArrayRandom, getRandomIconsArray } from "../utils";
import { IconsName } from "../asset/IconsName";

const MainContext = createContext();

const getRandomIcons = (square) => {
  const squareInt = parseInt(square, 10);
  const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  return getArrayRandom(arrRandomIcons, squareInt);
};

/**
 * 
 * @param {*} login 
 * @param {*} seconds 
 * @param {*} minutes 
 * @param {*} countError 
 */
const setLocalStorage = (login, seconds, minutes, countError) => {
  // let arr = [];
  let obj = {
    login: login,
    seconds: seconds,
    minutes: minutes,
    countError: countError,
  };
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
  const [startPlay, setStartPlay] = useState(false);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [stateArray, dispatchArray] = useReducer(
    reducerArray,
    initStart.square ? getRandomIcons(initStart.square) : []
  );
  const [stateCountError, dispatchCountError] = useReducer(
    reducerCountError,
    0
  );

  return (
    <MainContext.Provider
      value={{
        initStart,
        setInitStart,
        stateArray,
        dispatchArray,
        stateCountError,
        dispatchCountError,
        startPlay,
        setStartPlay,
        minute,
        setMinute,
        seconds,
        setSeconds,
        timerId,
        setTimerId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
