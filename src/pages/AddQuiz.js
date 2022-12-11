import ListGroup from "react-bootstrap/ListGroup";
import { useContext, useRef, useState } from "react";
import Nav from "../components/Navbar";
import { Alert, Button, Form } from "react-bootstrap";
import DarkContext from "../context/dark-context";
import axios from "axios";
import { UserContext } from "../context/user-context";
import { useHistory } from "react-router-dom";

const AddQuiz = () => {
  const { dark } = useContext(DarkContext);
  const { token, email } = useContext(UserContext);

  const history = useHistory();

  const [words, setWords] = useState([]);

  const fail = useRef();
  const succes = useRef();
  const center = useRef();
  const fail_quiz = useRef();
  const succes_quiz = useRef();

  const newQuiz = { name: "", words: [], email: "" };

  const OriginalContent = useRef();
  const TranslatedContent = useRef();
  const title = useRef();

  const handleAddToArray = () => {
    let Original = OriginalContent.current.value;
    let Translated = TranslatedContent.current.value;
    if (Original === "" || Translated === "") {
      center.current.className = "center-alert";
      fail.current.className =
        "fade danger-alert-fiszka alert alert-danger show";
      succes.current.className =
        "fade succes-alert-fiszka-hidden alert alert-success show";
      fail_quiz.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
    } else {
      center.current.className = "center-alert";
      succes.current.className =
        "fade succes-alert-fiszka alert alert-success show";
      fail.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
      fail_quiz.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
      setTimeout(() => {
        succes.current.className =
          "fade succes-alert-fiszka-hidden alert alert-success show";
        center.current.className = "center-alert-hidden";
      }, 3000);
      setWords([...words, { Original, Translated }]);

      OriginalContent.current.value = "";
      TranslatedContent.current.value = "";
    }
  };

  const handleAddQuiz = async () => {
    if (title.current.value !== "" && words.length !== 0) {
      newQuiz.name = title.current.value;
      newQuiz.email = email;
      newQuiz.words = words;

      center.current.className = "center-alert";
      fail.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
      succes_quiz.current.className =
        "fade succes-alert-fiszka  alert alert-success show";
      fail_quiz.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";

      setTimeout(() => {
        history.push("/");
      }, 3000);

      await axios.post("http://www.localhost:5000/addquiz", newQuiz, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } else {
      center.current.className = "center-alert";
      fail_quiz.current.className =
        "fade danger-alert-fiszka alert alert-danger show";
      fail.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="center-alert-hidden" ref={center}>
        <Alert
          ref={succes}
          className="succes-alert-fiszka-hidden"
          key="success"
          variant="success"
        >
          Słówko dodane!
        </Alert>
        <Alert
          ref={succes_quiz}
          className="succes-alert-fiszka-hidden"
          key="success1"
          variant="success"
        >
          Dodano Quiz do twojej kolekcji!
        </Alert>
        <Alert
          ref={fail_quiz}
          className="danger-alert-fiszka-hidden"
          key="danger"
          variant="danger"
        >
          Nie dodano tytuły lub słówek!
        </Alert>
        <Alert
          ref={fail}
          className="danger-alert-fiszka-hidden"
          key="danger1"
          variant="danger"
        >
          Puste pole!
        </Alert>
      </div>
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
          onClick={handleAddToArray}
        >
          Dodaj słówko
        </Button>

        <div className="noweslowka">
          {words.map((word, index) => {
            return (
              <ListGroup key={index} horizontal className="add-words">
                <>
                  <ListGroup.Item className="slowko">
                    {word.Original}
                  </ListGroup.Item>
                  <ListGroup.Item className="slowko">
                    {word.Translated}
                  </ListGroup.Item>
                </>
              </ListGroup>
            );
          })}
        </div>

        <Button
          className={dark ? "btn btn-dark break" : "btn btn-primary break"}
          onClick={handleAddQuiz}
        >
          Dodaj Quiz
        </Button>
      </div>
    </>
  );
};

export default AddQuiz;
