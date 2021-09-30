import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Field from "./components/Field";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";
import StartInitial from "./components/StartInitial";
import { useMain } from "../context/ContextProvider";

const BoardView = () => {
  const [startPlay, setStartPlay] = useState(false);
  const { initStart } = useMain();

  if (!initStart.ready) return <StartInitial />;

  return (
    <Container>
      <Topbar start={startPlay} setStart={setStartPlay} />
      <Field start={startPlay} />
      <Footer />
    </Container>
  );
};

export default BoardView;
