import React from "react";
import "./BotCard.css";
import { useNavigate } from "react-router-dom";

const BotCard = ({ name, img }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bot-card"
      onClick={() => {
        navigate("/messaging", { state: { name, img } });
      }}
    >
      <img src={img} alt="bot" />
      <p className="bot-title">{name}</p>
    </div>
  );
};

export default BotCard;
