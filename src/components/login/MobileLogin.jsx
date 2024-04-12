import React, { useState } from "react";
import "./MobileLogin.css";
import { Link } from "react-router-dom";
function MobileLogin() {
  const [user, setUser] = useState({
    mobile: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((users) => ({ ...users, [name]: value }));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>Sign in to your</span>
      </div>
      <div className="title-2">
        <span>BetKing</span>
      </div>
      <div className="input-container">
        <input
          className="input-mail"
          type="number"
          placeholder="Enter mobile no"
          name="mobile"
          value={user.mobile}
          onChange={handleInputs}
        />
        <span> </span>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <div className="input-container">
        <input
          className="input-pwd"
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleInputs}
        />
      </div>

      <button type="submit" className="submit">
        <span className="sign-text">Sign in</span>
      </button>

      <p className="signup-link">
        No account?{" "}
        <Link to="/registration" className="up">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default MobileLogin;
