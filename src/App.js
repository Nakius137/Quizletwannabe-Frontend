import React, { useState, useContext } from "react";
import Fiszki from "./pages/Fiszki";
import DarkContext from "./context/dark-context";
import Toogle from "./components/Toogle";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={logged ? <Main /> : <Login />}></Route>

          <Route
            path="/fiszka"
            element={logged ? <Fiszki /> : <Login />}
          ></Route>

          <Route path="/quiz" element={logged ? <Quiz /> : <Login />}></Route>

          <Route path="/pisz" element={logged ? <Pisz /> : <Login />}></Route>

          <Route path="/login" element={logged ? <Main /> : <Login />}></Route>

          <Route
            path="/register"
            element={logged ? <Main /> : <Register />}
          ></Route>

          <Route
            path="/passwdfrgt"
            element={logged ? <Main /> : <Passwdfrgt />}
          ></Route>

          <Route
            path="/addquiz"
            element={logged ? <AddQuiz /> : <Login />}
          ></Route>

          <Route path="*" element={logged ? <Main /> : <Login />}></Route>
        </Routes>
        <Toogle />
      </DarkContext.Provider>
    </QuizContext.Provider>
  );
}

export default App;
