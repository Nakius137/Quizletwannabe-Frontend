import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import DarkContext from "../../context/dark-context";
import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/Navbar";
import axios from "axios";
import { UserContext } from "../../context/user-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Loign() {
  const navigate = useNavigate();

  const { dark } = useContext(DarkContext);
  const { setToken, setLogged, setEmail } = useContext(UserContext);

  const login_email = useRef();
  const login_password = useRef();
  const SendDataLogin = async () => {
    const data = {
      email: login_email.current.value,
      password: login_password.current.value,
    };
    login_email.current.value = "";
    login_password.current.value = "";
    await axios
      .post("http://www.localhost:5000/login", data)
      .then((response) => setToken(response[`data`][`accessToken`]))
      .then((email) => setEmail(data.email))
      .then((logged) => setLogged(true), navigate("/"));
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
          Zaloguj się:
        </h2>
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
            type="password"
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
        <div className="links">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/register"
          >
            <h4
              className={
                dark
                  ? "tytul-podrzedny margin-top-h2"
                  : "tytul-podrzedny-white margin-top-h2"
              }
            >
              Nie masz konta? Zarejestruj się:
            </h4>
          </Link>

          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/passwdfrgt"
          >
            <h4
              className={
                dark
                  ? "tytul-podrzedny margin-top-h2"
                  : "tytul-podrzedny-white margin-top-h2"
              }
            >
              Zapomniałem hasła:
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Loign;
