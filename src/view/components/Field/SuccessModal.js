import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SuccessModal = ({ open, setOpen, seconds, minutes, stateCountError }) => {
  const closeHandler = () => {
    setOpen(fasle);
  };

  return (
    <Modal open={open} onClose={closeHandler}>
      <Box sx={style}>
        <Typography align="center">Good job graduation!!!</Typography>
        <Typography>
          Time:{" "}
          {`${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`}
        </Typography>
        <Typography>Error: {stateCountError}</Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
