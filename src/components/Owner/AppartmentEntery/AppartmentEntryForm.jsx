import React, { useState } from "react";

import Footer from "../../Reusable/Footer";
import Datetime from "react-datetime";
import { useHistory } from "react-router-dom";

import Header from "../../Reusable/header";

import axios from "axios";
import "../../../../node_modules/react-datetime/css/react-datetime.css";

import "./AppartmentEntryForm.css";

const moment = require("moment");

const AppartmentEntryForm = () => {
  const history = useHistory();
  const [state, setState] = useState({
    apartment_name: "",
    is_furnished: false,
    bedrooms: 0,
    bathrooms: 0,
    is_available: false,
    availabaility_time: "",
    adress1: "",
    address2: "",
    description: "",
    lat: "0.0",
    long: "0.0",
    is_featured: false,
    apartment_type: "",
    rent_frequency: "night",
    rent_fee: "0",
    cleaning_fee: "0",
    service_fee: "0",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const ToggleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const DateSelected = (date) => {
    setState((preVal) => {
      return {
        ...preVal,
        availabaility_time: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  function FormSubmit(e) {
    e.preventDefault();

    axios
      .post("http://18.223.32.178:3000/admin/addapartment", state)
      .then((response) => {
        console.log("Appartment Entery Form Response", response.data);
        sessionStorage.setItem("appartment_id", response.data.data.id); // get this from api response
        history.push("/galleryuploader");
      });

    console.log("STATE ", state);
  }
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <div className="text-center">
          <h2>Add Appartment</h2>
          <p>Add details about your appartment.</p>
        </div>

        <div class="container">
          <form onSubmit={FormSubmit}>
            <div class="row">
              <div class="col-25">
                <label for="fname">Appartment Name</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.apartment_name}
                  type="text"
                  id="apartment_name"
                  name="apartment_name"
                  placeholder="Apartmemt Name"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="bedrooms">No. of Bedroom</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.bedrooms}
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  placeholder="0"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="bathrooms">No. of Bathrooms</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.bathrooms}
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  placeholder="0"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="adress1">Address 1</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.adress1}
                  type="text"
                  id="adress1"
                  name="adress1"
                  placeholder="New York"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="address2">Address 2</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.address2}
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="Street 23"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="apartment_type">Type</label>
              </div>
              <div class="col-75">
                <select
                  onChange={InputEvent}
                  id="apartment_type"
                  name="apartment_type"
                >
                  <option value="house">House</option>
                  <option value="appartment">Appartment</option>
                  <option value="hotel">Hotel Room</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Rent Frequency</label>
              </div>
              <div class="col-75">
                <select
                  onChange={InputEvent}
                  id="rent_frequency"
                  name="rent_frequency"
                >
                  <option value="nightly">Nightly</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="rent_fee">Rent in AED</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.rent_fee}
                  type="number"
                  id="rent_fee"
                  name="rent_fee"
                  placeholder="1"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="service_fee">Service Fee AED</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.service_fee}
                  type="number"
                  id="service_fee"
                  name="service_fee"
                  placeholder="1"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="cleaning_fee">Cleaning Fee AED</label>
              </div>
              <div class="col-75">
                <input
                  required
                  onChange={InputEvent}
                  value={state.cleaning_fee}
                  type="number"
                  id="cleaning_fee"
                  name="cleaning_fee"
                  placeholder="1"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="is_available">Is Available?</label>
              </div>
              <div class="col-75">
                <input
                  onChange={ToggleEvent}
                  type="checkbox"
                  id="is_available"
                  name="is_available"
                  placeholder="Street 23"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="is_furnished">Is Furnished?</label>
              </div>
              <div class="col-75">
                <input
                  onChange={ToggleEvent}
                  type="checkbox"
                  id="is_furnished"
                  name="is_furnished"
                  placeholder="Street 23"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="is_featured">Is Featured?</label>
              </div>
              <div class="col-75">
                <input
                  onChange={ToggleEvent}
                  type="checkbox"
                  id="is_featured"
                  name="is_featured"
                  placeholder="Street 23"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Select Date and Time</label>
              </div>
              <div class="col-75">
                <Datetime onChange={DateSelected} />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="description">Description</label>
              </div>
              <div class="col-75">
                <textarea
                  required
                  onChange={InputEvent}
                  value={state.description}
                  id="description"
                  name="description"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AppartmentEntryForm;
