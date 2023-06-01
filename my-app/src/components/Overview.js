import React from "react";
import Card from "./Card";

function Overview() {
  // let cards = ["alif","ba","dad","dal","dhal","ha","haa","jilm","kha","ra","sad","shin","sin","ta","taa","za"];
  let cards =["ب","ج","د","ه","و","ز","ح","ط","ي","ك","ل","م","ن","س","ع","ف"]

  const generateRandomNumber = (max) => {
    let answer = Math.floor(Math.random() * max);
    return answer;
  };


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
    <div className="overview">
    {cards.map(card =>{
      return <div className="card"><Card name = {card}/></div>
    })}
    </div>
  );
}

export default Overview;
