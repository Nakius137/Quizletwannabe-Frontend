import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useEffect, useState } from "react";
import DarkContext from "../context/dark-context";
import { Link, Route, Switch } from "react-router-dom";
import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Card } from "react-bootstrap";
import axios from "axios";

function Loign() {
  const { dark } = useContext(DarkContext);

  const login_email = useRef();
  const login_password = useRef();
  const register_email = useRef();
  const register_password = useRef();

  function SendDataLogin() {
    const data = {
      email: login_email.current.value,
      password: login_password.current.value,
    };
    console.log(data);

    axios
      .post("http://www.localhost:5000/login", data)
      .then((respose) => console.log(respose));
  }
  function SendDataRegister() {
    const data = {
      email: register_email.current.value,
      password: register_password.current.value,
    };
    console.log(data);

    axios
      .post("http://www.localhost:5000/register", data)
      .then((respose) => console.log(respose));
  }

  return (
    <>
      <Nav></Nav>
      <div className="logowanie width500px">
        <h2 className={dark ? "tytul-glowny margin-top-h2" : "tytul-glowny-white margin-top-h2"}>Zaloguj się:</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
          <Form.Control
            ref={login_email}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hasło:
          </InputGroup.Text>
          <Form.Control
            ref={login_password}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button
          className={
            dark ? "btn btn-dark btn-lg break" : "btn btn-primary btn-lg break"
          }
          onClick={SendDataLogin}
        >
          Zaloguj się
        </Button>

        <h2 className={dark ? "tytul-glowny margin-top-h2" : "tytul-glowny-white margin-top-h2"}>Zarejestruj się:</h2>
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

export default Loign;
