import Grid from "@material-ui/core/Grid";
import React from "react";
import Cell from "./Cell";

const Field = (props) => {
  const { squareInt, arrIcons, getRandomInt, ...rest } = props;
  const arrIconsToCell = [];
  console.log("field", arrIcons);

  const getArrayRandom = () => {
    const arrCopy = arrIcons.slice(),
      arrCopy2 = arrIcons.slice();

    for (let i = 0; i < squareInt ** 2; i++) {
      if (i % 2) {
        const index = getRandomInt(arrCopy.length);
        arrIconsToCell.push(arrCopy[index]);
        arrCopy.splice(index, 1);
        continue;
      }
      const index = getRandomInt(arrCopy2.length);
      arrIconsToCell.push(arrCopy2[index]);
      arrCopy2.splice(index, 1);
    }
  };

  getArrayRandom();

  return (
    <Grid container rowSpacing={4} columnSpacing={4} sx={{marginTop: "3rem"}}>
      {Array.from(Array(squareInt ** 2)).map((_, i) => (
        <Grid item key={i} xs={3}>
          <Cell index={arrIconsToCell[i]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
