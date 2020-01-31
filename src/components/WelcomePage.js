import React from "react";
import CharacterList from "./CharacterList";
import styled from 'styled-components';
import {BoxColor} from './styles';
import { styles } from "ansi-colors";

const iamge = styled.image `
  margin-left: 35%;
`

export default function WelcomePage() {
  return (
    <BoxColor className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </BoxColor>
  );
}
