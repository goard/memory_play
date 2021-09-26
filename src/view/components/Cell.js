import React from "react";
import FeatherIcon from "feather-icons-react";
import {IconsName} from "./IconsName"

const Cell = (props) => {
  const {index, ...rest} = props
  return (
    <div {...rest} style={{ border: "1px solid #000" }}>
      <FeatherIcon icon={IconsName[index]} size="70"/>
    </div>
  );
};

export default Cell;
