import React from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const gotoSearch = () => {
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
                name="location_search"
                autocomplete="off"
                value=""
                className="form-control input-search"
                placeholder="City"
              />
            </div>
            <div className="search-guests search-budget-js">
              <input
                type="text"
                name=""
                autocomplete="off"
                value=""
                className="form-control"
                placeholder="Budget"
              />
            </div>
            <div className="search-date-range main-search-date-range-js">
              <div className="search-date-range-arrive">
                <input
                  type="text"
                  autocomplete="off"
                  name="arrive"
                  value=""
                  className="form-control"
                  placeholder="Check In"
                />
              </div>
              <div className="search-date-range-depart">
                <input
                  type="text"
                  autocomplete="off"
                  name="depart"
                  value=""
                  className="form-control"
                  placeholder="Check Out"
                />
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
