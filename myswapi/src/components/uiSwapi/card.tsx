import React from "react";

interface CardProps {
    title: string;
    hair_color: string;
  }


const Card: React.FC<CardProps> = ({title, hair_color}) => {
    return (
        <div >
      <h3>{title}</h3>
      {hair_color === "blond" ? "👱‍♂️" : "👨"}
    </div>
    );
}

export default Card;