import React from "react";

import FeaturedItemCard from "./FeaturedItemCard";

const Featured = () => {
  const featuredList = [
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "650",
      name: "Affordable Urban Room",
      noRooms: 4,
      noBaths: 3,
      noGuests: 4,
      stars: 5,
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      name: "Affordable Urban Room",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      stars: 2,
    },
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      name: "Affordable Urban Room",
      noRooms: 3,
      noBaths: 1,
      noGuests: 5,
      stars: 3,
    },
  ];
  return (
    <div id="" class="widget widget-list-properties widget-latest-properties">
      <div class="widget-top">
        <h3 class="widget-title">Featured</h3>
      </div>
      <div class="widget-body">
        {featuredList.map((val, ind) => {
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
