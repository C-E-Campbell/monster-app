import React from "react";
import { Card } from "../card/card.jsx";
import "./card-list.styles.css";

export const CardList = props => {
  const data = props.data
    .filter(ele => {
      return ele.name.toLowerCase().includes(props.searchTerm.toLowerCase());
    })
    .map(ele => {
      return <Card key={ele.id} monster={ele} />;
    });
  return <div className="card-list">{data}</div>;
};
