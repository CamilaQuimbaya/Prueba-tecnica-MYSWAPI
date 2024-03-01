import React from "react";
import '../../styles/components/card.css';
import img from '../../assets/grogu.gif';

interface CardProps {
    title: string;
    hair_color: string;
    image?: string;
  }


const Card: React.FC<CardProps> = ({title, hair_color, image}) => {
  console.log(title, hair_color, image)
    return (
      <div >
      
      <div className="myCardContainer">
        <div className="myCard">
        <h3>{title}</h3>
        {hair_color === "blond" ? "👱‍♂️" : "👨"}
        {image === undefined || image === "" ? <img src={img} alt="img" className="img-fluid otherImg"/> : <img src={image} alt={title} className="img-fluid" />}
        </div>
      </div>
    </div>
    );
}

export default Card;