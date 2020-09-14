import React from "react";

import imgeight from "../../images/person.jpg";
import propertyimage from "../../images/listing-image-2.jpg";
import propertyimage1 from "../../images/listing-image-1.jpg";
import propertyimage3 from "../../images/listing-image-3.jpg";
import propertyimage4 from "../../images/listing-image-4.jpg";

import { Link } from "react-router-dom";

import AppartmentCard from "./AppartmentCard";

const OurFeaturedHomes = () => {
  // featured homes data
  const featuredHomes = [
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
    },
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 4,
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "Dubai",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
    },
  ];
  return (
    <div className="graybg">
      <div className="container">
        <div style={{ clear: "both", width: "100%", height: "50px" }}></div>
        <div className="guestco-module module-title section-title-module text-left ">
          <h2>Our Featured Homes</h2>
          <p className="sub-heading">Hand-picked selection of quality places</p>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>
        <div className="">
          <div className="featured-wrapper item-grid-view">
            <div className="row">
              {featuredHomes.map((val, ind) => {
                return (
                  <AppartmentCard
                    featured={val.featured}
                    imageUrl={val.imageUrl}
                    price={val.price}
                    adminImageUrl={val.adminImageUrl}
                    name={val.name}
                    address={val.address}
                    noRooms={val.noRooms}
                    noBaths={val.noBaths}
                    noGuests={val.noGuests}
                    type={val.type}
                    stars={val.stars}
                  />
                );
              })}
            </div>
            <div className=" loadmore text-center">
              <Link to="listing" className="btn btn-primary btn-long">
                Learn More{" "}
              </Link>
            </div>
          </div>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>
      </div>
    </div>
  );
};
export default OurFeaturedHomes;
