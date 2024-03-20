import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../gymCenter/styles/gym.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Gym(props) {
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
          src={require(`../gymCenter/uploads/${data.photo}`)}
          alt={data.centerName}
          id="gym_img"
        />
      </div>
      <div className="gym_item" id="gym_details">
        <h1 id="centerName">{data.centerName}</h1>
        <div id="gym_address">
          <div className="address_item" id="item1">
            <p>{fullAdd}</p>
            <p id="subadd">{subAdd}</p>
          </div>
          <div className="address_item">
            <Link id="link" to={data.navigate}>
              NAVIGATE
            </Link>
          </div>
        </div>
        <div id="gym_timing">
          <p>{data.timings}</p>
        </div>
        <div class="gym_contact">
          <div className="contact_item con_item">
            <p>
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

export default Gym;
