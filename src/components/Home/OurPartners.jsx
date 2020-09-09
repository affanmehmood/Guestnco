import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import PartnerCard from "./PartnerCard";

const HearFromHosts = () => {
  const partners = [
    {
      imgLink:
        "https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
    },
    {
      imgLink:
        "https://thecyberpost.com/wp-content/uploads/2020/06/fake-spacex-youtube-channels-scam-150000-bitcoin.jpg",
    },
    {
      imgLink:
        "https://www.designyourway.net/blog/wp-content/uploads/2019/09/amazon-logo.jpg",
    },
    {
      imgLink:
        "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/02/Netflix-Originals-logo.jpg",
    },
  ];

  return (
    <div className="graybg">
      <div className="container">
        <div style={{ clear: "both", width: "100%", height: "50px" }}></div>
        <div className="guestco-module module-title section-title-module text-left ">
          <h2>Our Partners</h2>
          <p className="sub-heading">
            We only work with the best companies around the globe
          </p>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>
        <div className="">
          <div className="featured-wrapper item-grid-view">
            <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
              {partners.map((val, ind) => {
                return <PartnerCard imgLink={val.imgLink} />;
              })}
            </OwlCarousel>
          </div>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>
      </div>
    </div>
  );
};
export default HearFromHosts;
