import React from "react";
import Card from "./Card";

function Overview() {
  const cards = ["ba", "haa", "jilm"];

  return (
    <div>
      {cards.map((card) => (
        <Card name={card} />
      ))}
    </div>
  );
}

export default Overview;
