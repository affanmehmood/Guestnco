import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const InstantBooking = (props) => {
  const history = useHistory();
  const AppartmentDetails = props.AppartmentDetails;
  const [instantBookingState, setInstantBookingState] = useState({
    arrival: "",
    depart: "",
    guests: 0,
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
  function instantBoking() {
    console.log("SAVEDD");
    var extra_services = [];
    if (instantBookingState.breakfast) {
      extra_services.push(1);
    }
    if (instantBookingState.lunch) {
      extra_services.push(2);
    }
    if (instantBookingState.dinner) {
      extra_services.push(3);
    }
    if (extra_services.length == 0) {
      extra_services = null;
    }

    const instant = {
      extra_services: extra_services,
      user_id: null,
      apartment_id: 1,
      checkin_date: instantBookingState.arrival,
      checkout_date: instantBookingState.depart,
      guests: instantBookingState.guests,
      introduction: instantBookingState.text,
    };
    //console.log(obj);

    axios
      .post("http://18.223.32.178:3000/user/bookapartment", instant)
      .then((response) => {
        console.log("RESPONSE", response);
        const checkout = {
          instant: instant,
          apt_id: AppartmentDetails.id,
          apt_name: AppartmentDetails.name,
          apt_price: AppartmentDetails.prices.nightly,
          booking_id: response.data.data.booking_id,
          service_price: AppartmentDetails.prices.cleaningFee,
        };
        console.log("CHECKOUT response", checkout);
        //use redux here
        sessionStorage.setItem("instantBoking", JSON.stringify(checkout));
        history.push("/checkout");
      });
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
                  <sup>AED</sup>
                  {AppartmentDetails.prices.nightly != null
                    ? AppartmentDetails.prices.nightly
                    : AppartmentDetails.prices.monthly}
                  <sub>
                    {AppartmentDetails.prices.nightly != null
                      ? "night"
                      : "month"}
                  </sub>
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
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="guests"
                    value={instantBookingState.guests}
                    onChange={InputEvent}
                    class="form-control"
                    placeholder="Guests"
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
                      <span>AED{AppartmentDetails.priceBreakfast}</span>
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
                      <span>AED{AppartmentDetails.priceLunch}</span>
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
                      <span>AED{AppartmentDetails.priceDinner}</span>
                    </li>
                  </ul>
                </div>
                <div class="search-message">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Introduce yourself to the host"
                    name="text"
                    onChange={InputEvent}
                    value={instantBookingState.text}
                  ></textarea>
                </div>
                <div style={{ height: "15px" }}></div>

                <a
                  onClick={instantBoking}
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
