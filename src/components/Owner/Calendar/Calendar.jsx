import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import Header from "../../Reusable/header";
import Footer from "../../Reusable/Footer";

const Calendar = () => {
  const [aptId, setAptId] = useState(sessionStorage.getItem("idForCalendar"));
  const [aptName, setAptName] = useState(
    sessionStorage.getItem("nameForCalendar")
  );
  const [events, setEvents] = useState([{}, {}]);
  useEffect(() => {
    axios.get("http://18.223.32.178:3000/admin/bookings").then((response) => {
      console.log("Calendar", aptId);
      const list = [];
      response.data.data.forEach((item) => {
        if (item.apartment_id == aptId) {
          list.push({ title: "Check In", date: new Date(item.checkin_date) });
          list.push({ title: "Check Out", date: new Date(item.checkout_date) });
        }
      });
      setEvents(list);
    });
  }, aptId);

  return (
    <div style={{ background: "white" }}>
      <div className="inner-page">
        <Header />
      </div>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <h1>Events Calendar</h1>
      </div>
      <div className="text-center" style={{ marginTop: "20px" }}>
        <h1>{aptName != null ? aptName : "Unknown"}</h1>
      </div>
      <div
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        style={{ marginTop: "15px", marginBottom: "30px" }}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
