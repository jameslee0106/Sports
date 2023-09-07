import React from "react";
import NBA from "../assets/NBA.png"
import Mariners from "../assets/Mariners.png"
import Tottenham from "../assets/Tottenham.png"
import Seahawks from "../assets/Seahawks.png"
import '../App.css';


export const Home = () => {
  const fetchPlayerData = () => {
    fetch("https://www.balldontlie.io/api/v1/players/?page=1&per_page=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  return (
    <div>
      <h1>James' Sports Hub</h1>
      <div class="sportsIcon">
        <img src={NBA} />
        <img src={Mariners} />
        <img src={Tottenham} /> 
        <img src={Seahawks} />
      </div>
      <div class="card">
        <button onClick={fetchPlayerData}>test</button>
      </div>
    </div>
  );
};

