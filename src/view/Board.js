import React from "react";
import Topbar from "./components/Topbar";
import Field from "./components/Field";
import Footer from "./components/Footer";
import FeatherIcon from "feather-icons-react"

const Board = () => {
  return (
    <>
      <Topbar />
      <Field squareInt={4}/>
      <Footer />
    </>
  );
};

export default Board;
