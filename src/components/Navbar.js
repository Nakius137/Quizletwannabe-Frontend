import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DarkContext from "../context/dark-context";
import DarkSwitcher from "../context/DarkSwitcher";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const { dark } = useContext(DarkContext);

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
          <Navbar.Collapse className="justify-content-end">
            <Link className="link" to="/login">
              <Navbar.Text className="white-text">
                Zalogowano jako: Jakub
              </Navbar.Text>
            </Link>
            <DarkSwitcher />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
