import React, { useState } from "react";
import DarkContext from "../context/dark-context";
import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../components/Navbar";

function Main() {
    const { dark } = useContext(DarkContext);
    const quizs = ["Quiz1","Quiz2","Quiz3","Quiz1","Quiz2","Quiz3","Quiz1","Quiz2","Quiz3"]


  return <>
  <Nav></Nav>
  <h1>Twoje Quizy:</h1>
  <div className="all-quiz">
    {quizs.map((quiz,index) => {
        return (
            <div className="single-quiz" key={index+1}>
                <h1>{quiz}</h1>
                <Link className="link" to="/quiz"><Button  >Przejdź do quizu</Button></Link>
            </div>
        ); 
        
      })}
    </div>
    </>
}

export default Main;
