import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Timer from "./Timer";
import { useMain } from "../../context/ContextProvider";

const Topbar = (props) => {
  const { start, setStart } = props;
  const { dispatchArray } = useMain();

  const startHandler = () => {
    dispatchArray({
      type: "hiddenAll",
    });
    setStart(true);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Memory</Typography>
        <Box sx={{ flex: "1" }} />
        <Typography color="#f5d3d3" sx={{ marginRight: "5rem" }}>Error: </Typography>
        {!start && (
          <Button onClick={startHandler} variant="contained" color="warning">
            Start
          </Button>
        )}
        {start && <Timer />}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
