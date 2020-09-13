import React from "react";
import { MDBDataTableV5 } from "mdbreact";

import Header from "./Reusable/header";
import Footer from "./Reusable/Footer";
import SearchBar from "./Reusable/SearchBar";

export default function Orderlisting() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Order #",
        field: "orderno",
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
        orderno: "465655222",
        items: "5 items",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2020/04/25",
        amount: "$30",
        type: "Grocery",
      },
      {
        orderno: "46532",
        items: "8 items",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2020/04/25",
        amount: "$420",
        type: "Grocery",
      },
      {
        orderno: "4665666",
        items: "15 items",
        action: (
          <div>
            <a>Edit</a> | <a>Delete</a>
          </div>
        ),
        date: "2018/04/25",
        amount: "$820",
        type: "Grocery",
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

        <Footer />
      </div>
    </div>
  );
}
