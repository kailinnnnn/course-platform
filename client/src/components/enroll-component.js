import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        console.log(data);
        setSearchResult(data.data);
        console.log(searchResult);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Done Enrollment");
        navigate("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="enroll">
      {!currentUser && (
        <div className="alert">
          <p>You must login first before searching for courses.</p>
          <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="alert">
          <h1>Only students can enroll in courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="search input-group mb-3">
          <input
            onChange={handleChangeInput}
            type="text"
            class="form-control"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      )}
      {currentUser && searchResult && searchResult.length != 0 && (
        <div className="data">
          {searchResult.map((course) => (
            <div key={course._id} className="card">
              <div className="card-body">
                <span className="card-title">{course.title}</span>
                <span className="card-text">{course.description}</span>
                <span className="count">
                  Student Count: {course.students.length}
                </span>
                <span className="price">Price: {course.price}</span>
                <a
                  href="#"
                  onClick={handleEnroll}
                  className="button"
                  id={course._id}
                >
                  Enroll
                </a>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
      {currentUser && searchResult && searchResult.length == 0 && (
        <div className="alert">
          <p>No such course found</p>
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
