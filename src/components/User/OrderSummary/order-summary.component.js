import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

import SearchBar from "../../Reusable/SearchBar";
import Footer from "../../Reusable/Footer";
import QuickLinks from "../../Reusable/QuickLinks";
import Header from "../../Reusable/header";

export default function Ordersumary() {
  const userProfile = JSON.parse(sessionStorage.getItem("userProfileDetails"));
  console.log("USER PROFILE", userProfile);

  const [apartmentName, setApartmentName] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [days, setDays] = useState("");
  const [rentFrequency, setRentFrequency] = useState("");

  const [orderNo, setOrderNo] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Service ID",
        field: "service_id",
        width: 50,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Request #",
        },
      },
      {
        label: "Service Name",
        field: "service_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Booking ID",
        field: "booking_id",
        sort: "asc",
        width: 50,
      },

      {
        label: "Service Charges",
        field: "service_charges",
        sort: "asc",
        width: 100,
      },
      {
        label: "No. of items",
        field: "no_of_items",
        sort: "asc",
        width: 100,
      },
      {
        label: "Booking Time",
        field: "book_time",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    const bookingId = sessionStorage.getItem("idForBookDetails");
    var id = "";
    if (userProfile) id = userProfile.id;
    axios
      .get("http://18.223.32.178:3000/user/bookings/" + id)
      .then((response) => {
        var data = []; // get this from bookingId

        response.data.data.forEach((element) => {
          // searching
          if (element.booking_id == bookingId) {
            data = element;
          }
        });

        const list = data.services;

        console.log("Data", response.data.data[0]);

        setUserName(userProfile.first_name + " " + userProfile.last_name);
        setUserEmail(userProfile.email);
        setPaymentMethod("Unknown");

        setApartmentName(response.data.data[0].apartment_name);

        var date = new Date(response.data.data[0].checkin_date);
        setCheckinDate(
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
            date.getSeconds()
        );

        date = new Date(response.data.data[0].checkout_date);
        setCheckoutDate(
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
            date.getSeconds()
        );

        setDays(response.data.data[0].days);
        setRentFrequency(response.data.data[0].rent_frequency);

        setOrderNo(response.data.data[0].booking_id);

        date = new Date(response.data.data[0].booking_time);
        setOrderDate(
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
            date.getSeconds()
        );

        setTotalAmount(
          parseInt(response.data.data[0].service_fee) +
            parseInt(response.data.data[0].rent_fee) +
            parseInt(response.data.data[0].cleaning_fee)
        );

        const onk = {
          columns: datatable.columns,
          rows: [],
        };
        list.map((val, index) => {
          const date = new Date(val.service_booking_time);
          const obj = {
            service_id: val.service_id,
            service_name: val.service_name,
            booking_id: val.booking_id,
            service_charges: val.service_charges, //not recieving right now
            no_of_items: val.no_of_items != null ? val.no_of_items : "Unknown",
            book_time:
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
          };
          onk.rows.push(obj);
        });

        setDatatable(onk);
      });
  }, datatable.columns);

  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
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
                        <a href="/">
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
                <QuickLinks />
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
                            <p>{orderNo}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Order Date:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{orderDate}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Name:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{userName}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Email:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{userEmail}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Apartment Name:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{apartmentName}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Checkin date:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{checkinDate}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Checkout Date:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{checkoutDate}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Total Days:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{days}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Rent Frequency:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{rentFrequency}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Payment Mode:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{paymentMethod}</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3 className="total-label">Total Amount:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="total-amount">{totalAmount}</p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <h2>Services Acquired</h2>
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

      <Footer />
    </div>
  );
}
