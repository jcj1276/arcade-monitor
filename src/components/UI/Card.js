import React from "react";

import "./Card.css";

const Card = (props) => {
  return [<div className={`${"card"} ${props.width}`}>{props.children}</div>];
};

export default Card;
