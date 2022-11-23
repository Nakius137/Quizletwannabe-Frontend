import ListGroup from "react-bootstrap/ListGroup";
import QuizContext from "../context/quiz-context";
import { useContext } from "react";
import { UserContext } from "../context/user-context";

function Slowka() {
  const { quiz } = useContext(QuizContext);
  const { response } = useContext(UserContext);

  if (response.collection) {
    const quizArray = Object.entries(quiz);
    const quizWords = quizArray[1][1];

    return (
      <>
        <div className="center-wrap">
          {quizWords.map((word) => {
            return (
              <>
                <ListGroup horizontal id="slowka" className="slowka">
                  <>
                    <ListGroup.Item id="slowko " className="slowko">
                      {word.OriginalContent}
                    </ListGroup.Item>
                    <ListGroup.Item id="slowko " className="slowko">
                      {word.TranslatedContent}
                    </ListGroup.Item>
                  </>
                </ListGroup>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Slowka;
