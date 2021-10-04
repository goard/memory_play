import React, { useEffect, useState } from "react";
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
  const [form, setForm] = useState({
    login: "",
    minutes: "",
    seconds: "",
    error: "",
  });
  const [arrData, setArrData] = useState([]);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const dataUsers = JSON.parse(localStorage.getItem("users"));
    if (dataUsers) setArrData(dataUsers);
  }, []);

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
          <TableBody>
            {arrData.length > 0 &&
              arrData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.login}</TableCell>
                  <TableCell>{row.error}</TableCell>
                  <TableCell>
                    {`${row.minutes < 10 ? "0" + row.minutes : row.minutes}:${
                      row.seconds < 10 ? "0" + row.seconds : row.seconds
                    }`}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};

export default ResultTableModal;
