import Nav from "../components/Navbar";
import slowka from "../slowka";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap";
import { useContext, useRef } from "react";
import DarkContext from "../context/dark-context";
import { Alert, Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { useEffect } from "react";

function Fiszki() {
  const { dark } = useContext(DarkContext);

  function hideAlert() {
    succes.current.className =
      "fade succes-alert-fiszka-hidden alert alert-success show";
    fail.current.className =
      "fade danger-alert-fiszka-hidden alert alert-danger show";
  }

  const ref = useRef();
  const refs = useRef([]);
  const succes = useRef();
  const fail = useRef();
  const center = useRef();

  const onPrevClick = () => {
    hideAlert();
    center.current.className = "center-fiszke";
    ref.current.prev();
  };
  const onNextClick = () => {
    hideAlert();
    center.current.className = "center-fiszke";
    ref.current.next();
  };
  function handleClick(refs, index) {
    const value = refs.current[index].value;
    console.log(index);
    console.log(slowka[0].words[index].Obcy);
    if (value === slowka[0].words[index].Obcy) {
      console.log("dobrze");
      center.current.className = "center-fiszke-alert";
      succes.current.className =
        "fade succes-alert-fiszka alert alert-success show";
      fail.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
    } else {
      console.log("źle");
      center.current.className = "center-fiszke-alert";
      fail.current.className =
        "fade danger-alert-fiszka alert alert-danger show";
      succes.current.className =
        "fade succes-alert-fiszka-hidden alert alert-success show";
    }
  }
  return (
    <>
      <Nav></Nav>
      <div className="center-fiszke" ref={center}>
        <Alert
          ref={succes}
          className="succes-alert-fiszka-hidden"
          key="success"
          variant="success"
        >
          Tak to dobra odpowiedź
        </Alert>
        <Alert
          ref={fail}
          className="danger-alert-fiszka-hidden"
          key="danger"
          variant="danger"
        >
          Niestety zła odpowiedź
        </Alert>
        <Carousel interval={null} className="pisanie" ref={ref}>
          {slowka[0].words.map((slowko, index) => {
            //console.log(index);
            return (
              <Carousel.Item key={index}>
                <div
                  className={dark ? "tlo-pisanie-dark" : "tlo-pisanie"}
                ></div>
                <Carousel.Caption className="caption-pisanie">
                  <h1 id={slowko.id} className="slowko-fiszka">
                    {slowko.Polski}
                  </h1>
                  <InputGroup className="mb-3">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      ref={(element) => {
                        refs.current[index] = element;
                      }}
                    />
                  </InputGroup>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      className={
                        dark
                          ? "btn btn-dark btn-lg break"
                          : "btn btn-primary btn-lg break"
                      }
                      onClick={onPrevClick}
                    >
                      Przejdź do poprzedniego
                    </Button>
                    <Button
                      className={
                        dark
                          ? "btn btn-dark btn-lg break"
                          : "btn btn-primary btn-lg break"
                      }
                      onClick={() => handleClick(refs, index)}
                    >
                      Sprawdź
                    </Button>
                    <Button
                      className={
                        dark
                          ? "btn btn-dark btn-lg break"
                          : "btn btn-primary btn-lg break"
                      }
                      onClick={onNextClick}
                    >
                      Przejdź do następnego
                    </Button>
                  </ButtonGroup>
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
