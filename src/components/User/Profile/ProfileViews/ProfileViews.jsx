import React, { useEffect, useState } from "react";

import { createBrowserHistory } from "history";

import Footer from "../../../Reusable/Footer";
import Header from "../../../Reusable/header";

import "./ProfileViews.css";
const ProfileViews = () => {
  const history = createBrowserHistory();
  console.log(
    "User Profile",
    JSON.parse(sessionStorage.getItem("userProfileDetails"))
  );
  var userDetails = {};
  if (sessionStorage.getItem("userProfileDetails") != null) {
    userDetails = JSON.parse(sessionStorage.getItem("userProfileDetails"));
  }
  const [state, setstate] = useState(userDetails);
  console.log("User Details", userDetails);

  const [imageurl, setImageUrl] = useState(
    sessionStorage.getItem("userProfileImage")
  );
  console.log("Image Url", imageurl);

  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div>
        <div className="main-profile-div" style={{ background: "white" }}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <div style={{ width: "30%" }} class="profile-card">
            <img
              src={imageurl == null ? userDetails.image : imageurl}
              alt="John"
            />
            <div className="main-text-div text-center">
              <h1 style={{ margin: "5px" }}>
                {state.first_name != null
                  ? state.first_name + " " + state.last_name
                  : "Unknown"}
              </h1>
              <p class="title">
                {state.email != null ? state.email : "Unknown"}
              </p>
              <p>
                {state.country != null
                  ? state.address + ", " + state.country + ", " + state.state
                  : "Unknown"}
              </p>

              <p>{state.phone != null ? state.phone : "Unknown"}</p>
              <a style={{ margin: "5px" }} href="#">
                <i class="fa fa-dribbble"></i>
              </a>
              <a style={{ margin: "5px" }} href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a style={{ margin: "5px" }} href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a style={{ margin: "5px" }} href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
            <p>
              <a className="editprofile" href="/editprofile">
                Edit Profile
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ProfileViews;
