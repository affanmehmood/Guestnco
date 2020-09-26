import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Datetime from "react-datetime";

const moment = require("moment");

const Register = () => {
  const [state, setstate] = useState({
    first_name: "",
    last_name: "",
    password: "",
    city: "",
    state: "",
    zip_code: "",
    company_name: "",
    address: "",
    country: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });
  const changeDate = (date) => {
    setstate((preVal) => {
      return {
        ...preVal,
        dob: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setstate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const RegisterNow = (e) => {
    e.preventDefault();
    console.log("SGATE", state);
    axios
      .post("http://18.223.32.178:3000/user/register", state)
      .then((response) => {
        toast.success("Registered successful");
      });
  };
  return (
    <div>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />

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
                <form onSubmit={RegisterNow}>
                  <div className="form-group">
                    <input
                      required
                      onChange={InputEvent}
                      type="text"
                      name="first_name"
                      className="form-control "
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      onChange={InputEvent}
                      type="text"
                      name="last_name"
                      className="form-control "
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      onChange={InputEvent}
                      type="text"
                      name="email"
                      className="form-control "
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      onChange={InputEvent}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="text"
                      name="state"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="text"
                      name="country"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="text"
                      name="gender"
                      className="form-control"
                      placeholder="Gender"
                    />
                  </div>
                  <div className="form-group">
                    <Datetime defaultValue="DOB" onChange={changeDate} />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={InputEvent}
                      type="number"
                      name="zip_code"
                      className="form-control"
                      placeholder="Zip Code"
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
    </div>
  );
};
export default Register;
