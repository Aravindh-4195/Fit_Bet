import React from "react";
// import Render from "./Render";
import "../styles/main.css";
import App from "./App";
import GymForm from "./gymCenter/gymCenterUpload";
import GymDash from "./gymCenter/gymCenterDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gym from "./gymCenter/gymCenter";
import Main1 from "./home/components/main";
import { Login } from "./authComponents/login";
import Register from "./authComponents/Register";
import Trainer from "./trainer/trainer";
import TrainerDash from "./trainer/trainerIndiviDash";
import TrainerForm from "./trainer/trainerRegistration";
import NavBarUser from "../userDashboard/navBar";
import UserAccount from "../userDashboard/userAccount";
import Dashboard from "./dasboard";
import Subscription from "../userDashboard/currentSub";
// import Review from "./review";
function Main() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/render" element={<Render></Render>}></Route> */}
        <Route path="/upload" element={<App />}></Route>
        <Route path="/gym/registerGym" element={<GymForm />}></Route>
        <Route path="/gym/getGyms" element={<GymDash />}></Route>
        <Route path="/gym/gymCenter" element={<Gym />}></Route>
        {/* <Route path="/gym/review" element={<Review />}></Route> */}
        <Route path="/" element={<Main1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* trainer tags */}
        <Route path="/trainer/trainer" element={<Trainer />} />
        <Route path="/trainer/getTrainers" element={<TrainerDash />} />
        <Route path="/trainer/trainerReg" element={<TrainerForm />} />

        {/* user dashboard */}
        <Route
          path="/user"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarUser />
              </div>
              <div className="userPart">
                <UserAccount />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/user/currentSubscriptions"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarUser />
              </div>
              <div className="userPart">
                <Subscription />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default Main;
