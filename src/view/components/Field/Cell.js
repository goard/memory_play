import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconsName } from "../../../asset/IconsName";
import { useMain } from "../../../context/ContextProvider";

const Cell = (props) => {
  const { arrayObjIcons, setIndex, timeout, countClick, setShowSuccess } =
    props;
  const [state, setState] = useState(true);
  const {
    dispatchArray,
    dispatchCountError,
    stateArray,
    timerId,
    initStart,
    minutesRef,
    secondsRef,
    stateCountError,
  } = useMain();

  /**
   * Handler on event click Button
   * @param {state, getIndex} arrayObjIcons.icon
   */
  const clickHandler = () => {
    setState(false);
    dispatchArray({
      type: "showCard",
      payload: arrayObjIcons.id,
    });
    countClick.current++;
    setIndex((prev) => {
      const diff = arrayObjIcons.icon - prev;
      if (diff === 0) {
        dispatchArray({
          type: "removeCard",
          payload: arrayObjIcons.icon,
        });
        return diff;
      }
      if (countClick.current === 2)
        dispatchCountError({
          type: "increment",
        });
      return arrayObjIcons.icon;
    });
  };

  useEffect(() => {
    if (countClick.current === 2) {
      setState(true);
      setIndex(0);
      dispatchArray({
        type: "hiddenAll",
      });
      countClick.current = 0;
      clearTimeout(timeout.current);
      return;
    }
    if (!state) {
      setState(true);
      timeout.current = setTimeout(() => {
        countClick.current = 0;
        dispatchArray({
          type: "hiddenAll",
        });
        setIndex(0);
      }, 5000);
      return () => {
        clearTimeout(timeout.current);
      };
    }
    const success = stateArray.reduce((prev, cur) => {
      return { icon: prev.icon + cur.icon };
    });
    if (success.icon === "") {
      setShowSuccess(true);
      clearTimeout(timerId.current);
      let arr = [];
      const dataUsers = JSON.parse(localStorage.getItem("users"));
      if (!dataUsers) localStorage.setItem("users", JSON.stringify(arr));
      arr = JSON.parse(localStorage.getItem("users")) || [];
      let obj = {
        login: initStart.login,
        minutes: minutesRef.current,
        seconds: secondsRef.current,
        error: stateCountError,
      };
      arr.push(obj);
      localStorage.setItem("users", JSON.stringify(arr));
    }
  }, [state]);

  return (
    <Paper elevation={6} sx={{ textAlign: "center", padding: "5px" }}>
      <Button
        onClick={() => {
          arrayObjIcons.hidden &&
            Number.isInteger(arrayObjIcons.icon) &&
            clickHandler();
        }}
        sx={{ width: "100%" }}
      >
        {Number.isInteger(arrayObjIcons.icon) && (
          <FeatherIcon
            icon={arrayObjIcons.hidden ? "" : IconsName[arrayObjIcons.icon]}
            size="100"
          />
        )}
        {arrayObjIcons.icon === "" && (
          <Typography height="100px" width="100px">
            Guessed
          </Typography>
        )}
      </Button>
    </Paper>
  );
};

export default Cell;
