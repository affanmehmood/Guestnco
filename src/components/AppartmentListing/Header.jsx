import React from "react";

const Header = () => {
  return (
    <div class="nav-area header-type-1 ">
      <div id="guesco-main-search" class="main-search " data-sticky="0">
        <div class="container-fluid">
          <form
            class="clearfix"
            action="https://demo01.getguesco.io/search-results/"
            method="GET"
          >
            <div id="search-desktop" class="search-wrap hidden-sm hidden-xs">
              <div class="search-destination">
                <input
                  type="text"
                  name="location_search"
                  autocomplete="off"
                  value=""
                  class="form-control input-search"
                  placeholder="City"
                />
              </div>
              <div class="search-guests search-budget-js">
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  value=""
                  class="form-control"
                  placeholder="Budget"
                />
              </div>
              <div class="search-date-range main-search-date-range-js">
                <div class="search-date-range-arrive">
                  <input
                    type="text"
                    autocomplete="off"
                    name="arrive"
                    value=""
                    class="form-control"
                    placeholder="Check In"
                  />
                </div>
                <div class="search-date-range-depart">
                  <input
                    type="text"
                    autocomplete="off"
                    name="depart"
                    value=""
                    class="form-control"
                    placeholder="Check Out"
                  />
                </div>
              </div>

              <div class="search-button">
                <button type="submit" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            <div class="search-wrap search-banner-mobile">
              <div class="search-destination">
                <input
                  value=""
                  type="text"
                  class="form-control"
                  placeholder="Where to go?"
                  onfocus="blur();"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
