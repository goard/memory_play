import { getArrayRandom, getRandomIconsArray } from "../utils";
import { IconsName } from "../asset/IconsName";

const getRandomIcons = (square) => {
  const squareInt = parseInt(square, 10);
  const arrRandomIcons = getRandomIconsArray(IconsName, squareInt);
  return getArrayRandom(arrRandomIcons, squareInt);
};

export function reducerArray(state, action) {
  switch (action.type) {
    case "createFieldTo6x6":
      const arr = getRandomIcons(6);
      return (state = arr.slice());
    case "removeCard":
      return state.map((el) => {
        if (el.icon === action.payload) el.icon = "";
        return el;
      });
    case "hiddenAll":
      return state.map((el) => {
        el.hidden = true;
        return el;
      });
    case "showCard":
      return state.map((el) => {
        if (el.id === action.payload) {
          el.hidden = false;
        }
        return el;
      });
    case "hiddenCard":
      return state.map((el) => {
        if (el.id === action.payload) {
          el.hidden = true;
        }
        return el;
      });
    case "timeout":
      return setTimeout(() => {
        console.log("hi timeout");
      }, 5000);

    default:
      return state;
  }
}

export function reducerCountError(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}

export function reducerCountClick(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}
