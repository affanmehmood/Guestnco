import React from "react";

import Header from "../../Reusable/header";
import Footer from "../../Reusable/Footer";
// Fix the padding area below the header
const Dashboard = () => {
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div>
        <div>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <link
            rel="icon"
            href="images/favicon.png"
            type="image/png"
            sizes="16x16"
          />

          <title>Dashboard</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="css/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="css/font-awesome1849.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="css/jquery.dataTables.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="css/mainaff7.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="css/main.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="css/admin.css"
            type="text/css"
            media="all"
          />
        </div>

        <div>
          <div id="section-body" class="dashboard-main">
            <section class=" whitebg">
              <div class="">
                <div class="dashboard-wrapper">
                  <div class="left-sidebar">
                    <div class="logo-wrapper-dashboard">
                      <a class="guestco_logo" href="/">
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                    <div class="sidebar-menu-dashboard">
                      <ul>
                        <li>
                          <a href="listing">
                            <i class="fa fa-cog"></i>Apparment Listing
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-cog"></i>Book Appartment
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-cog"></i>History Maintance{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-cog"></i>Billing Summary
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="right-maincontent">
                    <div class="breadcrumbs-wrapper">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div class="page-title">
                            <div class="block-top-title">
                              <ol class="breadcrumb">
                                <li>
                                  <a href="/">
                                    <span>Home</span>
                                  </a>
                                </li>
                                <li class="active">Dashboard</li>
                              </ol>
                              <h1 class="listing-title">Dashboard</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="dashboard-body-wrapper">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="listing-table-wrapper">
                            <div class="common-table">
                              <table
                                class="datatable-class table table-striped"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <thead>
                                  <tr>
                                    <th>Order #</th>
                                    <th>Date</th>
                                    <th>Items</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="listing-table-wrapper">
                            <div class="common-table">
                              <table
                                class="datatable-class table table-striped"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <thead>
                                  <tr>
                                    <th>Order #</th>
                                    <th>Date</th>
                                    <th>Items</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="listing-table-wrapper">
                            <div class="common-table">
                              <table
                                class="datatable-class table table-striped"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <thead>
                                  <tr>
                                    <th>Order #</th>
                                    <th>Date</th>
                                    <th>Items</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="ordersummary">132</a>
                                    </td>
                                    <td>23/8//2020</td>
                                    <td>12 Items</td>
                                    <td>
                                      <a href="#">edit</a> |{" "}
                                      <a href="#">Delete</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid" style={{ display: "none" }}>
                <div class="row">
                  <div class="col-md-3">
                    <div class="sidebar">
                      <div class="main-box-sidebar categories_sidebar user_dashboards">
                        <h3 class="heading_sidebar">Quick Links</h3>
                        <ul>
                          <li class="">
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
                  <div class="col-md-9">
                    <div class="listing-table-wrapper">
                      <div class="common-table">
                        <table
                          class="datatable-class table table-striped"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <thead>
                            <tr>
                              <th>Option 1</th>
                              <th>Option 1</th>
                              <th>Option 1</th>
                              <th>Option 1</th>
                              <th>Option 1</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>
                                <div class="more-nav">
                                  <div class="dropdown">
                                    <button
                                      class="more"
                                      type="button"
                                      id="dropdownMenu1"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                    >
                                      <span class="fa fa-ellipsis-h"></span>
                                    </button>
                                    <ul
                                      class="dropdown-menu sub-dropdown"
                                      aria-labelledby="dLabel"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#buildingguidelines-popup"
                                        >
                                          Building Guidelines
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#requestdirection-popup"
                                        >
                                          Request Directions
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#loyaltyreward-popup"
                                        >
                                          Reward Loyalty Points
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
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
                              </td>
                            </tr>

                            <tr>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>
                                <div class="more-nav">
                                  <div class="dropdown">
                                    <button
                                      class="more"
                                      type="button"
                                      id="dropdownMenu1"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                    >
                                      <span class="fa fa-ellipsis-h"></span>
                                    </button>
                                    <ul
                                      class="dropdown-menu sub-dropdown"
                                      aria-labelledby="dLabel"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#buildingguidelines-popup"
                                        >
                                          Building Guidelines
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#requestdirection-popup"
                                        >
                                          Request Directions
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#loyaltyreward-popup"
                                        >
                                          Reward Loyalty Points
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
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
                              </td>
                            </tr>
                            <tr>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>
                                <div class="more-nav">
                                  <div class="dropdown">
                                    <button
                                      class="more"
                                      type="button"
                                      id="dropdownMenu1"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                    >
                                      <span class="fa fa-ellipsis-h"></span>
                                    </button>
                                    <ul
                                      class="dropdown-menu sub-dropdown"
                                      aria-labelledby="dLabel"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#buildingguidelines-popup"
                                        >
                                          Building Guidelines
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#requestdirection-popup"
                                        >
                                          Request Directions
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#loyaltyreward-popup"
                                        >
                                          Reward Loyalty Points
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
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
                              </td>
                            </tr>
                            <tr>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>Option 1</td>
                              <td>
                                <div class="more-nav">
                                  <div class="dropdown">
                                    <button
                                      class="more"
                                      type="button"
                                      id="dropdownMenu1"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                    >
                                      <span class="fa fa-ellipsis-h"></span>
                                    </button>
                                    <ul
                                      class="dropdown-menu sub-dropdown"
                                      aria-labelledby="dLabel"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#buildingguidelines-popup"
                                        >
                                          Building Guidelines
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#requestdirection-popup"
                                        >
                                          Request Directions
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#loyaltyreward-popup"
                                        >
                                          Reward Loyalty Points
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
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
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="services-wrapper" style={{ display: "none" }}>
                      <ul>
                        <li>
                          <div class="inner-box">
                            <i class="fa fa-building-o"></i>
                            <h3>Building Guidelines</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="inner-box">
                            <i class="fa fa-map-marker"></i>
                            <h3>Request Directions</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="inner-box">
                            <i class="fa fa-usd"></i>
                            <h3>Reward Loyalty Points</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="inner-box">
                            <i class="fa fa-file-text-o"></i>
                            <h3>Provide Feedback</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="inner-box">
                            <i class="fa fa-cog"></i>
                            <h3>Services Acquired</h3>
                            <a href="services" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
          <div
            class="modal fade common-modal custom-modal-login"
            id="buildingguidelines-popup"
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog clearfix" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Business Guidelines</h4>
                </div>
                <div class="modal-body">
                  <div class="modal-body-content">
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
                <div class="modal-footer text-center">
                  <a
                    href="#"
                    class="btn btn-primary btn-long"
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
            class="modal fade common-modal custom-modal-login"
            id="requestdirection-popup"
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog clearfix" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Request Directions</h4>
                </div>
                <div class="modal-body">
                  <div class="modal-body-content">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5450300315465!2d72.99617706552172!3d33.668948830711805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ef0ae9%3A0xd74faf85d90645e5!2sG-11%20Markaz%20G%2011%20Markaz%20G-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1598182311787!5m2!1sen!2s"
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <a
                    href="#"
                    class="btn btn-primary btn-long"
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
            class="modal fade common-modal custom-modal-login"
            id="loyaltyreward-popup"
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog clearfix" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Reward Loyalty Points</h4>
                </div>
                <div class="modal-body">
                  <div class="modal-body-content">
                    <p class="">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since
                    </p>
                    <div class="table-rewardpoints-wrapper">
                      <div class="common-table-all">
                        <table
                          class="table table-striped"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <thead class="">
                            <tr>
                              <td width="40%" class="hidden-xs width70">
                                Points
                              </td>
                              <td width="60%" class="hidden-xs">
                                Description
                              </td>
                            </tr>
                          </thead>
                          <tbody class="list">
                            <tr class="">
                              <td>
                                <label class=" rewards-point-lable green">
                                  {" "}
                                  100 Points
                                </label>
                              </td>
                              <td>Stating at home </td>
                            </tr>
                            <tr class="">
                              <td>
                                <label class="rewards-point-lable blue">
                                  {" "}
                                  100 Points
                                </label>
                              </td>
                              <td>Electricity Consumption</td>
                            </tr>
                            <tr class="">
                              <td>
                                <label class="rewards-point-lable yellow">
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
                <div class="modal-footer text-center">
                  <a
                    href="#"
                    class="btn btn-primary btn-long"
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
            class="modal fade common-modal custom-modal-login"
            id="providefeeback-popup"
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog clearfix" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Provide Feedback</h4>
                </div>
                <div class="modal-body">
                  <div class="modal-body-content">
                    <h2>Your Feedback Matters</h2>
                    <p>This will help us to improve our services</p>
                    <form>
                      <div class="row">
                        <div class="col-md-6 col-xs-12">
                          <div class="form-group">
                            <label for="">Name</label>
                            <input
                              type="text"
                              name="username"
                              class="form-control "
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                          <div class="form-group">
                            <label for="">Email</label>
                            <input
                              type="email"
                              name="password"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                          <div class="form-group">
                            <label for="">Your Rating</label>
                            <div class="star-Rating-input star-rating">
                              <span class="fa fa-star" data-rating="1"></span>
                              <span class="fa fa-star" data-rating="2"></span>
                              <span class="fa fa-star" data-rating="3"></span>
                              <span class="fa fa-star" data-rating="4"></span>
                              <span class="fa fa-star-o" data-rating="5"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                          <div class="form-group">
                            <label for="">Write Feedback</label>
                            <textarea
                              class="form-control"
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
                        class="btn btn-primary btn-full-width"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script type="text/javascript" src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.dataTables.min.js"></script>
          <script src="js/custom.js"></script>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
