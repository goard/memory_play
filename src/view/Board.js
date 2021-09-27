import React from "react";
import Topbar from "./components/Topbar";
import Field from "./components/Field";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";
import { IconsName } from "./components/IconsName";

const Board = () => {
  const squareInt = 4;
  const arrIcons = [];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const getRandomIconsArray = () => {
    for (let i = 0; i < squareInt ** 2 / 2; i++) {
      let index = getRandomInt(IconsName.length);
      if (i) {
        while (arrIcons.includes(index)) {
          index = getRandomInt(IconsName.length);
        }
        arrIcons.push(index);
        continue;
      }
      arrIcons.push(index);
    }
  };

  getRandomIconsArray();

  return (
    <Container>
      <Topbar />
      <Field
        squareInt={squareInt}
        arrIcons={arrIcons}
        getRandomInt={getRandomInt}
      />

      <Footer />
    </Container>
  );
};

export default Board;
