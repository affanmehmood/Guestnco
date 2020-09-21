import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Datetime from "react-datetime";

const moment = require("moment");

const InstantBooking = (props) => {
  const history = useHistory();
  const AppartmentDetails = props.AppartmentDetails;
  const [instantBookingState, setInstantBookingState] = useState({
    arrival: "",
    depart: "",
    guests: 0,
    text: "",
  });

  const [servicesFinal, setServicesFinal] = useState([]);
  const [servicesListFull, setServicesListFull] = useState([{}, {}]);
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const startDateChange = (date) => {
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        arrival: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const endDateChange = (date) => {
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        depart: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const ToggleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    //servicesListFull.forEach((value, index) => {});
    if (value) servicesFinal.push(parseInt(name));
    else {
      const filtered = servicesFinal.filter(function (val, index, arr) {
        return val != name;
      });
      setServicesFinal(filtered);
    }
  };
  function instantBoking() {
    if (sessionStorage.getItem("logintoken") == null) {
      console.log("NOT CLICKED");
      alert("You Must Login First");
      return;
    } else {
      const instant = {
        extra_services: servicesFinal.length == 0 ? null : servicesFinal,
        user_id: null,
        apartment_id: AppartmentDetails.id,
        checkin_date: instantBookingState.arrival,
        checkout_date: instantBookingState.depart,
        guests: parseInt(instantBookingState.guests),
        introduction: instantBookingState.text,
      };
      console.log("Instant", instant);

      axios
        .post("http://18.223.32.178:3000/user/bookapartment", instant)
        .then((response) => {
          console.log("RESPONSE", response);
          const checkout = {
            instant: instant,
            extra_services_full: servicesListFull,
            apt_id: AppartmentDetails.id,
            apt_name: AppartmentDetails.name,
            apt_price: AppartmentDetails.prices.rent_fee,
            booking_id: response.data.data.booking_id,
            service_price: AppartmentDetails.prices.cleaningFee,
          };
          console.log("CHECKOUT response", checkout);
          //use redux here
          sessionStorage.setItem("instantBoking", JSON.stringify(checkout));
          history.push("/checkout");
        });
    }
  }
  useEffect(() => {
    axios
      .get("http://18.223.32.178:3000/user/extraservices")
      .then((response) => {
        console.log("SERVICES", response.data.data);

        setServicesListFull(response.data.data);
      });
  }, setServicesListFull);

  const getServices = () => {
    const services_list = [];
    console.log("servicesListFull", servicesListFull);
    for (let i = 0; i < servicesListFull.length; i++) {
      services_list.push(
        <li>
          <label class="homey_extra_price control control--checkbox">
            <input
              type="checkbox"
              name={servicesListFull[i].id}
              data-name="lunch"
              data-price="24"
              yoyo={servicesListFull[i].id}
              data-type="per_guest"
              value={instantBookingState.lunch}
              onChange={ToggleEvent}
            />
            <span class="control-text">{servicesListFull[i].service_name}</span>
            <span class="control__indicator"></span>
          </label>
          <span>AED {servicesListFull[i].service_charges}</span>
        </li>
      );
    }
    return services_list;
  };
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
                  {AppartmentDetails.prices.rent_fee != null
                    ? AppartmentDetails.prices.rent_fee
                    : "Unknown"}

                  <sub>
                    {AppartmentDetails.prices.rent_frequency != null
                      ? AppartmentDetails.prices.rent_frequency
                      : "Unknown"}
                  </sub>
                </span>
              </div>
            </div>
            <div class="sidebar-booking-module-body">
              <form class="guesco_notification block-body-sidebar">
                <div id="single-listing-date-range" class="search-date-range">
                  <div class="search-date-range-arrive">
                    <div className="search-date-range-arrive">
                      <Datetime onChange={startDateChange} />
                    </div>
                  </div>
                  <div class="search-date-range-depart">
                    <div className="search-date-range-depart">
                      <Datetime onChange={endDateChange} />
                    </div>
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
                  <ul
                    key={setServicesListFull}
                    class="extra-services-list list-unstyled clearfix"
                  >
                    {getServices()}
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
