import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import SearchForm from "./components/SearchForm.js";
import CharacterCard from "./components/CharacterCard.js";
import { Route } from 'react-router-dom';
import { domainToASCII } from "url";
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path="/"> <WelcomePage /> </Route>
      <Route path="/CharacterList"> <CharacterList /> </Route>
    </main>
  );
}
