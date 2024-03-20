import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Render.css";
function Render() {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    getCards();
  }, []);
  const getCards = async () => {
    try {
      const result = await axios.get("http://localhost:8000/render");
      //   alert(result);
      setCards(result.data.data);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div id="body">
      {cards == null
        ? ""
        : cards.map((data) => {
            return (
              <div class="card">
                <img src={require(`../uploads/${data.image}`)} alt="card-img" />
                <p>{data.text}</p>
              </div>
            );
          })}
    </div>
  );
}
export default Render;
