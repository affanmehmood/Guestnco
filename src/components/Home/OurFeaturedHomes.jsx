import React, { useState, useEffect } from "react";
import axios from "axios";
import imgeight from "../../images/person.jpg";
import propertyimage from "../../images/listing-image-2.jpg";
import propertyimage1 from "../../images/listing-image-1.jpg";
import propertyimage3 from "../../images/listing-image-3.jpg";
import propertyimage4 from "../../images/listing-image-4.jpg";

import { Link } from "react-router-dom";

import AppartmentCard from "./AppartmentCard";

const OurFeaturedHomes = () => {
  const [appartmentList, setAppartmentList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://18.223.32.178:3000/user/getapartmentlist?search=&city=&checkin=&budget=`
      )

      .then((res) => {
        console.log("DATA", res.data.data);
        const d = res.data.data;

        console.log("D", d.length);
        var list = [];
        for (var i = 0; i < d.length; i++) {
          list.push({
            id: d[i].id,
            featured: d[i].is_featured,
            imageUrl: "http://18.223.32.178:3000/" + d[i].images[i],
            price: d[i].rent_fee,
            adminImageUrl:
              "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
            name: d[i].apartment_name,
            address: d[i].adress1 + " " + d[i].address2,
            noRooms: d[i].bedrooms,
            noBaths: d[i].bathrooms,
            noGuests: 2,
            type: d[i].apartment_type,
            stars: d[i],
            hostName: "Adnan Javed",
          });
        }

        setAppartmentList(list);
      })
      .then(() => {
        console.log("APP NAME", appartmentList.length);
      });
  }, [appartmentList.length]);

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
              {appartmentList.map((val, ind) => {
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
