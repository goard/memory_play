import React, { useEffect, useState } from "react";
import Board from "./view/Board";
import ContextProvider from "./context/ContextProvider";
import { getRandomIconsArray, getArrayRandom } from "./utils/index";
import { IconsName } from "./view/components/IconsName";

export default function App() {
  const [arr, setArr] = useState(null);
  const [squareInt, setSquareInt] = useState(4);

  useEffect(() => {
    const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
    setArr(getArrayRandom(arrRandomIcons, squareInt));
  }, []);

  return (
    // <ContextProvider>
    arr && <Board arrIcons={arr} squareInt={squareInt} />
    // </ContextProvider>
  );
}
