import React from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
function Dashboard(props) {
  const user_id = Number(props.user_id);
  console.log(user_id);
  return (
    <div id="outerDashboard">
      <div id="dashboard">
        <div id="dashboardSearch">
          <select id="dashboardDrop">
            <option className="dashOptions">Select Location</option>
            <option className="dashOptions">Vijaywada</option>
            <option className="dashOptions">Vishakapatnam</option>
            <option className="dashOptions">Vijaywada</option>
          </select>
        </div>
        <Link
          className="dashboardLink"
          to="/trainer/getTrainers"
          state={{ user_id: user_id }}
        >
          Personal Trainers
        </Link>
        <Link
          className="dashboardLink"
          to="/gym/getGyms"
          state={{ user_id: user_id }}
        >
          Gyms
        </Link>
        <Link className="dashboardLink" to="/user" state={{ user_id: user_id }}>
          <FaRegCircleUser id="userdashIcon" />
        </Link>
      </div>
    </div>
  );
}
export default Dashboard;
