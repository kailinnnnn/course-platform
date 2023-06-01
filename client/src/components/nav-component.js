import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage.");
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <nav>
      <span className="logo">StudyLink</span>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        {currentUser && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {currentUser && (
          <li>
            <Link to="/course">Course</Link>
          </li>
        )}
        {currentUser && currentUser.user.role == "instructor" && (
          <li>
            <Link to="/postCourse">Post Course</Link>
          </li>
        )}
      </ul>
      <ul className="right">
        {!currentUser && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!currentUser && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {currentUser && (
          <li>
            <Link onClick={handleLogout} to="#">
              Logout
            </Link>
          </li>
        )}

        {currentUser && currentUser.user.role == "student" && (
          <li>
            <Link to="/enroll">Enroll</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavComponent;
