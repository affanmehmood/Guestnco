import React from "react";

import AppartmentCard from "./AppartmentCard";

const AppartmentList = () => {
  // Appartments data
  const appartmentList = [
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 2,
      hostName: "Adnan Javed",
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
      hostName: "Adnan Javed",
    },
    {
      featured: true,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
      hostName: "Adnan Javed",
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 1,
      hostName: "Adnan Javed",
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 4,
      hostName: "Adnan Javed",
    },
    {
      featured: false,
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      price: "65",
      adminImageUrl:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
      name: "Affordable Urban Room",
      address: "386 Pete pascale Pl, NY",
      noRooms: 1,
      noBaths: 1,
      noGuests: 2,
      type: "Appartment",
      stars: 3,
      hostName: "Adnan Javed",
    },
  ];
  return (
    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        rel="stylesheet"
      />
      <div class="sort-wrap clearfix">
        <div class="pull-left">
          <div id="listings_found" class="number-of-listings">
            39 Rentals{" "}
          </div>
        </div>
        <div class="pull-right">
          <ul class="list-inline">
            <li>
              <strong>Sort By:</strong>
            </li>
            <li>
              <select
                id="sort_listings"
                class="selectpicker bs-select-hidden"
                title="Default Order"
                data-live-search-style="begins"
                data-live-search="false"
              >
                <option value="">Default Order</option>
                <option value="a_price">Price (Low to High)</option>
                <option value="d_price">Price (High to Low)</option>
                <option value="d_rating">Rating</option>
                <option selected value="featured_top">
                  Featured First
                </option>
                <option value="a_date">Date Old to New</option>
                <option value="d_date">Date New to Old</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div id="" class="listing-wrap item-list-view">
        <div class="row">
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
                hostName={val.hostName}
              />
            );
          })}
        </div>

        <div class=" loadmore text-center">
          <a href="listingpage.html" class="btn btn-primary btn-long">
            Learn More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default AppartmentList;
