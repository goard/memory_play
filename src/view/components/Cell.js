import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconsName } from "./IconsName";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Cell = (props) => {
  const { hiddenAll, indexIcons, count, setCount, func, setIndex, ...rest } =
    props;
  const [state, setState] = useState(true);

  /**
   * Handler on event click Button
   * @param {state, getIndex} indexIcons
   */
  const clickHandler = () => {
    setState(false);
    setCount(count + 1);
    setIndex((prev) => {
      const diff = indexIcons - prev;
      if (diff === 0) func(indexIcons);
      return indexIcons;
    });
  };
  useEffect(() => {
    if (count === 2) {
      setState(true);
      setCount(0);
      setIndex(0);
    }
    const timeout = setTimeout(() => {
      setState(true);
      setCount(0);
      setIndex(0);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [state, count]);

  console.log("count", count);

  return (
    <Paper elevation={6} sx={{ textAlign: "center", padding: "5px" }}>
      <Button
        onClick={() => {
          hiddenAll && state && clickHandler();
        }}
        sx={{ width: "100%" }}
      >
        {Number.isInteger(indexIcons) && (
          <FeatherIcon
            icon={hiddenAll && state ? "" : IconsName[indexIcons]}
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
