import React from "react";
// import "../assets/hero_image.png"\
import "../styles/home.css";
function Home() {
  return (
    <div id="main">
      <div id="header">
        <h3 id="main_h3">SUGGESTING BEST FITNESS IN THE TOWN</h3>
        <h2 className="home_h2">Build Your Body </h2>
        <h2 className="home_h2">&</h2>
        <h1 className="home_h1">Shape Yourself</h1>
        <a href="/login">
          <button id="home_button">Get Started</button>
        </a>
      </div>
      <div className="image"></div>
    </div>
  );
}
export default Home;
