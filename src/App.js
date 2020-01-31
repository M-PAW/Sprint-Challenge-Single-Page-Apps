import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';

import CharacterCard from "./components/CharacterCard.js";
import { Route } from 'react-router-dom';
import { domainToASCII } from "url";
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/"> <WelcomePage /> </Route>
      <Route path="/CharacterList"> <CharacterList /> </Route>
    </main>
  );
}
