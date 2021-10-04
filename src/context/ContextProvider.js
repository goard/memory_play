import React, {
  useState,
  useRef,
  useContext,
  useReducer,
  createContext,
} from "react";
import { reducerArray, reducerCountClick, reducerCountError } from "../reducer";
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
  const [startPlay, setStartPlay] = useState(false);
  //seconds, minutes, timerId render every seconds
  const minutesRef = useRef(0);
  const secondsRef = useRef(0);
  const timerId = useRef(null);

  const [stateArray, dispatchArray] = useReducer(
    reducerArray,
    initStart.square ? getRandomIcons(initStart.square) : []
  );
  const [stateCountError, dispatchCountError] = useReducer(
    reducerCountError,
    0
  );
  const [stateCountClick, dispatchCountClick] = useReducer(
    reducerCountClick,
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
        stateCountClick,
        dispatchCountClick,
        startPlay,
        setStartPlay,
        minutesRef,
        secondsRef,
        timerId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
