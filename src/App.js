import React from "react";
import "./App.css"
import Navbar from "./components/Login-Register/Navbar";
import Login from "./components/Login-Register/Login"
import Register from "./components/Login-Register/Register"
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar/>
      </Route>

      <Route exact path="/Login">
        <Login />
      </Route>

      <Route path="/Register">
        <Register />
      </Route>
    </Switch>
  );
};

export default App;