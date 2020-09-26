import React, { useState } from "react";
import axios from "axios";

import Featured from "../AppartmentListing/Featured";
import Explore from "../AppartmentListing/Explore";
import LatestReviews from "../AppartmentListing/LatestReviews";
import LatestPosts from "../AppartmentListing/LatestPosts";

import Header from "../../Reusable/header";
import Footer from "../../Reusable/Footer";
import SearchBar from "../../Reusable/SearchBar";
import AppartmentCard from "../AppartmentListing/AppartmentCard";

import { Link } from "react-router-dom";

const Search = () => {
  const [appartmentList, setAppartmentList] = useState([]);

  const getSearchQuery = (query) => {
    console.log("Search query", query);
    axios
      .get(
        `http://18.223.32.178:3000/user/getapartmentlist?search=&city=${query.city}&checkin=${query.arrival}&budget=${query.budget}`
      )
      .then((res) => {
        console.log("DATA", res.data.data);
        const d = res.data.data;

        console.log("D", d.length);
        var list = [];
        for (var i = 0; i < d.length; i++) {
          if (d[i].images[0] != null) {
            list.push({
              id: d[i].id,
              featured: d[i].is_featured,
              imageUrl: "http://18.223.32.178:3000/" + d[i].images[i],
              price: d[i].rent_fee,
              adminImageUrl:
                "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
              name: d[i].apartment_name,
              address: d[i].adress1 + " " + d[i].address2,
              noRooms: d[i].bedrooms,
              noBaths: d[i].bathrooms,
              noGuests: 2,
              type: d[i].apartment_type,
              stars: d[i],
              hostName: "Adnan Javed",
            });
          }
        }
        sessionStorage.removeItem("searchObj");
        setAppartmentList(list);
      })
      .then(() => {
        console.log("APP NAME", appartmentList.length);
      });
  };
  if (sessionStorage.getItem("searchObj")) {
    getSearchQuery(JSON.parse(sessionStorage.getItem("searchObj")));
  }
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <SearchBar setSearchQuery={getSearchQuery} />

      <div id="section-body">
        <section className="main-content-area">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="page-title">
                  <div className="block-top-title">
                    <ol className="breadcrumb">
                      <li>
                        <Link href="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li className="active">Search Result</li>
                    </ol>
                    <h1 className="listing-title">Search Result</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                {appartmentList.length > 0 ? (
                  <div className="sort-wrap clearfix">
                    <div className="pull-left">
                      <div id="listings_found" className="number-of-listings">
                        {appartmentList.length} Rentals
                      </div>
                    </div>
                    <div className="pull-right">
                      <ul className="list-inline">
                        <li>
                          <strong>Sort By:</strong>
                        </li>
                        <li>
                          <select
                            id="sort_listings"
                            className="selectpicker bs-select-hidden"
                            title="Default Order"
                            data-live-search-style="begins"
                            data-live-search="false"
                          >
                            <option value="">Default Order</option>
                            <option value="a_price">Price (Low to High)</option>
                            <option value="d_price">Price (High to Low)</option>
                            <option value="d_rating">Rating</option>
                            <option selected value="featured_top">
                              Featured First
                            </option>
                            <option value="a_date">Date Old to New</option>
                            <option value="d_date">Date New to Old</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div
                  id="listings_module_section"
                  className="listing-wrap item-list-view"
                >
                  <div className="row">
                    {appartmentList.map((val, ind) => {
                      return (
                        <AppartmentCard
                          featured={val.featured}
                          imageUrl={val.imageUrl}
                          price={val.price}
                          adminImageUrl={val.adminImageUrl}
                          name={val.name}
                          address={val.address}
                          noRooms={val.noRooms}
                          noBaths={val.noBaths}
                          noGuests={val.noGuests}
                          type={val.type}
                          stars={val.stars}
                          hostName={val.hostName}
                          id={val.id}
                        />
                      );
                    })}
                  </div>
                  <div className="guesco-loadmore loadmore text-center">
                    {appartmentList.length > 0 ? (
                      <Link to="#" className="btn btn-primary btn-long">
                        Load More
                      </Link>
                    ) : (
                      "Please Search Something"
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 guesco_sticky">
                <div className="sidebar right-sidebar">
                  <div
                    id="mc4wp_form_widget-2"
                    className="widget widget_mc4wp_form_widget"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Newsletter Sign Up!</h3>
                    </div>
                    <form
                      id="mc4wp-form-1"
                      className="mc4wp-form mc4wp-form-1282"
                      method="post"
                      data-id="1282"
                      data-name=""
                    >
                      <div className="mc4wp-form-fields">
                        <p>
                          guesco is a powerful booking platform that lets you
                          run a residential or commercial rental business online
                          with no hassle
                        </p>
                        <div className="row">
                          <div className="col-sm-12">
                            <input
                              className="form-control mb-10"
                              type="email"
                              name="EMAIL"
                              required
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="col-sm-12">
                            <button
                              type="submit"
                              className="btn btn-primary btn-full-width"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <Featured />
                  <Explore />
                  <LatestReviews />
                  <LatestPosts />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
export default Search;
