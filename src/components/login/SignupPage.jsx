import React from "react";
import { useLocation } from "react-router-dom";

const SignupPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mobile = queryParams.get("mobile");
  const password = queryParams.get("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add signup logic here
    console.log("Signing up with mobile:", mobile, "and password:", password);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <span>Sign Up</span>
        </div>
        <div className="input-container">
          <input
            className="input-mail"
            type="text"
            placeholder="Mobile"
            value={mobile}
            readOnly
          />
        </div>
        <div className="input-container">
          <input
            className="input-pwd"
            type="password"
            placeholder="Password"
            value={password}
            readOnly
          />
        </div>
        <button type="submit" className="submit">
          <span className="sign-text">Sign up</span>
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
