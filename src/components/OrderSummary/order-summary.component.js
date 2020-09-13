import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import orderSummaryTable from "./getTableData";

import "@fortawesome/fontawesome-free/css/all.min.css";

import SearchBar from "../Reusable/SearchBar";
import Footer from "../Reusable/Footer";
import QuickLinks from "../Reusable/QuickLinks";
import Header from "../Reusable/header";

export default function Ordersumary() {
  const [orderNo, setOrderNo] = React.useState(12345);
  const [orderDate, setOrderDate] = React.useState("9/9/2020");
  const [userName, setUserName] = React.useState("Superlab");
  const [userEmail, setUserEmail] = React.useState("email@superlab.com");
  const [paymentMethod, setPaymentMethod] = React.useState("Debit Card");
  const [orderDescription, setorderDescription] = React.useState(
    "Nibh pregnant microwave or outdoor author of bananas. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec adipiscing elit nibh sagittis sem"
  );
  const [totalAmount, setTotalAmount] = React.useState("45000");
  const datatable = orderSummaryTable();
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
                            <h3>Payment Mode:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p>{paymentMethod}</p>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-12 col-md-6">
                            <h3>Description:</h3>
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="lineheight15">{orderDescription}</p>
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

      <Footer />
    </div>
  );
}
