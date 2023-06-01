import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const PostCourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDesciption = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const postCourse = () => {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("New course has been created.");
        navigate("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="post">
      {!currentUser && (
        <div className="handleerror">
          <p>You must login first before posting a new course.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div className="handleerror">
          <p>Only instrcutors can post new courses.</p>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="form-group">
          <header>
            <h1>Post Course</h1>
          </header>
          <div className="title">
            <label for="exampleforTitle">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleforTitle"
              onChange={handleChangeTitle}
            />
          </div>

          <div className="content">
            <label for="exampleforContent">Content</label>
            <textarea
              className="form-control"
              id="exampleforContent"
              aria-describedby="emailHelp"
              name="content"
              onChange={handleChangeDesciption}
            />
          </div>

          <div className="price">
            <label for="exampleforPrice">Price</label>
            <input
              name="price"
              type="number"
              className="form-control"
              id="exampleforPrice"
              onChange={handleChangePrice}
            />
          </div>

          <button className="btn btn-primary" onClick={postCourse}>
            Submit
          </button>
          <br />
          <br />
          {message && (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;
