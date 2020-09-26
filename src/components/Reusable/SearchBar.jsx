import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";

const moment = require("moment");

const SearchBar = (props) => {
  const [state, setState] = useState({
    city: "",
    budget: "",
    arrival: "",
    depart: "",
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
  const startDateChange = (date) => {
    setState((preVal) => {
      return {
        ...preVal,
        arrival: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const endDateChange = (date) => {
    setState((preVal) => {
      return {
        ...preVal,
        depart: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const SearchNow = (e) => {
    e.preventDefault();
    sessionStorage.setItem("searchObj", JSON.stringify(state));
    props.setSearchQuery(state);
  };
  useEffect(() => {
    const obj = JSON.parse(sessionStorage.getItem("searchObj"));
    if (obj == null) return;
    setState((preVal) => {
      return {
        ...preVal,
        city: obj.city,
        budget: obj.budget,
        arrival: obj.arrival,
        depart: obj.depart,
      };
    });
  }, SearchBar);
  return (
    <div id="guesco-main-search" className="main-search " data-sticky="0">
      <div className="container-fluid">
        <form onSubmit={SearchNow} className="clearfix">
          <div id="search-desktop" className="search-wrap hidden-sm hidden-xs">
            <div className="search-destination">
              <input
                type="name"
                value={state.city}
                name="city"
                onChange={InputEvent}
                autocomplete="off"
                className="form-control input-search"
                placeholder="Area"
              />
            </div>
            <div className="search-guests search-budget-js">
              <input
                type="name"
                name="budget"
                value={state.budget}
                onChange={InputEvent}
                autocomplete="off"
                className="form-control"
                placeholder="Budget"
              />
            </div>
            <div className="search-date-range main-search-date-range-js">
              <div className="search-date-range-arrive">
                <Datetime
                  value={state.arrival}
                  defaultValue="Check In"
                  onChange={startDateChange}
                />
              </div>
              <div className="search-date-range-depart">
                <Datetime
                  value={state.depart}
                  defaultValue="Check Out"
                  onChange={endDateChange}
                />
              </div>
            </div>

            <div className="search-button">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          <div className="search-wrap search-banner-mobile">
            <div className="search-destination">
              <input
                value=""
                type="submit name"
                className="form-control"
                placeholder="Where to go?"
                onfocus="blur();"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
