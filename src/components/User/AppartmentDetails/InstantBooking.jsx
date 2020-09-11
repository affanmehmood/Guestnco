import React, { useState } from "react";

const InstantBooking = (props) => {
  const AppartmentDetails = props.AppartmentDetails;
  const [instantBookingState, setInstantBookingState] = useState({
    arrival: "",
    depart: "",
    budget: "",
    breakfast: false,
    lunch: false,
    dinner: false,
    text: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const ToggleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  function instantBoking(event) {
    console.log("SAVEDD");
    const obj = {
      arrival: instantBookingState.arrival,
      depart: instantBookingState.depart,
      budget: instantBookingState.arrival,
      breakfast: instantBookingState.breakfast,
      lunch: instantBookingState.lunch,
      dinner: instantBookingState.dinner,
      text: instantBookingState.text,
    };
    //use redux here
    sessionStorage.setItem("instantBoking", JSON.stringify(obj));
  }
  return (
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 homey_sticky">
      <div class="sidebar right-sidebar fixedscroll-sidebar">
        <div
          id="guesco_remove_on_mobile"
          class="sidebar-booking-module hidden-sm hidden-xs"
        >
          <div class="block">
            <div class="sidebar-booking-module-header">
              <div class="block-body-sidebar">
                <span class="item-price">
                  <sup>$</sup>
                  {AppartmentDetails.prices.nightly}
                  <sub>/night</sub>
                </span>
              </div>
            </div>
            <div class="sidebar-booking-module-body">
              <form class="guesco_notification block-body-sidebar">
                <div id="single-listing-date-range" class="search-date-range">
                  <div class="search-date-range-arrive">
                    <input
                      required
                      type="name"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="arrival"
                      value={instantBookingState.arrival}
                      onChange={InputEvent}
                      placeholder="Arrive"
                    />
                  </div>
                  <div class="search-date-range-depart">
                    <input
                      required
                      type="name"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="depart"
                      value={instantBookingState.depart}
                      onChange={InputEvent}
                      class="form-control check_out_date"
                      placeholder="Depart"
                    />
                  </div>
                </div>
                <div class="search-guests search-budget-js">
                  <input
                    required
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="budget"
                    value={instantBookingState.budget}
                    onChange={InputEvent}
                    class="form-control"
                    placeholder="Budget"
                  />
                </div>
                <div class="search-extra-services">
                  <strong>Extra services</strong>
                  <ul class="extra-services-list list-unstyled clearfix">
                    <li>
                      <label class="homey_extra_price control control--checkbox">
                        <input
                          type="checkbox"
                          name="breakfast"
                          data-name="breakfast"
                          data-price="16"
                          data-type="per_guest"
                          value={instantBookingState.breakfast}
                          onChange={ToggleEvent}
                        />
                        <span class="control-text">Breakfast</span>
                        <span class="control__indicator"></span>
                      </label>
                      <span>${AppartmentDetails.priceBreakfast}</span>
                    </li>
                    <li>
                      <label class="homey_extra_price control control--checkbox">
                        <input
                          type="checkbox"
                          name="lunch"
                          data-name="lunch"
                          data-price="24"
                          data-type="per_guest"
                          value={instantBookingState.lunch}
                          onChange={ToggleEvent}
                        />
                        <span class="control-text">Lunch</span>
                        <span class="control__indicator"></span>
                      </label>
                      <span>${AppartmentDetails.priceLunch}</span>
                    </li>
                    <li>
                      <label class="homey_extra_price control control--checkbox">
                        <input
                          type="checkbox"
                          name="dinner"
                          data-name="dinner"
                          data-price="24"
                          data-type="per_guest"
                          value={instantBookingState.dinner}
                          onChange={ToggleEvent}
                        />
                        <span class="control-text">Dinner</span>
                        <span class="control__indicator"></span>
                      </label>
                      <span>${AppartmentDetails.priceDinner}</span>
                    </li>
                  </ul>
                </div>
                <div class="search-message">
                  <textarea
                    name="text"
                    class="form-control"
                    rows="3"
                    placeholder="Introduce yourself to the host"
                    onChange={InputEvent}
                    value={instantBookingState.text}
                  ></textarea>
                </div>
                <div style={{ height: "15px" }}></div>

                <a
                  href="checkout"
                  onSubmit={instantBoking}
                  type="submit button"
                  class="btn btn-full-width btn-primary"
                >
                  Instant Booking
                </a>
              </form>
            </div>
          </div>
        </div>
        <div class="sidebar-booking-module-footer">
          <div class="block-body-sidebar">
            <button
              type="button"
              data-listid="267"
              class="add_fav btn btn-full-width btn-grey-outlined"
            >
              <i class="fa fa-heart-o" aria-hidden="true"></i> Add to Favorite
            </button>
            <button
              type="button"
              data-toggle="modal"
              data-target="#modal-contact-host"
              class="btn btn-full-width btn-grey-outlined"
            >
              Contact the host
            </button>
            <button
              type="button"
              id="guesco-print"
              class="btn btn-full-width btn-blank"
              data-listing-id="267"
            >
              <i class="fa fa-print" aria-hidden="true"></i> Print this page{" "}
            </button>
          </div>
          <div class="social-icons social-round">
            <a class="btn-bg-facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="btn-bg-facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="btn-bg-facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="btn-bg-facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="btn-bg-facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstantBooking;