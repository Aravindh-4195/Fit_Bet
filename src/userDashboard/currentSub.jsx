import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/currentSub.css";

function Subscription() {
  const user_id = localStorage.getItem("user_id");
  const [reg, setId] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current subscriptions
        const response = await axios.post(
          "http://localhost:8000/user/currentSubscriptions",
          {
            user_id: user_id,
            getReg: true,
          }
        );
        const subscriptions = response.data.data;
        setId(subscriptions);
        // Extract product_ids from subscriptions
        const productIds = subscriptions.map(
          (subscription) => subscription.product_id
        );

        // Fetch details of the subscriptions

        // console.log(productIds);
        const orderResponse = await axios.post(
          "http://localhost:8000/user/currentSubscriptions",
          {
            product_id: productIds,
            getReg: false,
          }
        );

        // Set the fetched orders data
        setOrders(orderResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log();
  }, [user_id]); // Dependency added to useEffect to re-run when user_id changes

  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className="order-container">
          <div style={{ width: "20%", height: "90%" }}>
            <img
              src={
                order.photo
                  ? require(`../components/gymCenter/uploads/${order.photo}`)
                  : ""
              }
              alt="img"
              className="order-image"
            />
          </div>
          {/* Render other order details here */}
          <div className="orderDetails">
            <p className="centerName">{order.centerName}</p>
            <p className="location">{order.city}</p>
          </div>
          <div className="bookedInfo">
            {/* <p className="ordertimeStamp">Ordered TimeStamp</p>
             */}
            <p className="orderTimeStamp">Ordered TimeStamp</p>
            <p className="orderTime">{reg[index].time}</p>
            <p clasName="orderDate">{reg[index].date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Subscription;
