import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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

const SuccessModal = ({ open, seconds, minutes, stateCountError }) => {
  const clickHandler = () => {
    location.reload();
  };

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Typography align="center">Good job graduation!!!</Typography>
        <Typography>
          Time:{" "}
          {`${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`}
        </Typography>
        <Typography>Error: {stateCountError}</Typography>
        <Box display="flex" justifyContent="center" sx={{ marginTop: "15px" }}>
          <Button variant="contained" color="success" onClick={clickHandler}>
            New play
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
