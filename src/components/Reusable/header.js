import React, { useState } from "react";
import logo from "../../images/logo.png";
import whitelogo from "../../images/white-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = (props) => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  function Login(e) {
    e.preventDefault();
    axios
      .post("http://18.223.32.178:3000/user/login", {
        email: state.email,
        password: state.password,
      })
      .then((response) => {
        alert(response.data.message);
        console.log("RESSS", response.data.message);
      });
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
  return (
    <div>
      <header
        id="guestco_nav_sticky"
        className="header-nav hidden-sm hidden-xs"
      >
        <div className="container-fluid">
          <div className="header-inner table-block">
            <div className="header-comp-logo">
              <h1>
                <Link className="guestco_logo" href="/">
                  <img src={whitelogo} alt="" className="transparentlogo" />
                  <img src={logo} alt="" className="blacklogo" />
                </Link>
              </h1>
            </div>
            <div className="header-comp-nav text-right">
              <nav className="navi">
                <ul id="main-menu" className="main-menu">
                  <li>
                    <Link to="/search">Search Page</Link>
                  </li>
                  <li>
                    <Link to="/orderlisting">Order Listing Page</Link>
                  </li>
                  <li>
                    <Link to="/accesslisting">Access Appartment Listing</Link>
                  </li>
                  <li>
                    <Link to="/ordersummary">Order Summary</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/services">Services Acquired</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-comp-right">
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
                <Link
                  to="javascript:void(0)"
                  className="btn btn-add-new-listing"
                >
                  Become a Host
                </Link>
              </div>
            </div>
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
        id="modal-login"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-body-left pull-left">
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
