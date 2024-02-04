import BotCard from "../components/BotCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <p>Choose a Bot</p>
        <div className="col-12">
          <div className="row">
            <BotCard name="Ghost" img="bot1.png" />
            <BotCard name="Albert Einstein" img="bot2.png" />
            <BotCard name="Elon Musk" img="bot3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
