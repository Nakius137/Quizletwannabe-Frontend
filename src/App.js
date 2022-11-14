import React, { useState, useEffect } from "react";
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

function App() {
  // zrob to tak z komponentem loginu i inputami
  // aby data bylo dynamiczne, tzn dajesz tam useState
  // i potem na klickniecie przycisku ma wykonax axiosa

  // const data = {
  //   email: "karol@wp.pl",
  //   password: "qwerty",
  // };

  // useEffect(() => {
  //   axios
  //     .post("http://www.localhost:5000/login", data)
  //     .then((respose) => console.log(respose));
  // }, []);

  let isdark = localStorage.getItem("isdark");
  isdark = JSON.parse(localStorage.getItem("isdark"));

  const [dark, setDark] = useState(isdark);
  const value = { dark, setDark };

  return (
    <DarkContext.Provider value={value}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
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
