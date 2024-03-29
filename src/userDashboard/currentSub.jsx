import React from "react";
import "./styles/currentSub.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Subscription() {
  //   console.log(localStorage.getItem("user_id"));
  const user_id = localStorage.getItem("user_id");
  const [regs, setReg] = useState([]);
  useEffect(() => {
    handleOnload();
    // console.log(regs);
  }, []);
  const handleOnload = async () => {
    const data = { user_id: user_id };
    try {
      const result = await axios.post(
        "http://localhost:8000/user/currentSubscriptions",
        data
      );
      //   console.log(result);
      //   console.log(result.data.data);
      setReg(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {regs.map((data) => {
        return (
          <div
            style={{ backgroundColor: "white", color: "black", margin: "2px" }}
          >
            {data.product_id}
          </div>
        );
      })}
    </div>
  );
}
export default Subscription;
