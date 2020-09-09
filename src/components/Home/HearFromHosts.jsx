import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import TestamonyCard from "./TestamonyCard";

const HearFromHosts = () => {
  const testamonies = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.",
      imgLink:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affan",
      desegnation: "guestco host",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.",
      imgLink:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Adil",
      desegnation: "guestco admin",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.",
      imgLink:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Talha",
      desegnation: "guestco user",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.",
      imgLink:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Usman",
      desegnation: "guestco admin",
    },
  ];
  return (
    <div className="whitebg">
      <div className="container">
        <div style={{ clear: "both", width: "100%", height: "50px" }}></div>
        <div className="module-title  text-center ">
          <h2>Hear From Our Hosts</h2>
          <p className="sub-heading">
            The biggest reward is to satisfy our clients and share their
            experience with us
          </p>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>

        <div className=" "></div>

        <div className="module-wrap testimonials-module">
          <div className="featured-wrapper item-grid-view">
            <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
              {testamonies.map((val, ind) => {
                return (
                  <TestamonyCard
                    name={val.name}
                    imgLink={val.imgLink}
                    desegnation={val.desegnation}
                    description={val.description}
                  />
                );
              })}
            </OwlCarousel>
          </div>
        </div>

        <div style={{ clear: "both", width: "100%", height: "50px" }}></div>
      </div>
    </div>
  );
};
export default HearFromHosts;
