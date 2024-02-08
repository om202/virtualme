import BotCard from "../components/BotCard";
import "./Home.css";
import { BotData } from "../botdata";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row no-gutters">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <span>Choose a Character</span>
        </div>
        <div className="col-12 col-md-6 text-md-right">
          <a href="/new" className="new-character-button">
            <i className="bi bi-plus-lg"></i>
            Create
          </a>
        </div>
      </div>
      <div className="row mt-4">
        {BotData.map((bot, index) => (
          <BotCard key={index} botIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
