import React from "react";


interface CardProps {
    title: string;
    hair_color: string;
    image?: string;
  }


const Card: React.FC<CardProps> = ({title, hair_color, image}) => {
  console.log(title, hair_color, image)
    return (
        <div >
      <h3>{title}</h3>
      {hair_color === "blond" ? "👱‍♂️" : "👨"}
      {image !== undefined && image !== '' && <img src={image} alt={image} />}

    </div>
    );
}

export default Card;