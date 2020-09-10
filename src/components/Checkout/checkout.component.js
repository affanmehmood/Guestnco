import React, { useState } from "react";

import Footer from "../Footer";
import SearchBar from "../SearchBar";
import PaymentCard from "./PaymentCard";

const Checkout = () => {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    companyName: "",
    address: "",
    zipcode: "",
    agree: false,
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
  const ToggleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setstate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (state.firstname == "") alert("Fill the firstname field!");
    else if (state.lastname == "") alert("Fill the lastname field!");
    else if (state.phone == "") alert("Fill the phone no. field!");
    else if (state.email == "") alert("Fill the email field!");
    else if (state.city == "") alert("Fill the city field!");
    else if (state.state == "") alert("Fill the state field!");
    else if (state.address == "") alert("Fill the address field!");
    else if (state.zipcode == "") alert("Fill the zipcode field!");
    else alert("Order Submitted!");
    console.log("CHECKED OUT", state);
  };

  return (
    <div style={{ paddingTop: "130px" }}>
      <SearchBar />
      <div style={{ background: "white" }} id="section-body">
        <section className="main-content-area">
          <div style={{ background: "white" }} className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="page-title">
                  <div className="block-top-title">
                    <ol style={{ background: "white" }} className="breadcrumb">
                      <li>
                        <a>
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="active">Checkout</li>
                    </ol>
                    <h1 className="listing-title">Checkout</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "white" }} className="container">
            <div className="">
              <div className="checkout-wrapper">
                <form className="row">
                  <div className="col-md-8 col-xs-12">
                    <div className="form-wrapper">
                      <div action="">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">First Name</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="firstname"
                                value={state.firstname}
                                onChange={InputEvent}
                                placeholder="Arrive"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">Last Name</label>
                              <input
                                required
                                type="name"
                                id="exampleFormControlInput1"
                                value={state.lastname}
                                onChange={InputEvent}
                                name="lastname"
                                className="form-control "
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">Email</label>
                              <input
                                required
                                type="name"
                                id="exampleFormControlInput1"
                                value={state.email}
                                onChange={InputEvent}
                                type="text"
                                name="email"
                                className="form-control "
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">Phone Number</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="phone"
                                value={state.phone}
                                onChange={InputEvent}
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">City</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="city"
                                value={state.city}
                                onChange={InputEvent}
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">State</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="state"
                                value={state.state}
                                onChange={InputEvent}
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">Zip Code</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="zipcode"
                                value={state.zipcode}
                                onChange={InputEvent}
                                placeholder="Zip Code"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="">Company name (Optional)</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="companyName"
                                value={state.companyName}
                                onChange={InputEvent}
                                placeholder="Company name (Optional)"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label for="">Address</label>
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="address"
                                value={state.address}
                                onChange={InputEvent}
                                placeholder="Address"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ background: "white" }}
                    className="col-md-4 col-xs-12"
                  >
                    <div className="checkout-right-wrapper">
                      <h3>Checkout Details</h3>
                      <div className="checkout-table">
                        <table
                          className="table table-striped"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <thead>
                            <tr>
                              <th>Left Label</th>
                              <th className="text-right">Right Label</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Left</td>
                              <td className="text-right">Right</td>
                            </tr>
                            <tr>
                              <td>Left</td>
                              <td className="text-right">Right</td>
                            </tr>
                            <tr>
                              <td>Left</td>
                              <td className="text-right">Right</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>
                                <strong>Total</strong>
                              </td>
                              <td className="text-right">
                                <strong>123$</strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                      <PaymentCard />
                      <div className="checkbox ">
                        <label>
                          <input
                            name="agree"
                            type="checkbox"
                            onChange={ToggleEvent}
                          />{" "}
                          I agree text{" "}
                        </label>
                      </div>

                      <div className="text-center">
                        <a
                          onClick={formSubmit}
                          type="submit button"
                          className="btn btn-primary btn-long"
                        >
                          Checkout{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
export default Checkout;
