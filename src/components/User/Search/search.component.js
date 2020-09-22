import React, { useState, useEffect } from "react";
import axios from "axios";

import sidebarimage from "../../../images/sidebar-image-1.jpg";
import reviewimage from "../../../images/review-image.png";
import blogimage from "../../../images/blog-image.jpg";
import los from "../../../images/los.png";

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

        setAppartmentList(list);
      })
      .then(() => {
        console.log("APP NAME", appartmentList.length);
      });
  };
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
                      ""
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
                  <div
                    id=""
                    className="widget widget-list-properties widget-latest-properties"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Featured</h3>
                    </div>
                    <div className="widget-body">
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <span className="label-wrap top-left">
                                <span className="label label-success label-featured">
                                  Featured
                                </span>
                              </span>
                              <Link to="#">
                                <img
                                  width="450"
                                  height="300"
                                  src={sidebarimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">Beautiful Cove</Link>
                                </h2>
                                <span className="item-price">
                                  AED 175/night
                                </span>
                                <span className="list-inline rating stars">
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star-o"></span>
                                </span>
                              </div>
                            </div>
                            <ul className="item-amenities">
                              <li>
                                <i className="fa fa-bed"></i>{" "}
                                <span className="total-beds">2</span>
                              </li>
                              <li>
                                <i className="fa fa-shower"></i>{" "}
                                <span className="total-baths">1</span>
                              </li>
                              <li>
                                <i className="fa fa-user"></i>{" "}
                                <span className="total-guests">2</span>
                              </li>
                              <li>Bed &amp; Breakfast</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <span className="label-wrap top-left">
                                <span className="label label-success label-featured">
                                  Featured
                                </span>
                              </span>
                              <Link to="#">
                                <img
                                  width="450"
                                  height="300"
                                  src={sidebarimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">Beautiful Cove</Link>
                                </h2>
                                <span className="item-price">
                                  AED 175/night
                                </span>
                                <span className="list-inline rating stars">
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star-o"></span>
                                </span>
                              </div>
                            </div>
                            <ul className="item-amenities">
                              <li>
                                <i className="fa fa-bed"></i>{" "}
                                <span className="total-beds">2</span>
                              </li>
                              <li>
                                <i className="fa fa-shower"></i>{" "}
                                <span className="total-baths">1</span>
                              </li>
                              <li>
                                <i className="fa fa-user"></i>{" "}
                                <span className="total-guests">2</span>
                              </li>
                              <li>Bed &amp; Breakfast</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <span className="label-wrap top-left">
                                <span className="label label-success label-featured">
                                  Featured
                                </span>
                              </span>
                              <Link to="#">
                                <img
                                  width="450"
                                  height="300"
                                  src={sidebarimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">Beautiful Cove</Link>
                                </h2>
                                <span className="item-price">
                                  AED 175/night
                                </span>
                                <span className="list-inline rating stars">
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star-o"></span>
                                </span>
                              </div>
                            </div>
                            <ul className="item-amenities">
                              <li>
                                <i className="fa fa-bed"></i>{" "}
                                <span className="total-beds">2</span>
                              </li>
                              <li>
                                <i className="fa fa-shower"></i>{" "}
                                <span className="total-baths">1</span>
                              </li>
                              <li>
                                <i className="fa fa-user"></i>{" "}
                                <span className="total-guests">2</span>
                              </li>
                              <li>Bed &amp; Breakfast</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <span className="label-wrap top-left">
                                <span className="label label-success label-featured">
                                  Featured
                                </span>
                              </span>
                              <Link to="#">
                                <img
                                  width="450"
                                  height="300"
                                  src={sidebarimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">Beautiful Cove</Link>
                                </h2>
                                <span className="item-price">
                                  AED 175/night
                                </span>
                                <span className="list-inline rating stars">
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star"></span>
                                  <span className="fa fa-star-o"></span>
                                </span>
                              </div>
                            </div>
                            <ul className="item-amenities">
                              <li>
                                <i className="fa fa-bed"></i>{" "}
                                <span className="total-beds">2</span>
                              </li>
                              <li>
                                <i className="fa fa-shower"></i>{" "}
                                <span className="total-baths">1</span>
                              </li>
                              <li>
                                <i className="fa fa-user"></i>{" "}
                                <span className="total-guests">2</span>
                              </li>
                              <li>Bed &amp; Breakfast</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id=""
                    className="widget widget-taxonomies-card widget-categories"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Explore</h3>
                    </div>
                    <div className="widget-body">
                      <div className="taxonomy-card">
                        <Link className="taxonomy-link hover-effect" to="#">
                          <div className="taxonomy-title">Los Angeles </div>
                          <img
                            className="img-responsive"
                            src={los}
                            width="360"
                            height="120"
                            alt="Los Angeles"
                          />
                        </Link>
                      </div>
                      <div className="taxonomy-card">
                        <Link className="taxonomy-link hover-effect" to="#">
                          <div className="taxonomy-title">Los Angeles </div>
                          <img
                            className="img-responsive"
                            src={los}
                            width="360"
                            height="120"
                            alt="Los Angeles"
                          />
                        </Link>
                      </div>
                      <div className="taxonomy-card">
                        <Link className="taxonomy-link hover-effect" to="#">
                          <div className="taxonomy-title">Los Angeles </div>
                          <img
                            className="img-responsive"
                            src={los}
                            width="360"
                            height="120"
                            alt="Los Angeles"
                          />
                        </Link>
                      </div>
                      <div className="taxonomy-card">
                        <Link className="taxonomy-link hover-effect" to="#">
                          <div className="taxonomy-title">Los Angeles </div>
                          <img
                            className="img-responsive"
                            src={los}
                            width="360"
                            height="120"
                            alt="Los Angeles"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div id="" className="widget widget-latest-reviews">
                    <div className="widget-top">
                      <h3 className="widget-title">Latest Reviews</h3>
                    </div>
                    <div className="widget-body">
                      <div className="review-block">
                        <div className="media">
                          <div className="media-left">
                            <Link className="media-object">
                              <img
                                width="70"
                                height="70"
                                src={reviewimage}
                                className="img-circle"
                                alt=""
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="media-body media-middle">
                            <div className="msg-user-info">
                              <div className="msg-user-left">
                                <h2 className="title">
                                  <Link to="#">Review 3021</Link>
                                </h2>
                                <div className="message-date">
                                  <i className="fa fa-calendar-o"></i>10 months
                                  ago
                                  <span className="rating"></span>
                                </div>
                              </div>
                            </div>
                            <p>Sjajno mesto za odmor</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-block">
                        <div className="media">
                          <div className="media-left">
                            <Link className="media-object">
                              <img
                                width="70"
                                height="70"
                                src={reviewimage}
                                className="img-circle"
                                alt=""
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="media-body media-middle">
                            <div className="msg-user-info">
                              <div className="msg-user-left">
                                <h2 className="title">
                                  <Link to="#">Review 3021</Link>
                                </h2>
                                <div className="message-date">
                                  <i className="fa fa-calendar-o"></i>10 months
                                  ago
                                  <span className="rating"></span>
                                </div>
                              </div>
                            </div>
                            <p>Sjajno mesto za odmor</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-block">
                        <div className="media">
                          <div className="media-left">
                            <Link className="media-object">
                              <img
                                width="70"
                                height="70"
                                src={reviewimage}
                                className="img-circle"
                                alt=""
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="media-body media-middle">
                            <div className="msg-user-info">
                              <div className="msg-user-left">
                                <h2 className="title">
                                  <Link to="#">Review 3021</Link>
                                </h2>
                                <div className="message-date">
                                  <i className="fa fa-calendar-o"></i>10 months
                                  ago
                                  <span className="rating"></span>
                                </div>
                              </div>
                            </div>
                            <p>Sjajno mesto za odmor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="" className="widget widget-latest-posts">
                    <div className="widget-top">
                      <h3 className="widget-title">Latest Posts</h3>
                    </div>
                    <div className="widget-body">
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <Link to="#">
                                <img
                                  width="120"
                                  height="80"
                                  src={blogimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">
                                    Here&#8217;s What People Are Saying About
                                    Rentals
                                  </Link>
                                </h2>
                                <i className="fa fa-calendar-o"></i> 2 years ago{" "}
                                <span className="post-author">
                                  by
                                  <Link to="#">Mike Parker</Link>
                                </span>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur...
                              <Link to="#">Read more</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <Link to="#">
                                <img
                                  width="120"
                                  height="80"
                                  src={blogimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">
                                    Here&#8217;s What People Are Saying About
                                    Rentals
                                  </Link>
                                </h2>
                                <i className="fa fa-calendar-o"></i> 2 years ago{" "}
                                <span className="post-author">
                                  by
                                  <Link to="#">Mike Parker</Link>
                                </span>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur...
                              <Link to="#">Read more</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item-list-view">
                        <div className="media property-item">
                          <div className="media-left">
                            <div className="item-media item-media-thumb">
                              <Link to="#">
                                <img
                                  width="120"
                                  height="80"
                                  src={blogimage}
                                  className="img-responsive wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="media-body item-body clearfix">
                            <div className="item-title-head">
                              <div className="title-head-left">
                                <h2 className="title">
                                  <Link to="#">
                                    Here&#8217;s What People Are Saying About
                                    Rentals
                                  </Link>
                                </h2>
                                <i className="fa fa-calendar-o"></i> 2 years ago{" "}
                                <span className="post-author">
                                  by
                                  <Link to="#">Mike Parker</Link>
                                </span>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur...
                              <Link to="#">Read more</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
