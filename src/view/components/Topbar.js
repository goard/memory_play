import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Timer from "./Timer";

const Topbar = (props) => {
  const { start, setStart } = props;

  const startHandler = () => {
    setStart(true);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Memory</Typography>
        <Box sx={{ flex: "1" }} />
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
