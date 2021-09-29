import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Field from "./components/Field";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";

const Board = (props) => {
  const { arrIcons, squareInt, checkGuessed } = props;
  const [startPlay, setStartPlay] = useState(false);

  return (
    <Container>
      <Topbar start={startPlay} setStart={setStartPlay} />
      <Field
        squareInt={squareInt}
        arrIcons={arrIcons}
        start={startPlay}
        checkGuessed={checkGuessed}
      />
      <Footer />
    </Container>
  );
};

export default Board;
