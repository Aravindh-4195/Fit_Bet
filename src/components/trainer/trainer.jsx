import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../trainer/styles/trainer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Trainer(props) {
  const location = useLocation();
  const data = location.state?.data;
  // const imageUrl = "../gymCenter/uploads/" + data.photo;
  // console.log(imageUrl);
  const fullAdd = data.street + " • " + data.city;
  const subAdd = data.flat_no + ", " + data.landmark;
  return (
    <div key={data.id} className="gym_main">
      <div className="gym_item">
        <img
          src={require(`../trainer/uploads/${data.photo}`)}
          alt={data.centerName}
          id="gym_img"
        />
      </div>
      <div className="gym_item" id="gym_details">
        <h1 id="centerName">
          <i
            class="fa-solid fa-dumbbell"
            style={{ color: "rgba(251, 228, 17, 255", marginRight: "5px" }}
          ></i>
          {data.centerName}
        </h1>
        <div id="gym_address">
          <div className="address_item" id="item1">
            <p>
              <i
                class="fa-solid fa-location-dot"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              {fullAdd}
            </p>
            <p id="subadd">{subAdd}</p>
          </div>
          <div className="address_item">
            <Link id="link" to={data.navigate} target="_blank">
              NAVIGATE
            </Link>
          </div>
        </div>
        <div id="gym_timing">
          <p>
            <i
              class="fa-solid fa-clock"
              style={{
                color: "rgba(251, 228, 17, 255",
                marginRight: "5px",
                fontSize: "15px",
              }}
            ></i>
            {data.timings}
          </p>
        </div>
        <div class="gym_contact">
          <div className="contact_item con_item">
            <p>
              <i
                class="fa-solid fa-headset"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              Have any Queries? <br />
              Contact Center for support.
            </p>
          </div>
          <div className="contact_item">
            <h3>{data.phone}</h3>
          </div>
        </div>
        <div class="gym_contact">
          <div className="contact_item con_item">
            <p>
              <i
                class="fa-solid fa-envelope"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              Want to ask detailed Query? <br />
              Please mail us.
            </p>
          </div>
          <div className="contact_item">
            <h3>{data.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
