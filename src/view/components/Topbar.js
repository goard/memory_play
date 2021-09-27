import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Timer from "./Timer";

const Topbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Timer />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
