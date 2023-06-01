import React from "react";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;

  return (
    <div className="profilediv">
      {!currentUser && (
        <div className="alert">
          You must login first before getting your profile.
        </div>
      )}
      {currentUser && (
        <div>
          <div className="profile">
            <h1>Profile</h1>
          </div>
          <main>
            <div className="picture">
              <img src="/profilepicture.png" alt="" />
            </div>
            <div className="content">
              <span className="name">{currentUser.user.username}</span>
              <span className="id">ID : {currentUser.user._id}</span>
              <span className="email">Email : {currentUser.user.email}</span>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
