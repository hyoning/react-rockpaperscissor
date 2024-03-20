import React from "react";

const Box = ({title, item, result}) => {
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <div className="item-name">{item.name}</div>
      <img className="item-img" src={item.img} alt=""/>
      <div className={`item-result item-${result}`}>{result}</div>
    </div>
  );
};

export default Box;