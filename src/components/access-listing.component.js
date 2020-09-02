import React, { Component } from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function AccessListingNew() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Option 1",
        field: "orderno",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Request #",
        },
      },
      {
        label: "Option 1",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Option 1",
        field: "items",
        sort: "asc",
        width: 100,
      },
      {
        label: "Option 1",
        field: "type",
        sort: "asc",
        width: 100,
      },
      {
        label: "Option 1",
        field: "amount",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        orderno: "Option 1",
        items: "Option 1",
        action: (
          <div className="more-nav">
            <div className="dropdown">
              <button
                className="more"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="fa fa-ellipsis-h"></span>
              </button>
              <ul
                className="dropdown-menu sub-dropdown"
                aria-labelledby="dLabel"
              >
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#buildingguidelines-popup"
                  >
                    Building Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#requestdirection-popup"
                  >
                    Request Directions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#loyaltyreward-popup"
                  >
                    Reward Loyalty Points
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#providefeeback-popup"
                  >
                    Provide Feedback
                  </a>
                </li>
                <li>
                  <a href="services">Services Acquired</a>
                </li>
              </ul>
            </div>
          </div>
        ),
        date: "Option 1",
        amount: "Option 1",
        type: "Option 1",
      },
      {
        orderno: "Option 1",
        items: "Option 1",
        action: (
          <div className="more-nav">
            <div className="dropdown">
              <button
                className="more"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="fa fa-ellipsis-h"></span>
              </button>
              <ul
                className="dropdown-menu sub-dropdown"
                aria-labelledby="dLabel"
              >
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#buildingguidelines-popup"
                  >
                    Building Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#requestdirection-popup"
                  >
                    Request Directions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#loyaltyreward-popup"
                  >
                    Reward Loyalty Points
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#providefeeback-popup"
                  >
                    Provide Feedback
                  </a>
                </li>
                <li>
                  <a href="services">Services Acquired</a>
                </li>
              </ul>
            </div>
          </div>
        ),
        date: "Option 1",
        amount: "Option 1",
        type: "Option 1",
      },
      {
        orderno: "Option 1",
        items: "Option 1",
        action: (
          <div className="more-nav">
            <div className="dropdown">
              <button
                className="more"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="fa fa-ellipsis-h"></span>
              </button>
              <ul
                className="dropdown-menu sub-dropdown"
                aria-labelledby="dLabel"
              >
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#buildingguidelines-popup"
                  >
                    Building Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#requestdirection-popup"
                  >
                    Request Directions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#loyaltyreward-popup"
                  >
                    Reward Loyalty Points
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#providefeeback-popup"
                  >
                    Provide Feedback
                  </a>
                </li>
                <li>
                  <a href="services">Services Acquired</a>
                </li>
              </ul>
            </div>
          </div>
        ),
        date: "Option 1",
        amount: "Option 1",
        type: "Option 1",
      },
      {
        orderno: "Option 1",
        items: "Option 1",
        action: (
          <div className="more-nav">
            <div className="dropdown">
              <button
                className="more"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="fa fa-ellipsis-h"></span>
              </button>
              <ul
                className="dropdown-menu sub-dropdown"
                aria-labelledby="dLabel"
              >
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#buildingguidelines-popup"
                  >
                    Building Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#requestdirection-popup"
                  >
                    Request Directions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#loyaltyreward-popup"
                  >
                    Reward Loyalty Points
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#providefeeback-popup"
                  >
                    Provide Feedback
                  </a>
                </li>
                <li>
                  <a href="services">Services Acquired</a>
                </li>
              </ul>
            </div>
          </div>
        ),
        date: "Option 1",
        amount: "Option 1",
        type: "Option 1",
      },
    ],
  });
  return (
    <div>
      <div id="guesco-main-search" className="main-search " data-sticky="0">
        <div className="container-fluid">
          <form className="clearfix">
            <div
              id="search-desktop"
              className="search-wrap hidden-sm hidden-xs"
            >
              <div className="search-destination">
                <input
                  type="text"
                  name="location_search"
                  autoComplete="off"
                  value=""
                  className="form-control input-search"
                  placeholder="City"
                />
              </div>
              <div className="search-guests search-budget-js">
                <input
                  type="text"
                  name=""
                  autoComplete="off"
                  value=""
                  className="form-control"
                  placeholder="Budget"
                />
              </div>
              <div className="search-date-range main-search-date-range-js">
                <div className="search-date-range-arrive">
                  <input
                    type="text"
                    autoComplete="off"
                    name="arrive"
                    value=""
                    className="form-control"
                    placeholder="Check In"
                  />
                </div>
                <div className="search-date-range-depart">
                  <input
                    type="text"
                    autoComplete="off"
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
                  onFocus="blur();"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="section-body">
        <section className="main-content-area whitebg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="page-title">
                  <div className="block-top-title">
                    <ol className="breadcrumb">
                      <li>
                        <a href="../index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="active">Order Listing</li>
                    </ol>
                    <h1 className="listing-title">Order Listing</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="sidebar">
                  <div className="main-box-sidebar categories_sidebar user_dashboards">
                    <h3 className="heading_sidebar">Quick Links</h3>
                    <ul>
                      <li className="">
                        <a href="#">
                          <span>My Favorite Business</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Lisiting Management</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>My Orders</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Optional </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Optional </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Optional </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Reward Points Activity</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Change Password</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="listing-table-wrapper">
                  <div className="common-table">
                    <MDBDataTableV5
                      className="mdbtable"
                      hover
                      entriesOptions={[10, 25, 50, 100]}
                      entries={10}
                      pagesAmount={4}
                      pagingTop={true}
                      data={datatable}
                      searchTop
                      fullPagination
                      searchBottom={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-wrap footer">
        <div className="footer-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div
                  id="guestco_about_widget-7"
                  className="widget footer-widget widget-about"
                >
                  <div className="widget-body">
                    <p>Logo</p>
                    <p>
                      guestco is a powerful booking platform that lets you run a
                      residential or commercial rental business online with no
                      hassle
                    </p>
                    <p className="read">
                      <a href="#">
                        Read more <i className="fa fa-caret-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div
                  id="guestco_taxonomies-7"
                  className="widget footer-widget widget-categories"
                >
                  <div className="widget-top">
                    <h3 className="widget-title">Explore</h3>
                  </div>
                  <div className="widget-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Apartment</a>
                      </li>
                      <li>
                        <a href="#">Bed &amp; Breakfast</a>
                      </li>
                      <li>
                        <a href="#">Condo</a>
                      </li>
                      <li>
                        <a href="#">House</a>
                      </li>
                      <li>
                        <a href="#">Loft</a>
                      </li>
                      <li>
                        <a href="#">Studio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div
                  id="nav_menu-2"
                  className="widget footer-widget widget_nav_menu"
                >
                  <div className="widget-top">
                    <h3 className="widget-title">Company</h3>
                  </div>
                  <div className="menu-footer-nav-container">
                    <ul id="menu-footer-nav" className="menu">
                      <li
                        id="menu-item-1829"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-493 current_page_item menu-item-1829"
                      >
                        <a href="index.html" aria-current="page">
                          Home
                        </a>
                      </li>
                      <li
                        id="menu-item-1363"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363"
                      >
                        <a href="about-guestco/index.html">About</a>
                      </li>
                      <li
                        id="menu-item-1364"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364"
                      >
                        <a href="blog/index.html">Blog and Press</a>
                      </li>
                      <li
                        id="menu-item-1830"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1830"
                      >
                        <a href="half-map/index.html">Listings</a>
                      </li>
                      <li
                        id="menu-item-1362"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1362"
                      >
                        <a href="frequently-asked-questions/index.html">Help</a>
                      </li>
                      <li
                        id="menu-item-1361"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361"
                      >
                        <a href="contact-us/index.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div
                  id="guestco_contact-7"
                  className="widget footer-widget widget-contact"
                >
                  <div className="widget-top">
                    <h3 className="widget-title">Contact Us</h3>
                  </div>
                  <div className="widget-body">
                    <div className="contact_text"></div>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-map-marker"></i> 142 Bay Rd, Miami
                        Beach, FL 33139
                      </li>
                      <li>
                        <i className="fa fa-phone-square"></i> 800 987 6543
                      </li>
                      <li>
                        <i className="fa fa-fax"></i> 876 654 2362
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>{" "}
                        <a href="mailto:guestco@email.com">guestco@email.com</a>
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-o-right"></i>{" "}
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="footer-copyright">
                  guestco - All rights reserved
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="social-footer">
                  <div className="social-icons social-round">
                    <a className="btn-bg-facebook" target="_blank" href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn-bg-twitter" target="_blank" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn-bg-linkedin" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="btn-bg-google-plus" target="_blank" href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="btn-bg-instagram" target="_blank" href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a className="btn-bg-pinterest" target="_blank" href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a className="btn-bg-yelp" target="_blank" href="#">
                      <i className="fa fa-yelp"></i>
                    </a>
                    <a className="btn-bg-youtube" target="_blank" href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="modal fade common-modal custom-modal-login"
        id="buildingguidelines-popup"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Business Guidelines</h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <h2>Parking Rules</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h2>Electricity Rules</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h2>Internet Rules</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a
                href="#"
                className="btn btn-primary btn-long"
                data-dismiss="modal"
                aria-label="Close"
              >
                Thankyou!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade common-modal custom-modal-login"
        id="requestdirection-popup"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Request Directions</h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5450300315465!2d72.99617706552172!3d33.668948830711805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ef0ae9%3A0xd74faf85d90645e5!2sG-11%20Markaz%20G%2011%20Markaz%20G-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1598182311787!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a
                href="#"
                className="btn btn-primary btn-long"
                data-dismiss="modal"
                aria-label="Close"
              >
                Thankyou!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade common-modal custom-modal-login"
        id="loyaltyreward-popup"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Reward Loyalty Points</h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <div className="table-rewardpoints-wrapper">
                  <div className="common-table-all">
                    <table
                      className="table table-striped"
                      width="100%"
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                    >
                      <thead className="">
                        <tr>
                          <td width="40%" className="hidden-xs width70">
                            Points
                          </td>
                          <td width="60%" className="hidden-xs">
                            Description
                          </td>
                        </tr>
                      </thead>
                      <tbody className="list">
                        <tr className="">
                          <td>
                            <label className=" rewards-point-lable green">
                              {" "}
                              100 Points
                            </label>
                          </td>
                          <td>Stating at home </td>
                        </tr>
                        <tr className="">
                          <td>
                            <label className="rewards-point-lable blue">
                              {" "}
                              100 Points
                            </label>
                          </td>
                          <td>Electricity Consumption</td>
                        </tr>
                        <tr className="">
                          <td>
                            <label className="rewards-point-lable yellow">
                              {" "}
                              100 Points
                            </label>
                          </td>
                          <td>Home Cleaness </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a
                href="#"
                className="btn btn-primary btn-long"
                data-dismiss="modal"
                aria-label="Close"
              >
                Thankyou!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade common-modal custom-modal-login"
        id="providefeeback-popup"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog clearfix" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Provide Feedback</h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <h2>Your Feedback Matters</h2>
                <p>This will help us to improve our services</p>
                <form>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control "
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                          type="email"
                          name="password"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="">Your Rating</label>
                        <div className="star-Rating-input star-rating">
                          <span className="fa fa-star" data-rating="1"></span>
                          <span className="fa fa-star" data-rating="2"></span>
                          <span className="fa fa-star" data-rating="3"></span>
                          <span className="fa fa-star" data-rating="4"></span>
                          <span className="fa fa-star-o" data-rating="5"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="">Write Feedback</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                          placeholder="Write Feedback"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full-width"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
