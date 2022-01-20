import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Word from "./components/Word";
import Number from "./components/Number";

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Practice</h1>
      <hr/>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:string/:stringColor/:backgroundColor">
          <Word />
        </Route>
        <Route path="/:integer">
          <Number />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
