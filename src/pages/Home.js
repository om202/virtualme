import BotCard from "../components/BotCard";
import "./Home.css";
import { BotData } from "../botdata";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <HomeBanner />
      <div className="container-fluid home-container">
        <div className="row title-button-row">
          <div className="title">Choose a Character</div>
          <button
            onClick={() => navigate("/new")}
            className="btn new-character-button"
          >
            <i className="bi bi-stars"></i>
            Create
          </button>
        </div>
        <div className="row mt-4 bot-container">
          {BotData.map((bot, index) => (
            <BotCard key={index} botIndex={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
