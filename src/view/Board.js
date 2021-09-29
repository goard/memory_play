import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Field from "./components/Field";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";

const Board = (props) => {
  const { ...rest } = props;
  const [startPlay, setStartPlay] = useState(false);

  return (
    <Container>
      <Topbar start={startPlay} setStart={setStartPlay} />
      <Field start={startPlay} />
      <Footer />
    </Container>
  );
};

export default Board;
