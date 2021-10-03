import React from "react";
import {
  Modal,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ResultTableModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <TableContainer component={Paper} sx={style}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Login</TableCell>
              <TableCell>Errors</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};

export default ResultTableModal;
