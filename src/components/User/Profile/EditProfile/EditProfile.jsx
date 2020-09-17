import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Reusable/header";
import Footer from "../../../Reusable/Footer";
import SearchBar from "../../../Reusable/SearchBar";
import { createBrowserHistory } from "history";

const EditProfile = () => {
  const history = createBrowserHistory();
  var oldUserProfile = {};
  if (sessionStorage.getItem("userProfileDetails") != null) {
    oldUserProfile = JSON.parse(sessionStorage.getItem("userProfileDetails"));
  } else {
    alert("Please Login");
  }

  const [imageUrl, setImageUrl] = useState(
    sessionStorage.getItem("userProfileImage")
  );

  const [state, setstate] = useState({
    id: oldUserProfile.id,
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    email: "",
    city: "",
    state: "",
    zip_code: "",
    address: "",
    company_name: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setstate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", state);
    axios
      .post("http://18.223.32.178:3000/user/update", state)
      .then((response) => {
        //console.log("Response", response.data);
        sessionStorage.setItem("userProfileDetails", JSON.stringify(state));
        history.push("/profileviews");
        window.location.reload();
        //alert("Profile updated successfully");
      });
  };
  const uploadImage = (e) => {
    let formData = new FormData(); //formdata object
    formData.append("id", oldUserProfile.id); //append the values with key, value pair
    formData.append("image", e.target.files[0]);
    axios
      .post("http://18.223.32.178:3000/user/changeimage", formData)
      .then((response) => {
        setImageUrl(response.data.image);

        sessionStorage.setItem("userProfileImage", response.data.image);
        console.log("Response from upload", response.data.image);
      });
  };
  return (
    <div>
      <div>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          rel="icon"
          href="images/favicon.png"
          type="image/png"
          sizes="16x16"
        />

        <title>Profile Edit</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="css/font-awesome1849.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="css/jquery.dataTables.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="css/mainaff7.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="css/main.css"
          type="text/css"
          media="all"
        />
      </div>
      <div>
        <div class="nav-area header-type-1 ">
          <div className="inner-page">
            <Header />
          </div>
          <SearchBar />
        </div>
        <div id="section-body">
          <section class="main-content-area whitebg">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="page-title">
                    <div class="block-top-title">
                      <ol class="breadcrumb">
                        <li>
                          <a href="../index.html">
                            <span>Home</span>
                          </a>
                        </li>
                        <li class="active">Profile Edit</li>
                      </ol>
                      <h1 class="listing-title">Profile Edit</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="checkout-wrapper">
                <div class="row">
                  <div class="col-md-12 col-xs-12">
                    <div class="form-wrapper">
                      <form onSubmit={FormSubmit}>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">First Name</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="first_name"
                                class="form-control "
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Last Name</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="last_name"
                                class="form-control "
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Email</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="email"
                                name="email"
                                class="form-control "
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Phone Number</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="number"
                                name="phone"
                                class="form-control "
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Country</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="country"
                                class="form-control "
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">City</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="city"
                                class="form-control "
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">State</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="state"
                                class="form-control "
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Zip Code</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="zip_code"
                                class="form-control "
                                placeholder="Zip Code"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Company name (Optional)</label>
                              <input
                                onChange={InputEvent}
                                type="text"
                                name="company_name"
                                class="form-control "
                                placeholder="Company name (Optional)"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Address</label>
                              <input
                                required
                                onChange={InputEvent}
                                type="text"
                                name="address"
                                class="form-control "
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="">Profile Picture</label>
                              <div class="avatar-upload">
                                <div class="avatar-edit">
                                  <input
                                    type="file"
                                    id="imageUpload"
                                    onChange={uploadImage}
                                    accept=".png, .jpg, .jpeg"
                                  />
                                  <label for="imageUpload"></label>
                                </div>
                                <div>
                                  <img
                                    id="imagePreview"
                                    src={
                                      imageUrl != null
                                        ? imageUrl
                                        : "https://www.iconfinder.com/data/icons/men-avatars/33/man_19-512.png"
                                    }
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12 text-center">
                            <button
                              type="submit"
                              class="btn btn-primary btn-long"
                            >
                              Save{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/custom.js"></script>
      </div>
    </div>
  );
};
export default EditProfile;
