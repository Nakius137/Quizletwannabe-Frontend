import { useContext, useEffect } from "react";
import DarkContext from "../context/dark-context";

function Toogle() {
  const { dark } = useContext(DarkContext);

  useEffect(() => {
    if (isdark) {
      document.body.style.backgroundColor = "#3C4048";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });

  if (!dark) {
    localStorage.setItem("isdark", JSON.stringify(false));
  } else {
    localStorage.setItem("isdark", JSON.stringify(true));
  }

  let isdark = JSON.parse(localStorage.getItem("isdark"));
}

export default Toogle;
