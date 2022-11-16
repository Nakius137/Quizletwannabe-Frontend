import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import slowka from "../slowka";
import axios from "axios";
import { UserContext } from "../context/user-context";

function Main() {
  const { logged, token, email } = useContext(UserContext);
  const slowka_titles = [];

  useEffect(() => {
    async function getData() {
      console.log(email);
      console.log(token);
      axios
        .get(`http://localhost:5000/main/?email=${email}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        })
        .then((response) => console.log(response));
    }
    getData();
  }, []);

  //dodajemy do tablicy same tytuły Quizów //tak pisze po polsku. Bad boyyyyyyyyyyyy - cringe
  for (let index = 0; index < slowka.length; index++) {
    slowka_titles.push(slowka[index].title);
  }

  return (
    <>
      <Nav></Nav>
      <h1>Twoje Quizy:</h1>
      {logged ? (
        <div className="all-quiz">
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
        </div>
      ) : (
        <h1>nie jesteś Zalogowany</h1>
      )}
    </>
  );
}

export default Main;
