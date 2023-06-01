import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChnageRole = (e) => {
    setRole(e.target.value);
  };
  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "Registration succeeds. You are now redirected to the login page."
        );
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="register">
      <div className="word">
        <p>Join us and start your learning journey!</p>
      </div>
      <div className="main">
        <span>Sign up and start learning</span>
        <div className="form-group">
          <input
            onChange={handleChangeUsername}
            type="text"
            placeholder="Username"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            onChange={handleChangeEmail}
            type="text"
            placeholder="Email"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            onChange={handleChangePassword}
            placeholder="Password"
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            onChange={handleChnageRole}
            type="text"
            placeholder="Role"
            className="form-control"
            name="role"
          />
        </div>
        <br />
        {message && <div className="alert alert-danger">{message}</div>}
        <button onClick={handleRegister} className="btn btn-primary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
