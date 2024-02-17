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
        <div className="row">
          <div className="home-title">Choose a Character</div>
        </div>
        <div className="row">
          <div>
            <b>Tip:</b> For best results. Talk to the characters normally. Treat them as if they were real people.
          </div>
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
