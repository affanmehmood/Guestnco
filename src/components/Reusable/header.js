import React, { useState } from "react";
import logo from "../../images/logo.png";
import whitelogo from "../../images/white-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { createBrowserHistory } from "history";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = (props) => {
  const history = createBrowserHistory();
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  function goToHome() {
    history.push("/");
    window.location.reload();
  }
  function Login(e) {
    e.preventDefault();
    axios
      .post("http://18.223.32.178:3000/user/login", {
        email: state.email,
        password: state.password,
      })
      .then((response) => {
        console.log("RESSS", response.data);
        if (response.data.token) {
          toast.success("Login successful");
          sessionStorage.setItem("logintoken", response.data.token);
          sessionStorage.setItem(
            "userProfileDetails",
            JSON.stringify(response.data.user)
          );
          //history.push("/profileviews");
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
  function Logout() {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setstate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const userAuthJsx = () => {
    if (sessionStorage.getItem("logintoken") != null) {
      return (
        <div className="account-login">
          <ul className="login-register list-inline">
            <li>
              <Link>
                {sessionStorage.getItem("userProfileDetails") != null
                  ? JSON.parse(sessionStorage.getItem("userProfileDetails"))
                      .first_name
                  : "Unknown"}
              </Link>
            </li>
          </ul>
          <Link onClick={Logout} className="btn btn-add-new-listing">
            Logout
          </Link>
        </div>
      );
    } else {
      return (
        <div className="account-login">
          <ul className="login-register list-inline">
            <li>
              <Link
                to="javascript:void(0)"
                data-toggle="modal"
                data-target="#modal-login"
              >
                Login
              </Link>
            </li>
            <li>
              <i className="fa fa-circle-o"></i>
            </li>
            <li>
              <Link
                to="javascript:void(0)"
                data-toggle="modal"
                data-target="#modal-register"
              >
                Register
              </Link>
            </li>
          </ul>
          <Link to="javascript:void(0)" className="btn btn-add-new-listing">
            Become a Host
          </Link>
        </div>
      );
    }
  };
  const pagesJsx = () => {
    if (
      JSON.parse(sessionStorage.getItem("userProfileDetails")) != null &&
      JSON.parse(sessionStorage.getItem("userProfileDetails")).is_admin
    ) {
      return (
        <ul id="main-menu" className="main-menu">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/profileviews">Profile</Link>
          </li>
          <li>
            <Link to="/accesslisting">My Appartments</Link>
          </li>
          <li>
            <Link to="/orderlisting">Orders</Link>
          </li>
        </ul>
      );
    } else if (sessionStorage.getItem("logintoken") != null) {
      return (
        <ul id="main-menu" className="main-menu">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/profileviews">Profile</Link>
          </li>
          <li>
            <Link to="/listing">Appartments</Link>
          </li>

          <li>
            <Link to="/orderlisting">My Orders</Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <div>
      <header
        id="guestco_nav_sticky"
        className="header-nav hidden-sm hidden-xs"
      >
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
        <div className="container-fluid">
          <div className="header-inner table-block">
            <div className="header-comp-logo">
              <h1 onClick={goToHome}>
                <Link className="guestco_logo">
                  <img src={whitelogo} className="transparentlogo" />
                  <img src={logo} className="blacklogo" />
                </Link>
              </h1>
            </div>
            <div className="header-comp-nav text-right">
              <nav className="navi">{pagesJsx()}</nav>
            </div>
            <div className="header-comp-right">{userAuthJsx()}</div>
          </div>
        </div>
      </header>

      <header className="header-nav header-mobile hidden-md hidden-lg">
        <div className="header-mobile-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xs-3">
                <button
                  type="button"
                  className="btn btn-mobile-nav mobile-main-nav"
                  data-toggle="collapse"
                  data-target="#mobile-nav"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div className="col-xs-6">
                <div className="mobile-logo text-center">
                  <h1>
                    <Link to="javascript:void(0)">Logo</Link>
                  </h1>
                </div>
              </div>
              <div className="col-xs-3">
                <div className="user-menu text-right">
                  <button
                    type="button"
                    className="btn btn-mobile-nav user-mobile-nav"
                    data-toggle="collapse"
                    data-target="#user-nav"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <span className="user-alert"></span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="mobile-nav-wrap">
              <nav
                id="mobile-nav"
                className="nav-dropdown main-nav-dropdown collapse navbar-collapse"
              >
                <ul id="mobile-menu" className="mobile-menu">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Item</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Item 2</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Item 3</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Item 4</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="user-nav-wrap">
              <nav
                id="user-nav"
                className="nav-dropdown main-nav-dropdown collapse navbar-collapse"
              >
                <ul>
                  <li>
                    <Link
                      to="javascript:void(0)"
                      data-toggle="modal"
                      data-target="##"
                    >
                      <span data-toggle="collapse" data-target="#user-nav">
                        Login
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="javascript:void(0)"
                      data-toggle="modal"
                      data-target="##"
                    >
                      <span data-toggle="collapse" data-target="#user-nav">
                        Register
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Become a Host</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade custom-modal-login"
        id="modal-register"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-body-left pull-left left-bg">
            <div className="login-register-title">Create an account </div>
          </div>
          <div className="modal-body-right pull-right">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">Register</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control "
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Gender"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="DOB"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full-width"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade custom-modal-login"
        id="modal-login"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-body-left pull-left left-bg">
            <div className="login-register-title">
              Welcome back Please log in{" "}
            </div>
          </div>
          <div className="modal-body-right pull-right">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body">
                <div className="homey_login_messages message"></div>
                <button
                  type="button"
                  className="btn btn-facebook-lined btn-full-width"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i> Login
                  with Facebook
                </button>
                <button
                  type="button"
                  className="btn btn-google-plus-lined btn-full-width"
                >
                  <i className="fa fa-google-plus" aria-hidden="true"></i> Login
                  with Google
                </button>
                <div className="modal-login-form">
                  <p className="text-center">
                    <strong>Log in</strong>
                  </p>
                  <form onSubmit={Login}>
                    <div className="form-group">
                      <input
                        value={state.email}
                        type="name"
                        name="email"
                        onChange={InputEvent}
                        className="form-control email-input-1"
                        placeholder="Username or Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={state.password}
                        type="password"
                        name="password"
                        onChange={InputEvent}
                        className="form-control password-input-2"
                        placeholder="Password"
                      />
                    </div>
                    <div className="checkbox pull-left">
                      <label>
                        <input name="remember" type="checkbox" />
                        Remember me{" "}
                      </label>
                    </div>
                    <div className="forgot-password-text pull-right">
                      <Link
                        to="#"
                        data-toggle="modal"
                        data-target="#modal-login-forgot-password"
                        data-dismiss="modal"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-full-width"
                    >
                      Log In
                    </button>
                  </form>
                  <p className="text-center">
                    Don&#039;t you have an account?{" "}
                    <Link
                      to="#"
                      data-toggle="modal"
                      data-target="#modal-register"
                      data-dismiss="modal"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
