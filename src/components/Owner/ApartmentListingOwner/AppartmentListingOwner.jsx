import React, { useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import { MDBDataTableV5 } from "mdbreact";

import Header from "../../Reusable/header";
import Footer from "../../Reusable/Footer";

// fix the padding below header
const AppartmentListingOwner = () => {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Appartment Name	",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Appartment Name",
        },
      },
      {
        label: "Available At	",
        field: "availabaility_time",
        sort: "asc",
        width: 150,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 150,
      },
      {
        label: "Avalable",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rent Fee",
        field: "rent_fee",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rent Frequency",
        field: "rent_frequency",
        sort: "asc",
        width: 150,
      },
      {
        label: "Furnished",
        field: "is_furnished",
        sort: "asc",
        width: 150,
      },
      {
        label: "Feadturd",
        field: "is_featured",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [],
  });
  useEffect(() => {
    axios
      .get(`http://18.223.32.178:3000/user/getapartmentlist`)
      .then((response) => {
        const list = response.data.data;
        console.log("LIST", list);
        const onk = {
          columns: datatable.columns,
          rows: [],
        };
        list.map((val, index) => {
          const date = new Date(val.availabaility_time);
          const obj = {
            name: val.apartment_name,
            availabaility_time:
              date.getFullYear() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getDate() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds(),
            location: val.adress1 + ", " + val.address2,
            status: val.is_available ? "Yes" : "No",
            rent_frequency: val.rent_frequency,
            rent_fee: val.rent_fee,
            is_furnished: val.is_furnished ? "Yes" : "No",
            is_featured: val.is_featured ? "Yes" : "No",
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
                      <button>Appartment Occupance</button>
                    </li>
                    <li>
                      <button
                        key={val.id}
                        onClick={() => gotoCalendar(val.id)}
                        style={{ marginTop: "10px" }}
                      >
                        Booking Calendar
                      </button>
                    </li>
                    <li>
                      <button style={{ marginTop: "10px" }}>
                        Appartment Inventory
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ),
          };
          onk.rows.push(obj);
        });

        setDatatable(onk);
      });
  }, datatable.columns);

  const history = useHistory();

  function gotoCalendar(id) {
    sessionStorage.setItem("idForCalendar", id);
    history.push("/calendar");
  }
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
          <div id="section-body" className="dashboard-main">
            <section className=" whitebg">
              <div className="">
                <div className="dashboard-wrapper">
                  <div className="left-sidebar">
                    <div className="logo-wrapper-dashboard">
                      <a className="guestco_logo" href="/">
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="sidebar-menu-dashboard">
                      <ul>
                        <li>
                          <a href="/">
                            <i className="fa fa-cog"></i>Apparment Listing
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-cog"></i>Book Appartment
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-cog"></i>History Maintance{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-cog"></i>Billing Summary
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-maincontent">
                    <div className="breadcrumbs-wrapper">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="page-title">
                            <div className="block-top-title">
                              <ol className="breadcrumb">
                                <li>
                                  <a href="/">
                                    <span>Home</span>
                                  </a>
                                </li>
                                <li className="active">Appartment Listing</li>
                              </ol>
                              <h1 className="listing-title">
                                Appartment Listing Listingboard
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-body-wrapper">
                      <div className="row">
                        <div className="col-md-12 col-lg-12">
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
                                data={datatable}
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
              <div className="container-fluid" style={{ display: "none" }}>
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
                        <table
                          className="datatable-class table table-striped"
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
                    <div
                      className="services-wrapper"
                      style={{ display: "none" }}
                    >
                      <ul>
                        <li>
                          <div className="inner-box">
                            <i className="fa fa-building-o"></i>
                            <h3>Building Guidelines</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="inner-box">
                            <i className="fa fa-map-marker"></i>
                            <h3>Request Directions</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="inner-box">
                            <i className="fa fa-usd"></i>
                            <h3>Reward Loyalty Points</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="inner-box">
                            <i className="fa fa-file-text-o"></i>
                            <h3>Provide Feedback</h3>
                            <a href="#" clas>
                              Learn More
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="inner-box">
                            <i className="fa fa-cog"></i>
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
            className="modal fade common-modal custom-modal-login"
            id="buildingguidelines-popup"
            tabindex="-1"
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
            tabindex="-1"
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
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
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
            tabindex="-1"
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
                          cellspacing="0"
                          cellpadding="0"
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
            tabindex="-1"
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
                            <label for="">Name</label>
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
                            <label for="">Email</label>
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
                            <label for="">Your Rating</label>
                            <div className="star-Rating-input star-rating">
                              <span
                                className="fa fa-star"
                                data-rating="1"
                              ></span>
                              <span
                                className="fa fa-star"
                                data-rating="2"
                              ></span>
                              <span
                                className="fa fa-star"
                                data-rating="3"
                              ></span>
                              <span
                                className="fa fa-star"
                                data-rating="4"
                              ></span>
                              <span
                                className="fa fa-star-o"
                                data-rating="5"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                          <div className="form-group">
                            <label for="">Write Feedback</label>
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
export default AppartmentListingOwner;
