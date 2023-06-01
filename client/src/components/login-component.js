import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert(
          "Login successfully, you are now redirected to the profile page."
        );
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="col-md-12">
      <div className="main">
        <span>Log in to your Udemy account</span>
        <div className="form-group">
          <input
            onChange={handleChangeEmail}
            placeholder="Email address"
            type="text"
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
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <br />
        <button onClick={handleLogin} className="btn btn-primary btn-block">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
