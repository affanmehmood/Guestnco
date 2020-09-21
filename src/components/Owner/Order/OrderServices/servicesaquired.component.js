import React, { useEffect } from "react";
import axios from "axios";

import Header from "../../../Reusable/header";
import SearchBar from "../../../Reusable/SearchBar";
import QuickLinks from "../../../Reusable/QuickLinks";
import Footer from "../../../Reusable/Footer";

import { MDBDataTableV5 } from "mdbreact";

export default function Service(props) {
  const [datatable, setDatatable] = React.useState({
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
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });
  useEffect(() => {
    axios
      .get("http://18.223.32.178:3000/admin/bookingdetails/98")
      .then((response) => {
        const list = response.data.data;
        console.log("LIST", list);
        const onk = {
          columns: datatable.columns,
          rows: [],
        };
        list.map((val, index) => {
          const obj = {
            service_id: val.service_id,
            service_name: val.service_name,
            booking_id: val.booking_id,
            service_charges: val.service_charges,
            no_of_items: val.no_of_items != null ? val.no_of_items : "Unknown",
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
                  <QuickLinks />
                  <div className="col-md-9">
                    <h2>Sevices</h2>
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
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
