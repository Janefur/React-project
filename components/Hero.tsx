import React from "react";
import Food from "../src/assets/food.png";
import ArrowDown from "../src/assets/arrowdown.png";
import Greeting from "./Greeting";

function Hero() {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <div className="text2">
          <Greeting greetingText="Hey Masterchef!" />
          <p>
            How great that you found this page, now it's time for you to test
            your skills.
          </p>
          <p className="second_p">
            Choose from our luxurious and culinary recipes below
          </p>
        </div>
        <img src={ArrowDown} alt="" />
      </div>
      <img src={Food} alt="" />
    </div>
  );
}

export default Hero;
