import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Given from "./Given";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/given" component={Given} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
