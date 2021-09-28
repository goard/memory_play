import React, { useEffect, useState } from "react";
import Board from "./view/Board";
import ContextProvider from "./context/ContextProvider";
import { getRandomIconsArray, getArrayRandom } from "./utils/index";
import { IconsName } from "./view/components/IconsName";

export default function App() {
  const [stateIndex, setStateIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const [arr, setArr] = useState(null);
  const [squareInt, setSquareInt] = useState(4);

  const removeCard = () => {
    if (stateIndex === 0) {
      const arrayCopy = arr.slice();
      while (arrayCopy.indexOf(prevIndex) !== -1) {
        const idx = arrayCopy.indexOf(prevIndex);
        arrayCopy.splice(idx, 1, "");
      }
      setArr(arrayCopy);
      return 0;
    }
  };

  useEffect(() => {
    if (Array.isArray(arr)) removeCard();
  }, [prevIndex]);

  useEffect(() => {
    const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
    setArr(getArrayRandom(arrRandomIcons, squareInt));
  }, []);

  console.log(stateIndex);

  return (
    // <ContextProvider>
    arr && (
      <Board
        arrIcons={arr}
        squareInt={squareInt}
        setIndex={setStateIndex}
        setPrevIndex={setPrevIndex}
      />
    )
    // </ContextProvider>
  );
}
