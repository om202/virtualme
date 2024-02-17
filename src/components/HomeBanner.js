import React from "react";
import "./HomeBanner.css";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <h1 className="home-banner__title">
          {/* <img src="./logo2.png" alt="logo" className="home-banner__logo" /> */}
          Realistic Chatbots
        </h1>
        <p className="home-banner__description">
          Virtual.me is a platfrom that allows you to chat with your favorite
          characters.
        </p>
      </div>
    </div>
  );
}
