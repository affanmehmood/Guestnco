import React from "react";

import Header from "./Reusable/header";
import SearchBar from "./Reusable/SearchBar";

import { MDBDataTableV5 } from "mdbreact";

export default function Service() {
  const [datatableOrders, setDatatableOrders] = React.useState({
    columns: [
      {
        label: "Order#",
        field: "orderno",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Order#",
        },
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Items",
        field: "items",
        sort: "asc",
        width: 100,
      },
      {
        label: "Type",
        field: "type",
        sort: "asc",
        width: 100,
      },
      {
        label: "Amount",
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
        orderno: "Tiger Nixon",
        type: "System Architect",
        items: "32",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        orderno: "Tiger Nixon 2",
        type: "System Architect",
        items: "32",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        orderno: "Tiger Nixon 3",
        type: "System Architect",
        items: "32",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
    ],
  });
  const [datatableRequests, setDatatableRequests] = React.useState({
    columns: [
      {
        label: "Request #",
        field: "requestno",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Request #",
        },
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Services",
        field: "services",
        sort: "asc",
        width: 100,
      },
      {
        label: "Amount",
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
        requestno: "Tiger Nixon",
        services: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        requestno: "Tiger Nixon 2",
        services: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        requestno: "Tiger Nixon 2",
        services: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
    ],
  });
  const [datatableActs, setDatatableActs] = React.useState({
    columns: [
      {
        label: "Request #",
        field: "requestno",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Request #",
        },
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Activity",
        field: "acts",
        sort: "asc",
        width: 100,
      },
      {
        label: "Amount",
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
        requestno: "Tiger Nixon",
        acts: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        requestno: "Tiger Nixon 2",
        acts: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
      {
        requestno: "Tiger Nixon 2",
        acts: "System Architect",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2011/04/25",
        amount: "$320",
      },
    ],
  });
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div>
        <SearchBar />

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
                        <li className="active">Services Acquired</li>
                      </ol>
                      <h1 className="listing-title">Services Acquired</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="">
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
                    <h2>Grocery Details</h2>
                    <div className="listing-table-wrapper">
                      <div className="common-table">
                        <MDBDataTableV5
                          className="mdbtable"
                          hover
                          entriesOptions={[5, 20, 25, 50, 100]}
                          entries={25}
                          pagesAmount={4}
                          searchTop
                          pagingTop={true}
                          data={datatableOrders}
                          fullPagination
                          searchBottom={false}
                        />
                      </div>
                    </div>
                    <h2>Request Maintinace Details</h2>
                    <div className="listing-table-wrapper">
                      <div className="common-table">
                        <MDBDataTableV5
                          className="mdbtable"
                          hover
                          entriesOptions={[5, 20, 25, 50, 100]}
                          entries={25}
                          pagesAmount={4}
                          pagingTop={true}
                          data={datatableRequests}
                          searchTop
                          fullPagination
                          searchBottom={false}
                        />
                      </div>
                    </div>
                    <h2>Outdoor Activities Details</h2>
                    <div className="listing-table-wrapper">
                      <div className="common-table">
                        <MDBDataTableV5
                          className="mdbtable"
                          hover
                          entriesOptions={[5, 20, 25, 50, 100]}
                          entries={25}
                          pagesAmount={4}
                          pagingTop={true}
                          data={datatableActs}
                          searchTop
                          fullPagination
                          searchBottom={false}
                        />
                      </div>
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
                        guestco is a powerful booking platform that lets you run
                        a residential or commercial rental business online with
                        no hassle
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
                          <a href="frequently-asked-questions/index.html">
                            Help
                          </a>
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
                          <a href="mailto:guestco@email.com">
                            guestco@email.com
                          </a>
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
                      <a
                        className="btn-bg-google-plus"
                        target="_blank"
                        href="#"
                      >
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
      </div>
    </div>
  );
}
