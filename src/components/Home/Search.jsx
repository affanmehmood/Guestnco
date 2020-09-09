import React from "react";

const Search = () => {
  return (
    <section class="top-banner-wrap mainbanner-bg">
      <div class="banner-caption ">
        <div class="search-wrap search-banner search-banner-desktop hidden-xs">
          <form class="clearfix" action="" method="GET">
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
          </form>
        </div>
        <div class="search-wrap search-banner search-banner-mobile">
          <form class="clearfix">
            <div class="search-destination">
              <input
                value=""
                type="text"
                class="form-control"
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
