import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import DarkContext from "../../context/dark-context";
import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/Navbar";

function PasswordForgot() {
  const { dark } = useContext(DarkContext);

  const email = useRef();

  const SendDataForgot = () => {
    console.log("send");
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
