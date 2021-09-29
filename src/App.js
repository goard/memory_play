import React, { useEffect, useState, useReducer } from "react";
import Board from "./view/Board";
import ContextProvider from "./context/ContextProvider";
import { getRandomIconsArray, getArrayRandom } from "./utils/index";
import { IconsName } from "./view/components/IconsName";
import reducer from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [arr, setArr] = useState(null);
  const [squareInt, setSquareInt] = useState(4);

  /**
   * Change element to array empty if 2 pair card
   * @param {number} element
   * @returns
   */
  const removeCard = (element) => {
    // const arr = arr.slice();
    while (arr.indexOf(element) !== -1) {
      const idx = arr.indexOf(element);
      console.log(idx);
      arr.splice(idx, 1, "");
    }
    setArr(arr);
  };

  useEffect(() => {
    const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
    setArr(getArrayRandom(arrRandomIcons, squareInt));
  }, []);

  return (
    // <ContextProvider>
    arr && <Board arrIcons={arr} squareInt={squareInt} func={removeCard} />
    // </ContextProvider>
  );
}
