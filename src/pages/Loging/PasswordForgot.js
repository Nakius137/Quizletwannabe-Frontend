import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import DarkContext from "../../context/dark-context";
import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/Navbar";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function PasswordForgot() {
  const history = useHistory();

  const { dark } = useContext(DarkContext);

  const email = useRef();

  const fail = useRef();
  const succes = useRef();
  const center = useRef();

  const SendDataForgot = async () => {
    if (email.current.value !== "") {
      await axios.post("http://www.localhost:5000/passwdfrgt");
      center.current.className = "center-alert";
      succes.current.className =
        "fade succes-alert-fiszka alert alert-success show";
      fail.current.className =
        "fade danger-alert-fiszka-hidden alert alert-danger show";
      history.push("/login");
    } else {
      center.current.className = "center-alert";
      fail.current.className =
        "fade danger-alert-fiszka alert alert-danger show";
      succes.current.className =
        "fade succes-alert-fiszka-hidden alert alert-success show";
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
          Wiadomość wysłana na maila!
        </Alert>
        <Alert
          ref={fail}
          className="danger-alert-fiszka-hidden"
          key="danger"
          variant="danger"
        >
          Proszę podać maila
        </Alert>
      </div>
      <div className="logowanie width500px">
        <h2
          className={
            dark
              ? "tytul-glowny margin-top-h2"
              : "tytul-glowny-white margin-top-h2"
          }
        >
          Wpisz email konta którego chcesz odzyskać hasło:
        </h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
          <Form.Control
            ref={email}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <Button
          className={
            dark ? "btn btn-dark btn-lg break" : "btn btn-primary btn-lg break"
          }
          onClick={SendDataForgot}
        >
          Zarejestruj się
        </Button>
      </div>
    </>
  );
}

export default PasswordForgot;
