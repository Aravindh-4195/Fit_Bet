import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/trainerindiviDash.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../dasboard";

function TrainerDash() {
  const location = useLocation();
  const history = useNavigate();
  const user_id = location.state?.user_id;
  const [gyms, gymSet] = useState(null);
  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    if (user_id === undefined) {
      console.log(user_id);
      history("/login");
    }
    try {
      const result = await axios.get(
        "http://localhost:8000/trainer/getTrainers"
      );
      gymSet(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Dashboard user_id={user_id} />
      <div className="gym_cards">
        {gyms == null
          ? ""
          : gyms.map((data) => {
              return (
                <Link
                  to="/trainer/trainer"
                  state={{ data: data }}
                  id="dash_link"
                >
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
                        {data.name}
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
    </div>
  );
}
export default TrainerDash;
