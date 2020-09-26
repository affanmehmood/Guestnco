import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Datetime from "react-datetime";

const moment = require("moment");

const Search = () => {
  const history = useHistory();
  const [state, setstate] = useState({
    city: "",
    budget: "",
    arrival: "",
    depart: "",
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
  const startDateChange = (date) => {
    setstate((preVal) => {
      return {
        ...preVal,
        arrival: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const endDateChange = (date) => {
    setstate((preVal) => {
      return {
        ...preVal,
        depart: moment.isMoment(date) ? date.format() : date,
      };
    });
  };
  const gotoSearch = () => {
    sessionStorage.setItem("searchObj", JSON.stringify(state));
    history.push("/search");
  };
  return (
    <section className="top-banner-wrap mainbanner-bg">
      <div className="banner-caption ">
        <div className="search-wrap search-banner search-banner-desktop hidden-xs">
          <form onSubmit={gotoSearch} className="clearfix">
            <div className="search-destination">
              <input
                type="text"
                name="city"
                autocomplete="off"
                onChange={InputEvent}
                className="form-control input-search"
                placeholder="City"
              />
            </div>
            <div className="search-guests search-budget-js">
              <input
                type="text"
                name="budget"
                autocomplete="off"
                onChange={InputEvent}
                className="form-control"
                placeholder="Budget"
              />
            </div>
            <div className="search-date-range main-search-date-range-js">
              <div className="search-date-range-arrive">
                <Datetime placeholder="Check In" onChange={startDateChange} />
              </div>
              <div className="search-date-range-depart">
                <Datetime placeholder="Check Out" onChange={endDateChange} />
              </div>
            </div>
            <div className="search-button">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="search-wrap search-banner search-banner-mobile">
          <form className="clearfix">
            <div className="search-destination">
              <input
                value=""
                type="text"
                className="form-control"
                placeholder="City?"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Search;
