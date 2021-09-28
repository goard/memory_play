import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Cell from "./Cell";

const Field = (props) => {
  const { squareInt, arrIcons, start, setIndex, setPrevIndex, func, ...rest } =
    props;
  const [count, setCount] = useState(0);
  console.log("field", arrIcons);

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
            count={count}
            setCount={setCount}
            indexIcons={arrIcons[i]}
            hidden={start}
            setIndex={setIndex}
            setPrevIndex={setPrevIndex}
            func={func}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
