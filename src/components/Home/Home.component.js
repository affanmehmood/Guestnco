import React from "react";

import OurFeaturedHomes from "./OurFeaturedHomes";
import FindPlace from "./FindPlace";
import PaymentInfo from "./PaymentInfo";
import HearFromHosts from "./HearFromHosts";
import OurPartners from "./OurPartners";
import Footer from "../Reusable/Footer";
import Search from "./Search";

import Header from "../Reusable/header";
const Home = () => {
  return (
    <div>
      <div className="home">
        <Header />
      </div>
      <div id="section-body">
        <Search />
        <section className="main-content-area">
          <OurFeaturedHomes />
          <FindPlace />
          <PaymentInfo />
          <HearFromHosts />
          <OurPartners />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
