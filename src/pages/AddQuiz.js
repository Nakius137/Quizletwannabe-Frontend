import ListGroup from "react-bootstrap/ListGroup";
import { useContext, useRef, useState } from "react";
import Nav from "../components/Navbar";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DarkContext from "../context/dark-context";

function AddQuiz() {
  const { dark } = useContext(DarkContext);
  const navigate = useNavigate();

  const [words, setWords] = useState([]);

  const newQuiz = [];

  const OriginalContent = useRef();
  const TranslatedContent = useRef();
  const title = useRef();

  function AddToArray() {
    let Original = OriginalContent.current.value;
    let Translated = TranslatedContent.current.value;
    setWords([...words, { Original, Translated }]);

    OriginalContent.current.value = "";
    TranslatedContent.current.value = "";
  }

  function AddQuiz() {
    newQuiz.push(title.current.value);
    newQuiz.push(words);
    console.log(newQuiz);
    alert("Quiz został dodany do twojego konta");
    navigate("/");
  }

  return (
    <>
      <Nav></Nav>
      <div className="center-wrap">
        <Form.Control
          ref={title}
          className="add-title"
          placeholder="Tytuł Quizu"
        />

        <ListGroup horizontal className="add-words">
          <>
            <ListGroup.Item className="add-word">
              <Form.Control
                ref={OriginalContent}
                className="add-word"
                placeholder="Pierwszy język"
              />
            </ListGroup.Item>
            <ListGroup.Item className="add-word">
              <Form.Control
                ref={TranslatedContent}
                className="add-word"
                placeholder="Drugi język"
              />
            </ListGroup.Item>
          </>
        </ListGroup>

        <Button
          className={dark ? "btn btn-dark break" : "btn btn-primary break"}
          onClick={AddToArray}
        >
          Dodaj słówko
        </Button>

        <div className="noweslowka">
          {words.map((word, index) => {
            return (
              <ListGroup key={index} horizontal className="add-words">
                <>
                  <ListGroup.Item className="add-word">
                    {word.Original}
                  </ListGroup.Item>
                  <ListGroup.Item className="add-word">
                    {word.Translated}
                  </ListGroup.Item>
                </>
              </ListGroup>
            );
          })}
        </div>

        <Button
          className={dark ? "btn btn-dark break" : "btn btn-primary break"}
          onClick={AddQuiz}
        >
          Dodaj Quiz
        </Button>
      </div>
    </>
  );
}

export default AddQuiz;
