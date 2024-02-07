import BotCard from "../components/BotCard";
import "./Home.css";
import { BotData } from "../botdata";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-12 title-container">
          <p>Choose a Character</p>
          <button
            className="btn new-character-button"
            aria-label="Add new character"
          >
            <i className="bi bi-plus" style={{fontSize: '1.5rem'}}></i>
          </button>
        </div>
        <div className="col-12">
          <div className="row bot-row">
            {BotData.map((bot, index) => (
              <BotCard key={index} botIndex={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
