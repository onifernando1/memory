import React from "react";
import Card from "./Card";

function Overview() {
  let cards = ["ba", "haa", "jilm"];

  const generateRandomNumber = (max) => {
    let answer = Math.floor(Math.random() * max);
    console.log(answer);
  };

  generateRandomNumber(3);

  const shuffleCards = (cards) => {
    let newCards = [];
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card name={card} id={index} />
      ))}
    </div>
  );
}

export default Overview;
