import React, { useContext } from "react";
import DarkContext from "./dark-context";

const DarkSwitcher = () => {
  const { dark, setDark } = useContext(DarkContext);
  function handleMotiveSwitch() {
    if (dark) {
      setDark(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDark(true);
      document.body.style.backgroundColor = "#3C4048";
    }
  }

  return <button onClick={() => handleMotiveSwitch()}>Switch dark</button>;
};

export default DarkSwitcher;
