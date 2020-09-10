import React from "react";

const SearchBar = () => {
  return (
    <div id="guesco-main-search" className="main-search " data-sticky="0">
      <div className="container-fluid">
        <form className="clearfix">
          <div id="search-desktop" className="search-wrap hidden-sm hidden-xs">
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
          </div>
          <div className="search-wrap search-banner-mobile">
            <div className="search-destination">
              <input
                value=""
                type="text"
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
