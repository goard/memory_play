import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconsName } from "./IconsName";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Cell = (props) => {
  const { index, ...rest } = props;
  const [state, setState] = useState(false);

  const clickHandler = (index) => {
    console.log("click", index);
    setState((prev) => !prev);
    console.log("state", state);
  };

  return (
    <Paper elevation={6} sx={{ textAlign: "center", padding: "5px" }}>
      <Button onClick={() => clickHandler(index)} sx={{ width: "100%" }}>
        <FeatherIcon icon={state ? "" : IconsName[index]} size="100" />
      </Button>
    </Paper>
  );
};

export default Cell;
