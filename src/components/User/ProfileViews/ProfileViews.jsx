import React from "react";

import SearchBar from "../../Reusable/SearchBar";
import Footer from "../../Reusable/Footer";
import Header from "../../Reusable/header";

import "./ProfileViews.css";
const ProfileViews = () => {
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div>
        <SearchBar />
        <div className="main-profile-div" style={{ background: "white" }}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <div style={{ width: "30%" }} class="profile-card">
            <img
              src="https://www.w3schools.com/w3images/team2.jpg"
              alt="John"
            />
            <div className="main-text-div text-center">
              <h1 style={{ margin: "5px" }}>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
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
              <button>Contact</button>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ProfileViews;
