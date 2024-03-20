import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/gymDash.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function GymDash() {
  const [gyms, gymSet] = useState(null);
  useEffect(() => {
    getGyms();
  }, []);

  const getGyms = async () => {
    try {
      const result = await axios.get("http://localhost:8000/gym/getGyms");
      gymSet(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="gym_cards">
      {gyms == null
        ? ""
        : gyms.map((data) => {
            return (
              <Link to="/gym/gymCenter" state={{ data: data }} id="dash_link">
                <div key={data.id} className="gym_card">
                  {data.photo && (
                    <img
                      src={require(`./uploads/${data.photo}`)}
                      alt="hello"
                      id="gym_dash_img"
                    />
                  )}
                  <div id="dash_gym_details">
                    <p>
                      <i
                        class="fa-solid fa-dumbbell"
                        style={{ color: "black" }}
                      ></i>
                      {data.centerName}
                    </p>
                    <p>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ color: "black" }}
                      ></i>
                      {data.city}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}
export default GymDash;
