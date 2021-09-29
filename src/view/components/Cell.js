import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconsName } from "../../asset/IconsName";
import { useMain } from "../../context/ContextProvider";

const Cell = (props) => {
  const { arrayObjIcons, setIndex, timeout } = props;
  const [state, setState] = useState(true);
  const { dispatchArray, stateCount, dispatchCount } = useMain();

  /**
   * Handler on event click Button
   * @param {state, getIndex} arrayObjIcons.icons
   */
  const clickHandler = () => {
    setState(false);
    dispatchArray({
      type: "showCard",
      payload: arrayObjIcons.id,
    });
    dispatchCount({
      type: "increment",
    });
    setIndex((prev) => {
      const diff = arrayObjIcons.icons - prev;
      if (diff === 0) {
        dispatchArray({
          type: "removeCard",
          payload: arrayObjIcons.icons,
        });
      }
      return arrayObjIcons.icons;
    });
  };

  useEffect(() => {
    if (stateCount === 2) {
      setState(true);
      setIndex(0);
      dispatchArray({
        type: "hiddenAll",
      });
      dispatchCount({
        type: "reset",
      });
      clearTimeout(timeout.current);
      return;
    }
    if (!state) {
      setState(true);
      timeout.current = setTimeout(() => {
        dispatchCount({
          type: "reset",
        });
        dispatchArray({
          type: "hiddenAll",
        });
        setIndex(0);
      }, 5000);
      return () => {
        clearTimeout(timeout.current);
      };
    }
  }, [stateCount]);

  console.log("indexIcon", arrayObjIcons);
  // console.log("count", countClick);

  return (
    <Paper elevation={6} sx={{ textAlign: "center", padding: "5px" }}>
      <Button
        onClick={() => {
          arrayObjIcons.hidden &&
            Number.isInteger(arrayObjIcons.icons) &&
            clickHandler();
        }}
        sx={{ width: "100%" }}
      >
        {Number.isInteger(arrayObjIcons.icons) && (
          <FeatherIcon
            icon={arrayObjIcons.hidden ? "" : IconsName[arrayObjIcons.icons]}
            size="100"
          />
        )}
        {arrayObjIcons.icons === "" && (
          <Typography height="100px" width="100px">
            Guessed
          </Typography>
        )}
      </Button>
    </Paper>
  );
};

export default Cell;
