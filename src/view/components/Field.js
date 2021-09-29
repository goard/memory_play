import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Cell from "./Cell";
import { useMain } from "../../context/ContextProvider";

const Field = (props) => {
  const { start } = props;
  const { stateArray, squareInt } = useMain();
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);

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
            arrayObjIcons={stateArray[i]}
            hiddenAll={start}
            timeout={timeout}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
