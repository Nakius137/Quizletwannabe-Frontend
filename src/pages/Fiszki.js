import Nav from "../components/Navbar";
import slowka from "../slowka";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap";
import { useContext } from "react";
import DarkContext from "../context/dark-context";
import QuizContext from "../context/quiz-context";

function handleWordChange(slowko,index) {
  console.log(slowko);
  if (document.getElementById(index).innerHTML === slowko.OriginalContent) {
    document.getElementById(index).innerHTML = slowko.TranslatedContent;
  } else {
    document.getElementById(index).innerHTML = slowko.OriginalContent;
  }
}

function Fiszki() {
  const { dark } = useContext(DarkContext);

  const { quiz, setQuiz } = useContext(QuizContext);
  //console.log(quiz.words);

  return (
    <>
      <Nav></Nav>
      <div className="center-fiszke">
        <Carousel interval={null}>
          {quiz.words.map((slowko,index) => {
            return (
              <Carousel.Item
                key={slowko.OriginalContent}
                onClick={() => handleWordChange(slowko,index)}
              >
                <div className={dark ? "tlo-fiszka-dark" : "tlo-fiszka"}></div>
                <Carousel.Caption>
                  <h1 id={index} className="slowko-fiszka">
                    {slowko.TranslatedContent}
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Fiszki;

