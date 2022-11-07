import React from "react";

const DarkContext = React.createContext({
  dark: null,
  setLanguage: () => {},
});

export default DarkContext;
