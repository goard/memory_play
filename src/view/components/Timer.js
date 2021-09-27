import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  /**
   * Counter auto every second after 5 minute reset
   * @returns
   */
  const stopwatch = () => {
    if (seconds === 59) {
      setSeconds(0);
      setMinute(minute + 1);
      return;
    }
    if (minute === 5) {
      setMinute(0);
      setSeconds(1);
      return;
    }
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => stopwatch(), 1000);
    return () => clearTimeout(timer);
  }, [seconds, minute]);

  console.log("minute", minute);

  return (
    <Typography>{`${minute < 10 ? "0" + minute : minute}:${
      seconds < 10 ? "0" + seconds : seconds
    }`}</Typography>
  );
};

export default Timer;
