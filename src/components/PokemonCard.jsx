import React from "react";
import "../styles/Card.css";

const PokemonCard = ({ name, image, type }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>Type: {type}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
