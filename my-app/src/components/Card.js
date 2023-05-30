import React from "react";

function Card(props) {
  return (
    <div>
      <img src={require(`../img/${props.name}.png`)} alt="writing"></img>
      <div>Hello</div>
    </div>
  );
}
export default Card;
