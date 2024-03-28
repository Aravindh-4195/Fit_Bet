import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/gymDash.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../dasboard";
function GymDash() {
  const Location = useLocation();
  const id = Location.state?.user_id;
  // console.log(id);
  const history = useNavigate();
  const [gyms, gymSet] = useState(null);
  useEffect(() => {
    getGyms();
  }, []);

  const getGyms = async () => {
    try {
      if (id === undefined) {
        history("/login");
      }
      const result = await axios.get("http://localhost:8000/gym/getGyms");
      gymSet(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Dashboard user_id={id} />
      {/* <Link to="/user" state={{ user_id: id }}>
        <FaRegCircleUser
          style={{
            color: "rgba(251, 228, 17, 255)",
            fontSize: "5vw",
            position: "fixed",
            right: "5px",
            top: "10px",
            textDecoration: "none",
          }}
        />
        <h1 style={{ position: "fixed", color: "rgba(251, 228, 17, 255)" }}>
          personal trainers
        </h1>
      </Link> */}

      <div className="gym_cards">
        {gyms == null
          ? ""
          : gyms.map((data) => {
              return (
                <Link
                  to="/gym/gymCenter"
                  state={{ data: data, id: id }}
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
    </div>
  );
}
export default GymDash;
