import Card from "./Card";
import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

function Overview() {
  const [allSelected, setAllSelected] = useState(false);

  const [score, setScore] = useState(0);

  const [previouslySelected, setPreviouslySelected] = useState([]);

  const [highScore, setHighScore] = useState(0);

  const [cards, setCards] = useState([
    "ب",
    "ج",
    "د",
    "ه",
    "و",
    "ز",
    "ح",
    "ط",
    "ي",
    "ك",
    "ل",
    "م",
    "ن",
    "س",
    "ع",
    "ف",
  ]);

  useEffect(() => {
    shuffleCards(cards);
  }, [score]);

  // let cards = [
  //   "ب",
  //   "ج",
  //   "د",
  //   "ه",
  //   "و",
  //   "ز",
  //   "ح",
  //   "ط",
  //   "ي",
  //   "ك",
  //   "ل",
  //   "م",
  //   "ن",
  //   "س",
  //   "ع",
  //   "ف",
  // ];

  const generateRandomNumber = (max) => {
    let answer = Math.floor(Math.random() * max);
    return answer;
  };

  const shuffleCards = (cards) => {
    let tempCards = cards;
    for (let i = 0; i < tempCards.length; i++) {
      let randomIndex = generateRandomNumber(tempCards.length);
      let original = tempCards[i];
      tempCards[i] = tempCards[randomIndex];
      tempCards[randomIndex] = original;
    }
    setCards(tempCards);
  };

  const updateHighScore = () => {
    setHighScore(score);
  };

  const selectCard = (card) => {
    if (previouslySelected.includes(card) == false) {
      setPreviouslySelected((previouslySelected) => [
        ...previouslySelected,
        card,
      ]);
      setScore(score + 1);
      console.log(previouslySelected);
    } else {
      setAllSelected(true);
      updateHighScore();
      alert(`Highscore:${highScore}`);
    }
  };

  // shuffleCards(cards);

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} />
      <div className="overview">
        {cards.map((card) => {
          return (
            <div
              onClick={() => {
                selectCard(card);
              }}
              className="card"
            >
              <Card name={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
