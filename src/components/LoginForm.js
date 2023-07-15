import React, { useState } from "react";
import img from "./Abs.png";
import imgG from "./search 1.png";
import imgF from "./facebook 1.png";
import vector from "./Vector.png";

const LoginForm = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  function validateForm(event) {
    event.preventDefault();
    if (user.name.length < 3 || user.name.length > 30) {
      setSuccess("");
      return setError(" Error: Name should be min 3 char and max 30 char");
    } else if (!user.email.includes("@") || !user.email.includes(".")) {
      setSuccess("");
      return setError(" Error: Email should contain @ and .");
    } else if (user.password.length < 8 || user.password.length > 15) {
      setSuccess("");
      return setError(" Error: password should be min 8 char to 15 char");
    } else if (user.password !== user.cpassword) {
      setSuccess("");
      return setError(
        "Error: Please Make sure your passwords and confirm passwords match!"
      );
    }
    setSuccess("Successfully Created");
    setError("");
  }

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h2>Find 3D Objects, Mockups and Ilustration here</h2>
        <img src={img} alt="img" />
      </div>
      <div className="rightContainer">
        <div className="login">
          <h1>Create Account</h1>
          <div className="logoDiv">
            <div>
              <img src={imgG} alt="google img" />
              <p>Sign up with Google</p>
            </div>

            <div>
              <img src={imgF} alt="facebook img" />
              <p>Sign up with Facebook</p>
            </div>
          </div>
          <h2>-OR-</h2>
          <form onSubmit={validateForm}>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />

            <input
              type="email"
              id="email"
              placeholder="Email Address"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <div className="vector">
              <input
                type="password"
                id="password"
                placeholder="password"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
              <img src={vector} alt="vector" />
            </div>
            <div className="vector">
              <input
                type="password"
                id="cpassword"
                placeholder="Conform Password"
                onChange={(event) =>
                  setUser({ ...user, cpassword: event.target.value })
                }
              />
              <img src={vector} alt="vector" />
            </div>

            <button type="submit" id="btn">
              Create Account
            </button>
          </form>
          <div className="message">
            <p id="error"> {error}</p>
            <p id="success">{success}</p>
          </div>
          {/* <div className="message">
            {error ? <p id="error">{error}</p> : null}
            {success ? <p id="success">{success}</p> : null}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
