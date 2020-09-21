import React, { useState } from "react";
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
    props.setSearchQuery(state);
  };
  return (
    <div id="guesco-main-search" className="main-search " data-sticky="0">
      <div className="container-fluid">
        <form onSubmit={SearchNow} className="clearfix">
          <div id="search-desktop" className="search-wrap hidden-sm hidden-xs">
            <div className="search-destination">
              <input
                type="name"
                name="city"
                onChange={InputEvent}
                autocomplete="off"
                className="form-control input-search"
                placeholder="City"
              />
            </div>
            <div className="search-guests search-budget-js">
              <input
                type="name"
                name="budget"
                onChange={InputEvent}
                autocomplete="off"
                className="form-control"
                placeholder="Budget"
              />
            </div>
            <div className="search-date-range main-search-date-range-js">
              <div className="search-date-range-arrive">
                <Datetime onChange={startDateChange} />
              </div>
              <div className="search-date-range-depart">
                <Datetime onChange={endDateChange} />
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
