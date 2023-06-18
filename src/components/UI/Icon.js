import React from "react";

const Icon = (props) => {
  const iconClasses = props.classes;

  return [<i className={iconClasses.join(" ")} />];
};

export default Icon;
