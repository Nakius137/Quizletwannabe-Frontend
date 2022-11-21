import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DarkContext from "../context/dark-context";
import { UserContext } from "../context/user-context";
import DarkSwitcher from "../context/DarkSwitcher";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const { dark } = useContext(DarkContext);
  const { logged, email} = useContext(UserContext);

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
            {logged ? (
              <Link className="link" to="/user">
                <Navbar.Text className="white-text">
                  Zalogowano jako: {email}
                </Navbar.Text>
              </Link>
            ) : (
              <Link className="link" to="/login">
                <Navbar.Text className="white-text">Zaloguj się</Navbar.Text>
              </Link>
            )}

            <DarkSwitcher />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
