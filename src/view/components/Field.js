import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Cell from "./Cell";

const Field = (props) => {
  const { squareInt, arrIcons, start, checkGuessed } = props;
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={4}
      sx={{ marginTop: "0.75rem" }}
    >
      {Array.from(Array(squareInt ** 2)).map((_, i) => (
        <Grid item key={i} xs={12 / squareInt}>
          <Cell
            setIndex={setIndex}
            indexIcons={arrIcons[i]}
            hiddenAll={start}
            checkGuessed={checkGuessed}
            count={count}
            setCount={setCount}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
