import React, { useState } from "react";
import DarkContext from "../context/dark-context";
import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import slowka from "../slowka";
import UserContext from "../context/user-context";

function Main() {
  const {login} = useContext(UserContext)
  const { dark } = useContext(DarkContext);
  const slowka_titles = [];

  //dodajemy do tablicy same tytuły Quizów //tak pisze po polsku. Bad boyyyyyyyyyyyy
  for (let index = 0; index < slowka.length; index++) {
    slowka_titles.push(slowka[index].title);
  }

  return (
    <>
      <Nav></Nav>
      <h1>Twoje Quizy:</h1>
      {login?<div className="all-quiz">
        {slowka_titles.map((title, index) => {
          return (
            <div className="single-quiz" key={index}>
              <h1>{title}</h1>
              <Link className="link" to="/quiz">
                <Button>Przejdź do quizu</Button>
              </Link>
            </div>
          );
        })}
      </div>:<h1>nie jesteś Zalogowany</h1>}
      
      
    </>
  );
}

export default Main;
