import React from "react";
import Cell from "./Cell";
import { IconsName } from "./IconsName";

const Field = (props) => {
  const { squareInt, ...rest } = props;
  const squareArr = [];
  const arrIconsName = [];
  const arrIconsToCell = [];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < (squareInt * squareInt) / 2; i++) {
    let index = getRandomInt(IconsName.length);
    if (i) {
      while (arrIconsName.includes(index)) {
        index = getRandomInt(IconsName.length);
      }
      arrIconsName.push(index);
      continue;
    }
    arrIconsName.push(index);
  }

  for (let i = 0; i < squareInt; i++) {
    squareArr.push(i);
  }

  for (let i = 0; i < squareInt * squareInt; i++) {}

  console.log(arrIconsName);

  return (
    <div>
      <div>
        {squareArr.map((el, i) => (
          <div key={i} style={{ display: "flex" }}>
            {squareArr.map((_, i) => {
              const indexNumber = getRandomInt(18);
              return <Cell key={i} index={indexNumber} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Field;
