import React from "react";

function Card(props) {
  // console.log(props.index);


  return (
    <div >
      {/* <img src={require(`../img/${props.name}.png`)} alt="writing"></img> */}
      {props.name}
    </div>
  );
}
export default Card;
