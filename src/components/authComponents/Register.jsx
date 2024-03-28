import React, { useState } from "react";
import "./styles/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    // timings: "",
    flat_no: "",
    landmark: "",
    street: "",
    city: "",
    navigate: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        await axios
          .post("http://localhost:8000/gym/register", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            // alert(res.data);
            if (res.data === "ok") {
              alert("succesfully inserted");
              history("/login");
            } else if (res.data === "Duplicate key error") {
              alert("email or phone Number already exist");
            } else {
              alert("unable to insert please check the connection");
            }
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("password and confirm password are not same");
    }
    // console.log(formData);
  };

  return (
    <div id="user-registration">
      {/* <h2>Trainer Registration</h2> */}
      <form onSubmit={handleSubmit} id="registrationForm">
        <fieldset className="user_fieldset">
          <legend className="user_legend">Personal Information</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="name">Full Name:</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="email">Email:</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="phone">Phone Number:</label>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor=" Upload Photo"> Upload Photo:</label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="photo"
              id="photo"
              // value={formData.photo}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="password">password: </label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="confirm password">comfirm password: </label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Confirm Password"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="gender">gender:</label>
            </div>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="user_fieldset">
          <legend className="user_legend">Detailed Address</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="flat_no">Flat No:</label>
            </div>
            <input
              type="text"
              id="flat_no"
              name="flat_no"
              value={formData.flat_no}
              onChange={handleChange}
              placeholder="Enter your flat_no"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="landmark">Landmark:</label>
            </div>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="near XYZ Building, ABC Road"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="street">Street:</label>
            </div>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter the street name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="city">City:</label>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter the City name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="navigate">Location:</label>
            </div>
            <input
              type="url"
              id="navigate"
              name="navigate"
              value={formData.navigate}
              onChange={handleChange}
              placeholder="Google Map location link"
            />
          </div>
        </fieldset>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
