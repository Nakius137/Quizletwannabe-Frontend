import ListGroup from "react-bootstrap/ListGroup";
import slowka from "../slowka";

import QuizContext from "../context/quiz-context";
import { useContext } from "react";

function Slowka() {
  const { quiz, setQuiz } = useContext(QuizContext);
  console.log(quiz);
  return (
    <>
      <div className="center-wrap">
        {quiz.words.map((slowko, index) => {
          return (
            <ListGroup key={index} horizontal id="slowka" className="slowka">
              <ListGroup.Item id="slowko " className="slowko">
                {slowko.OriginalContent}
              </ListGroup.Item>
              <ListGroup.Item id="slowko " className="slowko">
                {slowko.TranslatedContent}
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
    </>
  );
}

export default Slowka;
