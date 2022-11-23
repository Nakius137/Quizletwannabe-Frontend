import React, { useState, useContext } from "react";
import Fiszki from "./pages/Fiszki";
import DarkContext from "./context/dark-context";
import Toogle from "./components/Toogle";
import { Route, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Main from "./pages/Main";
import Login from "./pages/Loging/Login";
import Pisz from "./pages/Pisz";
import { UserContext } from "./context/user-context";
import Register from "./pages/Loging/Register";
import Passwdfrgt from "./pages/Loging/PasswordForgot"

import QuizContext from "./context/quiz-context";

function App() {
  let isdark = localStorage.getItem("isdark");
  isdark = JSON.parse(localStorage.getItem("isdark"));

  const [dark, setDark] = useState(isdark);

  const { logged } = useContext(UserContext);

  const [quiz, setQuiz] = useState();

  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      <DarkContext.Provider value={{ dark, setDark }}>
        <Switch>
          {logged ? (
            <Route exact path="/">
              <Main />
            </Route>
          ) : (
            <Route exact path="/">
              <Login />
            </Route>
          )}
          {logged ? (
            <Route path="/fiszka">
              <Fiszki />
            </Route>
          ) : (
            <Route path="/fiszka">
              <Login />
            </Route>
          )}
          {logged ? (
            <Route path="/quiz">
              <Quiz />
            </Route>
          ) : (
            <Route path="/quiz">
              <Login />
            </Route>
          )}
          {logged ? (
            <Route path="/pisz">
              <Pisz />
            </Route>
          ) : (
            <Route path="/pisz">
              <Login />
            </Route>
          )}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/passwdfrgt">
            <Passwdfrgt />
          </Route>
          
        </Switch>
        <Toogle />
      </DarkContext.Provider>
    </QuizContext.Provider>
  );
}

export default App;
