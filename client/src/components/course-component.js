import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }

    if (currentUser.user.role == "instructor") {
      CourseService.get(_id)
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (currentUser.user.role == "student") {
      CourseService.getEnrolledCourses(_id)
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="coursediv">
      {!currentUser && (
        <div className="alert">
          <p>You must login before seeing your courses.</p>
          <button onClick={handleTakeToLogin} className="btn">
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="mycourse">
          <h1>My Course</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="mylearning">
          <h1>My Learning</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div>
          {courseData.map((course) => (
            <div className="card">
              <div className="card-body">
                <span className="card-title">{course.title}</span>
                <span className="card-text">{course.description}</span>
                <span className="count">
                  Student Count: {course.students.length}
                </span>
                <button>$ {course.price}</button>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
