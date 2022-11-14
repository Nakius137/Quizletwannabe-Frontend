import React from "react";

const UserContext = React.createContext({
  login: false,
  setLogin: () => {},
});

export default UserContext;
