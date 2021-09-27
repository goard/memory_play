import React from "react";
import FeatherIcon from "feather-icons-react";
import { IconsName } from "./IconsName";
import Paper from "@material-ui/core/Paper";

const Cell = (props) => {
  const { index, ...rest } = props;
  return (
    <div {...rest} style={{ border: "1px solid #000" }}>
      <Paper>
        <FeatherIcon icon={IconsName[index]} size="70" />
      </Paper>
    </div>
  );
};

export default Cell;
