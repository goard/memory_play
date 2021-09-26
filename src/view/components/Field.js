import React from "react";
import Cell from "./Cell";
import { IconsName } from "./IconsName";

const Field = () => {
  const arrRow = [];
  const arrCol = [];
  const arrIconsName = [];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < 6; i++) {
    arrRow.push(i);
    arrCol.push(i);
    const index = getRandomInt(18);
    arrIconsName.push(IconsName[index]);
  }

  return (
    <div>
      <div>
        {arrRow.map((el, i) => (
          <div key={i} style={{ display: "flex" }}>
            {arrCol.map((_, i) => {
              const indexNumber = getRandomInt(18);
              return <Cell key={i} index={indexNumber}/>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Field;
