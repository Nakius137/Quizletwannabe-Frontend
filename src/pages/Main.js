import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import slowka from "../slowka";
import axios from "axios";
import { UserContext } from "../context/user-context";
import QuizContext from "../context/quiz-context";
import DarkContext from "../context/dark-context";

function Main() {
  const { logged, token, email, setResponse, response } =
    useContext(UserContext);
  const { dark } = useContext(DarkContext);
  const { setQuiz } = useContext(QuizContext);

  const handleQuizChange = (response, collectionName) => {
    for (let collection of response.collection) {
      if (collection.name === collectionName) {
        setQuiz(collection);
      }
    }
  };

  useEffect(() => {
    async function getData() {
      axios
        .get(`http://localhost:5000/main/?email=${email}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        })
        .then((response) => setResponse(response.data));
    }
    getData();
  }, []);

  if (response) {
    return (
      <>
        <Nav></Nav>
        <h1 className={dark ? "white-h1" : "black-h1"}>Twoje Quizy:</h1>
        {logged ? (
          <div className="all-quiz">
            {Object.entries(response.collection).map((index) => {
              console.log(index);
              return (
                <div
                  className={dark ? "single-quiz-dark" : "single-quiz"}
                  key={index}
                >
                  <h1 className={dark ? "tytul-quiz-dark" : "tytul-quiz"}>
                    {index[1].name}
                  </h1>
                  <div className="ilosc-slowek">
                    {" "}
                    <p className={dark ? "p-dark" : "p"}>
                      {" "}
                      {index[1].words.length} słówek{" "}
                    </p>
                  </div>

                  <Link className="link" to="/quiz">
                    <Button
                      className={
                        dark ? "button-center btn btn-dark" : "button-center"
                      }
                      onClick={() => handleQuizChange(response, index[1].name)}
                    >
                      Przejdź do quizu
                    </Button>
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
}

export default Main;
