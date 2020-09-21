import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import Header from "../../../Reusable/header";
import Footer from "../../../Reusable/Footer";
import SearchBar from "../../../Reusable/SearchBar";
import QuickLinks from "../../../Reusable/QuickLinks";

export default function Orderlisting() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Order #",
        field: "orderno",
        width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Request #",
        },
      },
      {
        label: "Appartment Name",
        field: "apt_name",
        sort: "asc",
        width: 100,
      },

      {
        label: "User Name",
        field: "user_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Check-in Date",
        field: "checkin",
        sort: "asc",
        width: 100,
      },
      {
        label: "check-out Date",
        field: "checkout",
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
    rows: [],
  });
  useEffect(() => {
    axios.get("http://18.223.32.178:3000/admin/bookings").then((response) => {
      const list = response.data.data;
      console.log("LIST", list);
      const onk = {
        columns: datatable.columns,
        rows: [],
      };
      list.map((val, index) => {
        const datein = new Date(val.checkin_date);
        const dateout = new Date(val.checkout_date);
        const obj = {
          orderno: val.id,
          apt_name: val.apartment_name,
          user_name: val.first_name + " " + val.last_name,
          checkin:
            datein.getFullYear() +
            "/" +
            (datein.getMonth() + 1) +
            "/" +
            datein.getDate() +
            " " +
            datein.getHours() +
            ":" +
            datein.getMinutes() +
            ":" +
            datein.getSeconds(),
          checkout:
            dateout.getFullYear() +
            "/" +
            (dateout.getMonth() + 1) +
            "/" +
            dateout.getDate() +
            " " +
            dateout.getHours() +
            ":" +
            dateout.getMinutes() +
            ":" +
            dateout.getSeconds(),

          amount: "Unknown",

          action: (
            <div>
              <button
                onClick={() => editEntry(val.id)}
                href="#"
                className="btn-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEntry(val.id)}
                href="#"
                className="btn-sm"
                style={{ marginTop: "5px" }}
              >
                Delete
              </button>
            </div>
          ),
        };
        onk.rows.push(obj);
      });

      setDatatable(onk);
    });
  }, datatable.columns);
  function deleteEntry(id) {
    console.log("DELETED ", id);
  }
  function editEntry(id) {
    console.log("EDITED ", id);
  }
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
                          <a href="/">
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
                <QuickLinks />
                <div className="col-md-9">
                  <div className="listing-table-wrapper">
                    <div className="common-table">
                      <MDBDataTableV5
                        key={datatable.rows}
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
