import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Cell from "./Cell";
import { useMain } from "../../../context/ContextProvider";
import SuccessModal from "./SuccessModal";

const Field = () => {
  const {
    stateArray,
    initStart,
    startPlay,
    secondsRef,
    minutesRef,
    stateCountError,
  } = useMain();
  const [showSuccess, setShowSuccess] = useState(false);
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);
  const countClick = useRef(0);

  console.log("count", countClick);

  return (
    <Grid container rowSpacing={4} columnSpacing={4} sx={{ marginTop: "3rem" }}>
      {Array.from(Array(initStart.square ** 2)).map((_, i) => (
        <Grid item key={i} xs={12 / initStart.square}>
          <Cell
            setIndex={setIndex}
            arrayObjIcons={stateArray[i]}
            hiddenAll={startPlay}
            timeout={timeout}
            countClick={countClick}
            setShowSuccess={setShowSuccess}
          />
        </Grid>
      ))}
      <SuccessModal
        open={showSuccess}
        setOpen={setShowSuccess}
        seconds={secondsRef.current}
        minutes={minutesRef.current}
        stateCountError={stateCountError}
      />
    </Grid>
  );
};

export default Field;
