import React from "react";
import "./BotCard.css";
import { useNavigate } from "react-router-dom";
import { BotData } from "../botdata";

const BotCard = ({botIndex}) => {
  const navigate = useNavigate();
  const { name, img } = BotData[botIndex];
  return (
    <div
      className="bot-card"
      onClick={() => {
        navigate("/messaging", { state: { botIndex} });
      }}
    >
      <img src={img} alt="bot" />
      <p className="bot-title">{name}</p>
    </div>
  );
};

export default BotCard;
