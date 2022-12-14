import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DarkContext from "../context/dark-context";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "../context/user-context";
import DarkSwitcher from "../context/DarkSwitcher";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const { dark } = useContext(DarkContext);
  const { logged, setLogged, email, setResponse } = useContext(UserContext);

  const handleLogout = () => {
    setLogged(false);
    setResponse("");
  };

  return (
    <>
      <Navbar
        id="navbar-change"
        className={
          dark
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-dark bg-primary"
        }
      >
        <Container>
          <Link className="link" to="/">
            <Navbar.Brand>Strona główna</Navbar.Brand>
          </Link>
          <Navbar.Toggle />

          {logged ? (
            <Dropdown>
              <Dropdown.Toggle
                className={dark ? "btn btn-dark" : ""}
                id="dropdown-basic"
              >
                Zalogowano jako: {email}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>
                  Wyloguj się
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown>
              <Link className="link" to="/login">
                <Dropdown.Toggle
                  className={dark ? "btn btn-dark" : ""}
                  id="dropdown-basic"
                >
                  Zaloguj się
                </Dropdown.Toggle>
              </Link>
            </Dropdown>
          )}

          <Navbar.Collapse className="justify-content-end">
            <DarkSwitcher />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
