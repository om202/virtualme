import BotCard from "../components/BotCard";
import "./Home.css";
import { BotData } from "../botdata";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <p>Choose a Bot</p>
        <div className="col-12">
          <div className="row">
            {BotData.map((bot, index) => (
              <BotCard key={index} name={bot.name} img={bot.img}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
