import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useMain } from "../../../context/ContextProvider";

const Timer = () => {
  const { timerId, secondsRef, minutesRef } = useMain();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  /**
   * Counter function stopwatch auto every second after 50 minute reset
   * @returns
   */
  const stopwatch = () => {
    if (seconds === 59) {
      setSeconds(0);
      setMinutes(minutes + 1);
      return;
    }
    if (minutes === 50) {
      setMinutes(0);
      setSeconds(1);
      return;
    }
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => stopwatch(), 1000);
    timerId.current = timer;
    secondsRef.current = seconds;
    minutesRef.current = minutes;
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <Typography>{`${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`}</Typography>
  );
};

export default Timer;
