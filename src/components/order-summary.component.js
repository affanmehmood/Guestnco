import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Ordersumary() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Product Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Product Name",
        },
      },
      {
        label: "Quantity",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Price",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163",
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95",
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114",
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        salary: "$145",
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235",
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        salary: "$324",
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        salary: "$85",
      },
      {
        name: "Howard Hatfield",
        position: "Office Manager",
        office: "San Francisco",
        age: "51",
        date: "2008/12/16",
        salary: "$164",
      },
      {
        name: "Hope Fuentes",
        position: "Secretary",
        office: "San Francisco",
        age: "41",
        date: "2010/02/12",
        salary: "$109",
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
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
                      <li className="active">Order Summary</li>
                    </ol>
                    <h1 className="listing-title">Order Summary</h1>
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
                  <div className="order-summary-wrapper">
                    <div className="summary-inner">
                      <div className="summary-details ">
                        <h2>Your Order Summary</h2>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Order #:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>123456</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Order Date:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>23/8/2020</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Name:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>John Doe</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Email:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>email@gmail.com</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Payment Mode:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>VISA Card</p>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Description:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="lineheight15">
                              Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor,
                              nisi elit consequat ipsum, nec sagittis sem nibh
                              id elit.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3 className="total-label">Total Amount:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="total-amount">123456</p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <h2>Orders Details</h2>
                      <div class="listing-table-wrapper">
                        <div class="common-table">
                          <MDBDataTableV5
                            className="mdbtable"
                            hover
                            entriesOptions={[5, 20, 25, 50, 100]}
                            entries={25}
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
    </div>
  );
}
