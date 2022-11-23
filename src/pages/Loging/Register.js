import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import DarkContext from "../../context/dark-context";
import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Rergiter() {
  const navigate = useNavigate();

  const { dark } = useContext(DarkContext);

  const register_email = useRef();
  const register_password = useRef();

  const SendDataRegister = () => {
    const data = {
      email: register_email.current.value,
      password: register_password.current.value,
    };
    axios
      .post("http://www.localhost:5000/register", data)
      .then((respose) => console.log(respose))
      .then(alert("Pomyślnie sie zarejestrowano"))
      .then(navigate("/login"));
  };

  return (
    <>
      <Nav></Nav>
      <div className="logowanie width500px">
        <h2
          className={
            dark
              ? "tytul-glowny margin-top-h2"
              : "tytul-glowny-white margin-top-h2"
          }
        >
          Zarejestruj się:
        </h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
          <Form.Control
            ref={register_email}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hasło:
          </InputGroup.Text>
          <Form.Control
            ref={register_password}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="password"
          />
        </InputGroup>
        <Button
          className={
            dark ? "btn btn-dark btn-lg break" : "btn btn-primary btn-lg break"
          }
          onClick={SendDataRegister}
        >
          Zarejestruj się
        </Button>
      </div>
    </>
  );
}

export default Rergiter;
