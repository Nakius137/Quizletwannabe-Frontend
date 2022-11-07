import ListGroup from "react-bootstrap/ListGroup";
import slowka from "../slowka";

function Slowka() {
  return (
    <>
      <div className="center-wrap">
        {slowka.map((slowko, index) => {
          return (
            <ListGroup key={index} horizontal id="slowka" className="slowka">
              <ListGroup.Item id="slowko " className="slowko">
                {slowko.Polski}
              </ListGroup.Item>
              <ListGroup.Item id="slowko " className="slowko">
                {slowko.Obcy}
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
    </>
  );
}

export default Slowka;
