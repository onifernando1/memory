import React from "react";
import Card from "./Card";
import { useState } from 'react';



function Overview() {
  const [allSelected, setAllSelected] =useState(false)


  let cards =["ب","ج","د","ه","و","ز","ح","ط","ي","ك","ل","م","ن","س","ع","ف"]
  let previouslySelected = []
  

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
  
  const selectCard = (card)=>{
   if (previouslySelected.includes(card) == false) {
    previouslySelected.push(card)
   } else {
    setAllSelected(true)
    alert("OH NO!")
   }
  }
  

  shuffleCards(cards);

  return (
    <div className="overview">
    {cards.map(card =>{
      return <div onClick = {()=>{selectCard(card)}} className="card"><Card name = {card}/></div>
    })}
    </div>
  );
}

export default Overview;
