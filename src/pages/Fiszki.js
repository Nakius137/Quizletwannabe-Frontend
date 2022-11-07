import Nav from "../components/Navbar";
import slowka from "../slowka";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap";
import { useContext } from "react";
import DarkContext from "../context/dark-context";

function handleWordChange(slowko) {
  if (document.getElementById(slowko.id).innerHTML === slowko.Polski) {
    document.getElementById(slowko.id).innerHTML = slowko.Obcy;
  } else {
    document.getElementById(slowko.id).innerHTML = slowko.Polski;
  }
}

function Fiszki() {
  const { dark } = useContext(DarkContext);

  return (
    <>
      <Nav></Nav>
      <div className="center-fiszke">
        <Carousel interval={null}>
          {slowka.map((slowko) => {
            return (
              <Carousel.Item
                key={slowko.id}
                onClick={() => handleWordChange(slowko)}
              >
                <div className={dark ? "tlo-fiszka-dark" : "tlo-fiszka"}></div>
                <Carousel.Caption>
                  <h1 id={slowko.id} className="slowko-fiszka">
                    {slowko.Polski}
                  </h1>
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

/* <div className="fiszka" onClick={zmien}>
        <h1 id="polski-fiszka-widac">Cos</h1>
        <h1 id="obcy-fiszka">dfFDSA</h1>
</div> */
