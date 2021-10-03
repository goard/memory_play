import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Timer from "./Timer";
import { useMain } from "../../../context/ContextProvider";
import ResultTableModal from "./ResultsTableModal";

const Topbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { initStart, dispatchArray, stateCountError, startPlay, setStartPlay } =
    useMain();
    
  const startHandler = () => {
    dispatchArray({
      type: "hiddenAll",
    });
    setStartPlay(true);
  };

  const clickHandler = (event) => {
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowPopover(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          sx={{ marginRight: "20px" }}
          color="inherit"
          onClick={clickHandler}
        >
          <FeatherIcon icon="bar-chart-2" />
        </IconButton>
        <ResultTableModal open={showModal} setOpen={setShowModal} />
        <Typography>Memory</Typography>
        <Box sx={{ flex: "1" }} />
        <Typography color="#f5d3d3" sx={{ marginRight: "10rem" }}>
          Error: {stateCountError}
        </Typography>
        {!startPlay && (
          <Button onClick={startHandler} variant="contained" color="warning">
            Start
          </Button>
        )}
        {startPlay && <Timer />}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
