import React from "react";

function Card(props) {
  // console.log(props.index);
  return (
    <div>
      <img src={require(`../img/${props.name}.png`)} alt="writing"></img>
      <div>{props.id}</div>
    </div>
  );
}
export default Card;
