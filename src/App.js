import React, { useState, useEffect, useContext } from "react";
import Fiszki from "./pages/Fiszki";
import DarkContext from "./context/dark-context";
import Toogle from "./components/Toogle";
import { Link, Route, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Main from "./pages/Main";
import Login from "./pages/Login";
import User from "./pages/User";
import Pisz from "./pages/Pisz";
import axios from "axios";
import UserContext from "./context/user-context";

function App() {


  let isdark = localStorage.getItem("isdark");
  isdark = JSON.parse(localStorage.getItem("isdark"));

  const [dark, setDark] = useState(isdark);
  const value = { dark, setDark };
  const {login} = useContext(UserContext)

  return (
    <DarkContext.Provider value={value}>
      <Switch>
        {login?<Route exact path="/">
          <Main />
        </Route>:<Route exact path="/">
          <Login />
        </Route>}
        
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/fiszka">
          <Fiszki />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/pisz">
          <Pisz />
        </Route>
      </Switch>
      <Toogle />
    </DarkContext.Provider>
  );
}

export default App;
