import React from "react";

const UserContext = React.createContext({
  login: true,
  setLogin: () => {},
});

export default UserContext;
