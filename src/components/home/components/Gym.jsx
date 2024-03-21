import React from "react";
import "../styles/gym.css";
function Gym() {
  return (
    <div id="Gym">
      <div className="gym">
        <div className="gym_card">
          <div className="image1"></div>
          <div className="card_hedding">
            <h3>Beginner</h3>
          </div>
          <a href="login.html">
            <button className="gymButton">Get Started</button>
          </a>
        </div>
        <div className="gym_card">
          <div className="image2"></div>
          <div className="card_hedding">
            <h3>Intermediate</h3>
          </div>
          <a href="login.html">
            <button className="gymButton">Get Started</button>
          </a>
        </div>
        <div className="gym_card">
          <div className="image3"></div>
          <div className="card_hedding">
            <h3>Advance</h3>
          </div>
          <a href="login.html">
            <button className="gymButton">Get Started</button>
          </a>
        </div>
      </div>
      {/* <hr class="hr"></hr> */}
    </div>
  );
}
export default Gym;
