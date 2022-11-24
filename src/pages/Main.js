import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import axios from "axios";
import { UserContext } from "../context/user-context";
import QuizContext from "../context/quiz-context";
import DarkContext from "../context/dark-context";

function Main() {
  const { token, email, setResponse, response } = useContext(UserContext);
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
    //console.log(response.collection);
    return (
      <>
        <Nav></Nav>
        <h1 className={dark ? "white-h1" : "black-h1"}>Twoje Quizy:</h1>

        <div className="all-quiz">
          {Object.entries(response.collection).map((index) => {
            //console.log(index);
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
                    {index[1].words.length}{" "}
                    {index[1].words.length > 5 ? "słówek" : "słowa"}{" "}
                  </p>
                  <Button
                    className={
                      dark
                        ? "btn btn-dark delete-btn "
                        : "btn btn-primary delete-btn "
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Button>
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
        <Link to="/addquiz">
          <Button className={dark ? " btn btn-dark add-quiz" : " add-quiz"}>
            +
          </Button>
        </Link>
      </>
    );
  }
}

export default Main;
