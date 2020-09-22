import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../Reusable/Footer";
import SearchBar from "../../Reusable/SearchBar";
import Header from "../../Reusable/header";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [instantS, setInstantS] = useState(
    JSON.parse(sessionStorage.getItem("instantBoking"))
  );

  var totalPrice = 0;
  var list = [];
  if (
    instantS != null &&
    instantS.instant.extra_services != null &&
    instantS.extra_services_full != null
  ) {
    totalPrice = parseInt(instantS.apt_price);

    for (var i = 0; i < instantS.instant.extra_services.length; i++) {
      instantS.extra_services_full.forEach((val, key) => {
        if (instantS.instant.extra_services[i] == val.id) {
          list.push({ name: val.service_name, price: val.service_charges });
          totalPrice += parseInt(val.service_charges);
        }
      });
    }
  }

  const [paymentMethods, setPaymentMethods] = useState([{}, {}]);
  const [addPaymentMethod, setAddPaymentMethod] = useState({
    type: "",
    card_no: "0",
    cvc: 0,
    expiry: "",
    user_id: 2,
    card_holder_name: "",
    date: "",
  });

  const [services, setServices] = useState(list);

  const [state, setstate] = useState({
    agree: false,
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
  const PaymentSelected = (event) => {
    const { value } = event.target;
    paymentMethods.forEach((paymentMethod) => {
      if (value == "Select Card") {
        setSelectedPaymentMethod({});
      }
      if (value == paymentMethod.card_no) {
        setSelectedPaymentMethod(paymentMethod);
      }
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
    if (sessionStorage.getItem("logintoken") == null)
      toast.error("You Must Login First");
    else if (
      selectedPaymentMethod.id == null ||
      selectedPaymentMethod.id == undefined
    )
      toast.error("Please select a payment method");
    else if (!state.agree) toast.error("I agree unchecked");
    else {
      const obj = {
        payment_type_id: selectedPaymentMethod.id,
        booking_id: instantS.booking_id,
      };
      console.log("OBJ", obj);
      axios
        .post("http://18.223.32.178:3000/user/updatebooking", obj)
        .then((response) => {
          toast.success(response.data.message);
        });
    }
    console.log("CHECKED OUT", state);
  };

  useEffect(() => {
    axios
      .get("http://18.223.32.178:3000/user/paymentmethods/2")
      .then((response) => {
        console.log("PAYMENTMETHODS", response.data.data);
        setPaymentMethods(response.data.data);
      });
  }, paymentMethods.length);

  const InputEventAddPayment = (event) => {
    const { name, value } = event.target;
    setAddPaymentMethod((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const AddPaymentMethod = (e) => {
    e.preventDefault();
    axios
      .post("http://18.223.32.178:3000/user/paymentmethod", {
        payment_type: addPaymentMethod.type,
        card_no: addPaymentMethod.card_no,
        card_cvc: parseInt(addPaymentMethod.cvc),
        card_expiry: addPaymentMethod.expiry,
        user_id: 2,
        holder_name: addPaymentMethod.card_holder_name,
        created_at: addPaymentMethod.date,
      })
      .then((response) => {
        window.location.reload();

        console.log("Added Payment Method", addPaymentMethod);
      });
  };

  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <SearchBar />

      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
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
                              <th>Service Name</th>
                              <th className="text-right">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Appartment Price</td>
                              <td className="text-right">
                                AED
                                {instantS == null
                                  ? " Not Known"
                                  : instantS.apt_price}
                              </td>
                            </tr>
                            {services.map((ser, index) => {
                              return (
                                <tr>
                                  <td>{ser.name}</td>
                                  <td className="text-right">
                                    AED {ser.price}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>
                                <strong>Total</strong>
                              </td>
                              <td className="text-right">
                                <strong>AED{totalPrice}</strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div class="payment-mehtods">
                        <label for="">Select Payment Method</label>
                        <br />

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Select Card #</label>
                              <select
                                onChange={PaymentSelected}
                                class="form-control common-select"
                              >
                                <option>Select Card</option>
                                {paymentMethods.map((value, index) => {
                                  return <option>{value.card_no}</option>;
                                })}
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Select Card Type</label>
                              <div class="form-control common-select">
                                {selectedPaymentMethod.payment_type}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-right">
                          <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#addmethod-popup"
                            class="addmethod"
                          >
                            Add Payment Method
                          </a>
                        </div>
                      </div>
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
      <div
        class="modal fade common-modal custom-modal-login"
        id="addmethod-popup"
        tabindex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div class="modal-dialog clearfix" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title">Add New Payment Method</h4>
            </div>
            <div class="modal-body">
              <div class="modal-body-content">
                <h2>Add Method</h2>
                <p>Please fill your below details</p>
                <form onSubmit={AddPaymentMethod}>
                  <div class="row">
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Payment Type</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="text"
                          name="type"
                          class="form-control "
                          placeholder="Type"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Card No</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="number"
                          name="card_no"
                          class="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Card Holder Name</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="text"
                          name="card_holder_name"
                          class="form-control"
                          placeholder="Card Holder Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Card CVC</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="number"
                          name="cvc"
                          class="form-control "
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Card Expiry</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="text"
                          name="expiry"
                          class="form-control"
                          placeholder="Expiry date"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <div class="form-group">
                        <label for="">Created Date</label>
                        <input
                          required
                          onChange={InputEventAddPayment}
                          type="text"
                          name="date"
                          class="form-control "
                          placeholder="Created Date"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary btn-full-width">
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;
