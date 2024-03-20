import React from "react";
import Render from "./Render";
import App from "./App";
import GymForm from "./gymCenter/gymCenterUpload";
import GymDash from "./gymCenter/gymCenterDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gym from "./gymCenter/gymCenter";
import Review from "./review";
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/render" element={<Render></Render>}></Route>
        <Route path="/upload" element={<App />}></Route>
        <Route path="/gym/registerGym" element={<GymForm />}></Route>
        <Route path="/gym/getGyms" element={<GymDash />}></Route>
        <Route path="/gym/gymCenter" element={<Gym />}></Route>
        <Route path="/gym/review" element={<Review />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
