import React from "react";

import OurFeaturedHomes from "./OurFeaturedHomes";
import FindPlace from "./FindPlace";
import PaymentInfo from "./PaymentInfo";
import HearFromHosts from "./HearFromHosts";
import OurPartners from "./OurPartners";
import Footer from "../Footer";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        rel="stylesheet"
      />
      <div id="section-body">
        <Search />
        <section className="main-content-area">
          <OurFeaturedHomes featuredHomes={this.featuredHomes} />
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
