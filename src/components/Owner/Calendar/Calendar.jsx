import React, { useState, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import Header from "../../Reusable/header";
import Footer from "../../Reusable/Footer";

const Calendar = () => {
  const [aptId, setAptId] = useState(sessionStorage.getItem("idForCalendar"));

  return (
    <div style={{ background: "white" }}>
      <div className="inner-page">
        <Header />
      </div>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <h1>Calendar View For Apartment {aptId}</h1>
      </div>
      <div
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        style={{ marginTop: "15px", marginBottom: "30px" }}
      >
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
