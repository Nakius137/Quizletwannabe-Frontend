/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [logged, setLogged] = useState(false);
  const [response, setResponse] = useState("");

  const userInfo = {
    email: email,
    setEmail: setEmail,
    token: token,
    setToken: setToken,
    logged: logged,
    setLogged: setLogged,
    response: response,
    setResponse: setResponse,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
