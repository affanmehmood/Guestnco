import React, { useState, useEffect } from "react";
import axios from "axios";

import FeaturedItemCard from "./FeaturedItemCard";

const Featured = () => {
  // Appartments data
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
          if (d[i].images[0] != null && d[i].is_featured) {
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
        }

        setAppartmentList(list);
      })
      .then(() => {
        console.log("APP NAME", appartmentList.length);
      });
  }, [appartmentList.length]);

  return (
    <div id="" class="widget widget-list-properties widget-latest-properties">
      <div class="widget-top">
        <h3 class="widget-title">Featured</h3>
      </div>
      <div class="widget-body">
        {appartmentList.map((val, ind) => {
          return (
            <FeaturedItemCard
              featured={val.featured}
              imageUrl={val.imageUrl}
              price={val.price}
              name={val.name}
              noRooms={val.noRooms}
              noBaths={val.noBaths}
              noGuests={val.noGuests}
              stars={val.stars}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Featured;
