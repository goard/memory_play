import React, { useEffect, useState, useReducer } from "react";
import Board from "./view/Board";
import { getRandomIconsArray, getArrayRandom } from "./utils/index";
import { IconsName } from "./view/components/IconsName";
import reducer from "./reducer";

function getRandomIcons(squareInt) {
  const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  return getArrayRandom(arrRandomIcons, squareInt);
}

export default function App() {
  // Рard-coded the size of the field
  const [squareInt, setSquareInt] = useState(4);
  const [state, dispatch] = useReducer(reducer, getRandomIcons(squareInt));
  const [arr, setArr] = useState(null);

  /**
   * Change element to array on empty if 2 pair card
   * @param {number} element
   * @returns
   */
  const checkGuessed = (element) => {
    console.log("hi check guessed");
    const arrCopy = arr.slice();
    while (arrCopy.indexOf(element) !== -1) {
      console.log;
      const idx = arrCopy.indexOf(element);
      arrCopy.splice(idx, 1, "");
    }
    setArr(arrCopy);
  };

  // useEffect(() => {
  //   const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  //   setArr(getArrayRandom(arrRandomIcons, squareInt));
  // }, []);

  return (
    // <ContextProvider>
    arr && (
      <Board
        arrIcons={state}
        squareInt={squareInt}
        checkGuessed={checkGuessed}
      />
    )
    // </ContextProvider>
  );
}
