import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import DarkContext from "../context/dark-context";
import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Card } from "react-bootstrap";

function Loign() {
  return (
    <>
      <Nav></Nav>
      <div className="logowanie width500px">
        <h2 className="margin-top-h2">Zaloguj się:</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hasło:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <h2 className="margin-top-h2">Zarejestruj się:</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hasło:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    </>
  );
}

export default Loign;
