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
import Passwdfrgt from "./pages/Loging/PasswordForgot";
import AddQuiz from "./pages/AddQuiz";

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
          <Route exact path="/">
            {logged ? <Main /> : <Login />}
          </Route>

          <Route path="/fiszka">{logged ? <Fiszki /> : <Login />}</Route>

          <Route path="/quiz">{logged ? <Quiz /> : <Login />}</Route>

          <Route path="/pisz">{logged ? <Pisz /> : <Login />}</Route>

          <Route path="/addquiz">{logged ? <AddQuiz /> : <Login />}</Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/passwdfrgt">
            <Passwdfrgt />
          </Route>
          <Route path="/*">
            <Login />
          </Route>
        </Switch>
        <Toogle />
      </DarkContext.Provider>
    </QuizContext.Provider>
  );
}

export default App;
