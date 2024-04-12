import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
    // After handling submission, navigate to the signup page
    window.location.href = `/signup?mobile=${formData.mobile}&password=${formData.password}`;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <span>Create an </span>
        </div>
        <div className="title-2">
          <span>Account</span>
        </div>
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input-mail"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input-pwd"
            type="password"
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input-confirm-pwd"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input-mobile"
            type="text"
            placeholder="Enter your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit">
          <span className="sign-text">Sign up</span>
        </button>
        <p className="signup-link">
          Already have an account?{" "}
          <Link to="/login" className="up">
            Sign in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
