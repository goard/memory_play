import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconsName } from "./IconsName";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Cell = (props) => {
  const {
    index,
    hidden,
    setIndex,
    setPrevIndex,
    indexIcons,
    count,
    setCount,
    func,
    ...rest
  } = props;
  const [state, setState] = useState(true);
  // const [count, setCount] = useState(0);

  /**
   * Handler on event click Button
   * @param {state, getIndex} indexIcons
   */
  const clickHandler = () => {
    if (state) {
      setIndex((prev) => {
        const diff = indexIcons - prev;
        if (diff === 0) {
          func(prev);
          return 0;
        }
        return indexIcons;
      });
      setCount(count + 1);
      setState(false);
      return;
    }
    setState(false);
    console.log("state", state);
  };

  useEffect(() => {
    if (count === 2) {
      setState(true);
      setCount(0);
    }
    const timeout = setTimeout(() => {
      setState(true);
      setIndex(0);
      setCount(0);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [state, count]);

  console.log("state", state);

  return (
    <Paper elevation={6} sx={{ textAlign: "center", padding: "5px" }}>
      <Button
        onClick={() => {
          hidden && state && clickHandler();
        }}
        sx={{ width: "100%" }}
      >
        {Number.isInteger(indexIcons) && (
          <FeatherIcon
            icon={hidden && state ? "" : IconsName[indexIcons]}
            size="100"
          />
        )}
        {indexIcons === "" && (
          <Typography height="100px" width="100px">
            Guessed
          </Typography>
        )}
      </Button>
    </Paper>
  );
};

export default Cell;
