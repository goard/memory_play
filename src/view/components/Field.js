import Grid from "@material-ui/core/Grid";
import React from "react";
import Cell from "./Cell";

const Field = (props) => {
  const { squareInt, arrIcons, start, open, ...rest } = props;
  console.log("field", arrIcons);

  return (
    <Grid container rowSpacing={4} columnSpacing={4} sx={{ marginTop: "3rem" }}>
      {Array.from(Array(squareInt ** 2)).map((_, i) => (
        <Grid item key={i} xs={3}>
          <Cell index={arrIcons[i]} hidden={start} open={open} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
