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
  const { logged, token, email } = useContext(UserContext);
  const slowka_titles = [];
  const [response, setResponse] = useState("");

  const { dark } = useContext(DarkContext);

  const { quiz, setQuiz } = useContext(QuizContext);

  const handleQuizChange = (slowa) => {
    setQuiz(slowa);
    console.log("zmienione");
    //console.log(quiz);
  };

  useEffect(() => {
    async function getData() {
      //console.log(email);
      //console.log(token);
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
        <h1 className={dark? "white-h1":"black-h1"}>Twoje Quizy:</h1>
        {logged ? (
          <div className="all-quiz">
            {response.collectionName.map((title, index) => {
              console.log(response.words.length);
              return (
                <div className={dark? "single-quiz-dark":"single-quiz"} key={index}>
                  <h1 className={dark? "tytul-quiz-dark":"tytul-quiz"}>
                    {response.collectionName[index].name}
                  </h1>
                  <div className="ilosc-slowek">
                    {" "}
                    <p className={dark? "p-dark":"p"}>
                      {" "}
                      {response.words.length} słówek{" "}
                    </p>
                  </div>

                  <Link className="link" to="/quiz">
                    <Button
                      
                      className={dark? "button-center btn btn-dark":"button-center"}
                      onClick={() => handleQuizChange(response)}
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
