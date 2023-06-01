import React from "react";
import Card from "./Card";

function Overview() {
  let cards = ["ba", "haa", "jilm"];

  const generateRandomNumber = (max) => {
    let answer = Math.floor(Math.random() * max);
    return answer;
  };

  generateRandomNumber(3);

  const shuffleCards = (cards) => {
    for (let i = 0; i < cards.length; i++) {
    console.log(cards);
    let randomIndex = generateRandomNumber(cards.length);
    let original = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = original;
    console.log(cards);
    }
  };

  shuffleCards(cards);

  return (
    <div>
    {cards.map(card =>{
      return <Card name = {card}/>
    })}
    </div>
  );
}

export default Overview;
