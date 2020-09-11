import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";

import AppartmentCard from "../../AppartmentListing/AppartmentCard";
import Footer from "../../Reusable/Footer";
import InstantBooking from "./InstantBooking";
import InPageNav from "./InPageNav";

import image1 from "../../gallery/image1.jpg";
import image2 from "../../gallery/2.jpg";
import image3 from "../../gallery/3.jpg";
import image4 from "../../gallery/4.jpg";
import image5 from "../../gallery/5.jpg";
import image6 from "../../gallery/6.jpg";
import image7 from "../../gallery/7.jpg";
import image8 from "../../gallery/8.jpg";
import image9 from "../../gallery/9.jpg";
import image10 from "../../gallery/10.jpg";
import image11 from "../../gallery/11.jpg";
import image12 from "../../gallery/12.jpg";
import image13 from "../../gallery/13.jpg";

export default function Details() {
  // The main object
  const [AppartmentDetails, setAppartmentDetails] = useState({
    name: "Modern Apartment With Pool",
    featured: true,
    address: "984 1st Avenue, New York, NY 10022",
    stars: 4,
    adminImage:
      "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
    appartmentImage: "https://wallpaperaccess.com/full/1142283.jpg",
    appartmentGallery: [
      "https://wallpaperaccess.com/full/1142283.jpg",
      "https://www.thespruce.com/thmb/nyUHOEdrQ586q53hT3i-Tnv0qJA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/scandinavian-style-living-and-dining-room-1172217300-84a8acf6b9bb4c8ea555216c8aa8b581.jpg",
      "https://i.ytimg.com/vi/ctYAOqDdqa8/maxresdefault.jpg",
    ],
    noRooms: 1,
    noBaths: 1,
    noGuests: 2,
    type: "Appartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est quam, volutpat et arcu eu, pharetra congue augue. Integer vel nibh eu eros interdum commodo. Vivamus finibus fringilla libero, id consectetur purus sollicitudin vel. Proin dapibus ante et pharetra luctus. Ut lacinia ante ut nunc pellentesque auctor. Proin laoreet erat sed ornare molestie. Fusce vehicula ut nulla facilisis vulputate. Quisque vel purus ac lectus tempus viverra. Maecenas at sem at erat pellentesque hendrerit nec in massa. Vestibulum nec lacinia dui, a congue ex. Vivamus ac ultri",
    id: 122,
    size: "1500",
    checkInTime: "10:00 AM",
    gallery: [
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
      "https://doisneaupavia.com/wp-content/uploads/2020/04/Decorating-Your-Apartment.jpg",
    ],
    prices: {
      nightly: "550",
      weekends: "580",
      weekly: "525",
      monthly: "1500",
      secuerityDeposit: "1000",
      allowAdditionalGuests: "Yes",
      additionalGuests: "525",
      cleaningFee: "1050",
      cityFee: "25",
      minDays: "1",
      maxDays: "60",
    },
    accomodation: [
      {
        roomName: "Master Room",
        kingSize: 1,
        queenSize: 0,
        noGuests: 2,
      },
      {
        roomName: "Bedroom 1",
        kingSize: 0,
        queenSize: 1,
        noGuests: 2,
      },
      {
        roomName: "Bedroom 1",
        kingSize: 0,
        queenSize: 1,
        noGuests: 2,
      },
      {
        roomName: "Bedroom 1",
        kingSize: 0,
        queenSize: 1,
        noGuests: 2,
      },
    ],
    features: {
      amenities: ["Gym", "TV Cable", "Laundry", "Wi-Fi"],
      facilities: ["Farmacy", "Reception", "Free Parking", "Security"],
    },
    map: {
      nearby: {
        artsEntertainment: [
          {
            name: "Sutton Place Frame Shop",
            distance: "0.04",
            stars: 4,
            noReviews: "4",
          },
          {
            name: "Time & Again Galleries",
            distance: "0.02",
            stars: 3,
            noReviews: "8",
          },
          {
            name: "A La Mode Shoppe",
            distance: "0.09",
            stars: 5,
            noReviews: "15",
          },
        ],
        food: [
          {
            name: "First Avenue Vintner",
            distance: "0.01",
            stars: 5,
            noReviews: "15",
          },
          {
            name: "Simchick Meats",
            distance: "0.09",
            stars: 2,
            noReviews: "3",
          },
          {
            name: "Marinara Pizza",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
        ],
        health: [
          {
            name: "Stefan Kantrowitz M.D. ",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
          {
            name: "George Vincent Lombardi, MD",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
          {
            name: "HealthSource Pharmacy",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
        ],
        nightlife: [
          {
            name: "The Greats Of Craft",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
          {
            name: "Parnell's Pub & Restaurant",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
          {
            name: "Yara",
            distance: "0.02",
            stars: 4,
            noReviews: "15",
          },
        ],
      },
    },
    termsRules: {
      smoking: "No",
      pets: "Yes",
      party: "Yes",
      children: "Yes",
      additionalInfo:
        "Vivamus finibus fringilla libero, id consectetur purus sollicitudin vel. Proin dapibus ante et pharetra luctus. Ut lacinia ante ut nunc pellentesque auctor.",
    },
    videoUrl: "https://www.youtube.com/embed/cuGfG0J1aIw?feature=oembed",
    hostInfo: {
      name: "Jerry Coleman",
      type: "Super Host",
      country: "United States",
      languages: ["English", "French", "German"],
      verified: true,
      stars: 4,
      hostImage:
        "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
    },
    reviews: [
      {
        userImage:
          "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
        userName: "Adil Cooper",
        stars: 3,
        date: "Oct 13 2016",
        time: "12:18 PM",
        text:
          "Sed pellentesque posuere tincidunt. In consectetur justo eu dolor blandit condimentum. Quisque congue nisi in mi aliquam, ac lacinia nulla posuere. Nam vitae neque nisl. Nulla finibus eros in dolor accumsan, nec hendrerit velit fermentum. Proin quis eros ac elit sodales ullamcorper sed ac nisl. Morbi dolor massa, lacinia ut arcu eu, feugiat posuere diam. Nunc tristique convallis dolor. Nullam quis ipsum vel nulla rutrum euismod. Nulla consequat ut odio non imperdiet. Suspendisse consectetur erat vitae pulvinar consequat.",
      },
      {
        userImage:
          "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
        userName: "Diana Cooper",
        stars: 3,
        date: "Oct 13 2016",
        time: "12:18 PM",
        text:
          "Sed pellentesque posuere tincidunt. In consectetur justo eu dolor blandit condimentum. Quisque congue nisi in mi aliquam, ac lacinia nulla posuere. Nam vitae neque nisl. Nulla finibus eros in dolor accumsan, nec hendrerit velit fermentum. Proin quis eros ac elit sodales ullamcorper sed ac nisl. Morbi dolor massa, lacinia ut arcu eu, feugiat posuere diam. Nunc tristique convallis dolor. Nullam quis ipsum vel nulla rutrum euismod. Nulla consequat ut odio non imperdiet. Suspendisse consectetur erat vitae pulvinar consequat.",
      },
    ],

    similarListings: [
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
        featured: true,
        imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
        price: "65",
        adminImageUrl:
          "https://www.pngitem.com/pimgs/m/130-1300380_female-user-image-icon-hd-png-download.png",
        name: "Beach House",
        address: "386 Pete pascale Pl, NY",
        noRooms: 3,
        noBaths: 2,
        noGuests: 4,
        type: "House",
        stars: 4,
        hostName: "Adnan Rasheed",
      },
    ],
    priceBreakfast: "25",
    priceLunch: "35",
    priceDinner: "40",
  });
  axios
    .get(`http://18.223.32.178:3000/user/singleaptdetails/1`)
    .then((res) => {
      console.log(res.data.data);
      const d = res.data.data;

      setAppartmentDetails((AppartmentDetails) => {
        AppartmentDetails.name = "Affan";
        return AppartmentDetails;
      });

      /*
        AppartmentDetails.address = d.address1 + " " + d.address2;
        AppartmentDetails.name = d.apartment_name;
        AppartmentDetails.type = d.apartment_type;
        AppartmentDetails.noRooms = d.bedrooms;
        AppartmentDetails.noBaths = d.bathrooms;
        AppartmentDetails.description = d.description;
        AppartmentDetails.featured = d.is_featured;
        AppartmentDetails.prices.nightly = d.rent_fee;
        AppartmentDetails.prices.cleaningFee = d.service_fee;
        AppartmentDetails.features.amenities = [];
        for (var i = 0; i < d.amenities.length; i++) {
          AppartmentDetails.features.amenities.push(d.amenities[i].name);
        }
        const url = "http://18.223.32.178:3000/";
        AppartmentDetails.gallery = [];
        AppartmentDetails.appartmentGallery = [];
        for (var i = 0; i < d.imagaes.length; i++) {
          AppartmentDetails.gallery.push(url + d.imagaes[i]);

          AppartmentDetails.appartmentGallery.push(url + d.imagaes[i]);
        }*/
    })
    .then(() => {
      console.log("APP NAME", AppartmentDetails.name);
    });
  // Dummy data starts
  /*
  AppartmentDetails.appartmentGallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
  AppartmentDetails.gallery = AppartmentDetails.appartmentGallery;
  AppartmentDetails.name = "Studio marina";
  AppartmentDetails.type = "GUESTCO HOLIDAY HOME";
  AppartmentDetails.description =
    "studio marina Guests&Co  is proud to offe ryou, in Dubi Marina , this cosy studio of 360 sqft ,newly design it will offer you a coconing atmosphere in the middle of this very busy and touristic area. The building is close to the metro station , who will help you to have accees to all the major dubai attraction and with a simple walk you can will discovered the amazing marina walk wih all this restaurant and activities.  This apartement offer you a pleasant queen size bed , with a Tv 43 inch, the kitchen with all appliances. Be part of Giests&co Community and let yourself try our property. Guests&co Familly";
  AppartmentDetails.address = "UAE";
*/

  function getGalleryImages() {
    const items = [];
    for (var i = 0; i < AppartmentDetails.appartmentGallery.length; i++) {
      items.push(
        <img
          src={AppartmentDetails.appartmentGallery[i]}
          className="sliderimg"
        />
      );
    }
    return items;
  }
  function getGalleryImages2() {
    const items = [];
    for (var i = 0; i < AppartmentDetails.gallery.length; i++) {
      items.push(
        <a href=".#" class="swipebox">
          <img src={AppartmentDetails.gallery[i]} />
        </a>
      );
    }
    return items;
  }
  function checkFeatured(featured) {
    if (featured == true) {
      return (
        <span
          class="label label-success label-featured"
          style={{
            marginLeft: "5px",
          }}
        >
          Featured
        </span>
      );
    }
  }

  function forStar(stars) {
    const items = [];
    for (var i = 0; i < stars; i++) {
      items.push(<li className="fa fa-star"></li>);
    }
    for (var i = 0; i < 5 - stars; i++) {
      items.push(<li className="fa fa-star-o"></li>);
    }
    return items;
  }

  function qualityCheck(stars) {
    switch (stars) {
      case 0:
        return "Unrated";
      case 1:
        return "Poor";
      case 2:
        return "Below Average";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellet";
    }
  }
  function tickCross(check) {
    switch (check) {
      case "Yes": {
        return <i class="fa fa-check" aria-hidden="true"></i>;
      }
      case "No": {
        return <i class="fa fa-times" aria-hidden="true"></i>;
      }
    }
  }
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        rel="stylesheet"
      />
      <div>
        <title>Detail Page</title>
      </div>

      <body style={{ paddingTop: "130px" }}>
        <div id="section-body">
          <section class="detail-property-page-header-area detail-property-page-header-area-v4">
            <div class="top-gallery-section top-gallery-variable-width-section">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                {getGalleryImages()}
              </AliceCarousel>
            </div>
          </section>
          <section class="main-content-area whitebg">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                  <div class="content-area">
                    <div class="title-section">
                      <div class="block block-top-title">
                        <div class="block-body">
                          <ol class="breadcrumb">
                            <li>
                              <a href="../../index.html">
                                <span>Home</span>
                              </a>
                            </li>
                            <li>
                              <a href="../../type/apartment/index.html">
                                <span>Apartment</span>
                              </a>
                            </li>
                            <li class="active">{AppartmentDetails.name}</li>
                          </ol>
                          <h1 class="listing-title">
                            {AppartmentDetails.name}
                            {checkFeatured(AppartmentDetails.featured)}
                          </h1>
                          <address>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                            {AppartmentDetails.address}
                          </address>
                          <div class="host-avatar-wrap avatar">
                            <span class="super-host-icon">
                              <i class="fa fa-bookmark"></i>
                            </span>
                            <img
                              width="70"
                              height="70"
                              src={AppartmentDetails.adminImage}
                              class="img-circle media-object"
                            />
                          </div>
                          <div class="list-inline rating hidden-xs">
                            {forStar(AppartmentDetails.stars)}
                            <span class="star-text-right">
                              {qualityCheck(AppartmentDetails.stars)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="about-section" class="about-section">
                      <div class="block-bordered">
                        <div class="block-col block-col-25">
                          <div class="block-icon">
                            <i class="fa fa-home"></i>
                          </div>
                          <div>Type</div>
                          <div>
                            <strong> {AppartmentDetails.type} </strong>
                          </div>
                        </div>
                        <div class="block-col block-col-25">
                          <div class="block-icon">
                            <i class="fa fa-user"></i>
                          </div>
                          <div>Accomodation</div>
                          <div>
                            <strong>{AppartmentDetails.noGuests} Guests</strong>
                          </div>
                        </div>
                        <div class="block-col block-col-25">
                          <div class="block-icon">
                            <i class="fa fa-bed"></i>
                          </div>
                          <div>Bedrooms</div>
                          <div>
                            <strong>
                              {AppartmentDetails.noRooms} Bedrooms /{" "}
                              {AppartmentDetails.noRooms} Beds
                            </strong>
                          </div>
                        </div>
                        <div class="block-col block-col-25">
                          <div class="block-icon">
                            <i class="fa fa-shower"></i>
                          </div>
                          <div>Bathrooms</div>
                          <div>
                            <strong>{AppartmentDetails.noBaths} Full </strong>
                          </div>
                        </div>
                      </div>
                      <div class="block">
                        <div class="block-body">
                          <h2>About this listing</h2>
                          <p>{AppartmentDetails.description}</p>
                        </div>
                      </div>
                    </div>
                    <div id="details-section" class="details-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Details</h3>
                            </div>
                            <div class="block-right">
                              <ul class="detail-list detail-list-2-cols">
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  ID: <strong>{AppartmentDetails.id}</strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Guests:{" "}
                                  <strong>{AppartmentDetails.noGuests}</strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Bedrooms:{" "}
                                  <strong>{AppartmentDetails.noRooms}</strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Beds:{" "}
                                  <strong>{AppartmentDetails.noRooms}</strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Bathrooms:{" "}
                                  <strong>{AppartmentDetails.noBaths}</strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Check-in After:{" "}
                                  <strong>
                                    {AppartmentDetails.checkInTime}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Type:{" "}
                                  <strong>{AppartmentDetails.type} </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Size:{" "}
                                  <strong>{AppartmentDetails.size} SqFt</strong>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="gallery-section" class="gallery-section">
                      <div class="block">
                        <div class="featured-image-wrap featured-slide-gallery-wrap clearfix">
                          {getGalleryImages2()}
                        </div>
                      </div>
                    </div>
                    <div id="price-section" class="price-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Prices</h3>
                            </div>
                            <div class="block-right">
                              <ul class="detail-list detail-list-2-cols">
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Nightly:
                                  <strong>
                                    ${AppartmentDetails.prices.nightly}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Weekends (Sat &amp; Sun):
                                  <strong>
                                    ${AppartmentDetails.prices.weekends}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Weekly (7d+):
                                  <strong>
                                    ${AppartmentDetails.prices.weekly}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Monthly (30d+):
                                  <strong>
                                    ${AppartmentDetails.prices.monthly}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Security deposit:
                                  <strong>
                                    ${AppartmentDetails.prices.secuerityDeposit}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Additional guests:
                                  <strong>
                                    ${AppartmentDetails.prices.additionalGuests}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Allow additional guests:
                                  <strong>
                                    {
                                      AppartmentDetails.prices
                                        .allowAdditionalGuests
                                    }
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Cleaning fee:
                                  <strong>
                                    ${AppartmentDetails.prices.cleaningFee}
                                  </strong>{" "}
                                  Per Stay
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  City fee:
                                  <strong>
                                    ${AppartmentDetails.prices.cityFee}
                                  </strong>{" "}
                                  Per Stay
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Minimum number of days:
                                  <strong>
                                    {AppartmentDetails.prices.minDays}
                                  </strong>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                  Maximum number of days:
                                  <strong>
                                    {AppartmentDetails.prices.maxDays}
                                  </strong>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="accomodation-section" class="accomodation-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Accomodation</h3>
                            </div>
                            <div class="block-right">
                              {AppartmentDetails.accomodation.map(
                                (val, inx) => {
                                  return (
                                    <div class="block-col block-col-33 block-accomodation">
                                      <div class="block-icon">
                                        <i class="fa fa-bed"></i>
                                      </div>
                                      <dl>
                                        <dt>{val.roomName}</dt>
                                        <dd>{val.kingSize} King Size</dd>
                                        <dd>{val.queenSize} Queen Size</dd>
                                        <dd>{val.noGuests} Guests</dd>
                                      </dl>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="features-section" class="features-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Features</h3>
                            </div>
                            <div class="block-right">
                              <p>
                                <strong>Amenities</strong>
                              </p>
                              <ul class="detail-list detail-list-2-cols">
                                {AppartmentDetails.features.amenities.map(
                                  (val, index) => {
                                    return (
                                      <li>
                                        <i
                                          class="fa fa-angle-right"
                                          aria-hidden="true"
                                        ></i>
                                        {val}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                              <p>
                                <strong>Facilities</strong>
                              </p>
                              <ul class="detail-list detail-list-2-cols">
                                {AppartmentDetails.features.facilities.map(
                                  (val, ind) => {
                                    return (
                                      <li>
                                        <i
                                          class="fa fa-angle-right"
                                          aria-hidden="true"
                                        ></i>
                                        {val}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="map-section" class="map-section">
                      <div class="block">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1725417855323!2d72.98491051552146!3d33.6526908807165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df960960d4478f%3A0x328fcbb8d92c07f8!2sSrinagar%20Hwy%2C%20H-12%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1597694262758!5m2!1sen!2s"
                          width="100%"
                          height="450"
                          frameborder="0"
                          style={{ border: 0 }}
                          allowfullscreen=""
                          aria-hidden="false"
                          tabindex="0"
                        ></iframe>
                      </div>
                    </div>
                    <div id="nearby-section" class="nearby-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Nearby</h3>
                            </div>
                            <div class="block-right">
                              <div class="what-nearby">
                                <dl>
                                  <dt>
                                    <i class="fa fa-picture-o"></i> Arts &amp;
                                    Entertainment
                                  </dt>
                                  {AppartmentDetails.map.nearby.artsEntertainment.map(
                                    (val, ind) => {
                                      return (
                                        <dd>
                                          <div class="what-nearby-left">
                                            {val.name}
                                            <span class="time-review">
                                              {" "}
                                              ({val.distance} mi){" "}
                                            </span>
                                          </div>
                                          <div class="what-nearby-right">
                                            <div class="rating-wrap">
                                              <div class="rating-container">
                                                <div class="rating">
                                                  {forStar(val.stars)}
                                                  <span class="label label-success">
                                                    {qualityCheck(val.stars)}
                                                  </span>
                                                  <span class="time-review">
                                                    {val.noReviews} reviews
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </dd>
                                      );
                                    }
                                  )}
                                </dl>
                                <dl>
                                  <dt>
                                    <i class="fa fa-shopping-basket"></i> Food
                                  </dt>
                                  {AppartmentDetails.map.nearby.food.map(
                                    (val, ind) => {
                                      return (
                                        <dd>
                                          <div class="what-nearby-left">
                                            {val.name}
                                            <span class="time-review">
                                              {" "}
                                              ({val.distance} mi){" "}
                                            </span>
                                          </div>
                                          <div class="what-nearby-right">
                                            <div class="rating-wrap">
                                              <div class="rating-container">
                                                <div class="rating">
                                                  {forStar(val.stars)}
                                                  <span class="label label-success">
                                                    {qualityCheck(val.stars)}
                                                  </span>
                                                  <span class="time-review">
                                                    {val.noReviews} reviews
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </dd>
                                      );
                                    }
                                  )}
                                </dl>
                                <dl>
                                  <dt>
                                    <i class="fa fa-medkit"></i> Health &amp;
                                    Medical
                                  </dt>
                                  {AppartmentDetails.map.nearby.health.map(
                                    (val, ind) => {
                                      return (
                                        <dd>
                                          <div class="what-nearby-left">
                                            {val.name}
                                            <span class="time-review">
                                              {" "}
                                              ({val.distance} mi){" "}
                                            </span>
                                          </div>
                                          <div class="what-nearby-right">
                                            <div class="rating-wrap">
                                              <div class="rating-container">
                                                <div class="rating">
                                                  {forStar(val.stars)}
                                                  <span class="label label-success">
                                                    {qualityCheck(val.stars)}
                                                  </span>
                                                  <span class="time-review">
                                                    1 reviews
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </dd>
                                      );
                                    }
                                  )}
                                </dl>
                                <dl>
                                  <dt>
                                    <i class="fa fa-glass"></i> Nightlife
                                  </dt>
                                  {AppartmentDetails.map.nearby.nightlife.map(
                                    (val, ind) => {
                                      return (
                                        <dd>
                                          <div class="what-nearby-left">
                                            {val.name}
                                            <span class="time-review">
                                              {" "}
                                              ({val.distance} mi){" "}
                                            </span>
                                          </div>
                                          <div class="what-nearby-right">
                                            <div class="rating-wrap">
                                              <div class="rating-container">
                                                <div class="rating">
                                                  {forStar(val.stars)}
                                                  <span class="label label-success">
                                                    {qualityCheck(val.stars)}
                                                  </span>
                                                  <span class="time-review">
                                                    {val.noReviews} reviews
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </dd>
                                      );
                                    }
                                  )}
                                </dl>
                              </div>
                              <div class="nearby-logo">
                                Powered by
                                <i class="fa fa-yelp" aria-hidden="true"></i>
                                <strong>Yelp</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="rules-section" class="rules-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Terms &amp; rules</h3>
                            </div>
                            <div class="block-right">
                              <ul class="rules_list detail-list">
                                <li>
                                  {tickCross(
                                    AppartmentDetails.termsRules.smoking
                                  )}
                                  Smoking allowed:
                                  <strong>
                                    {AppartmentDetails.termsRules.smoking}
                                  </strong>
                                </li>
                                <li>
                                  {tickCross(AppartmentDetails.termsRules.pets)}
                                  Pets allowed:
                                  <strong>
                                    {AppartmentDetails.termsRules.pets}
                                  </strong>
                                </li>
                                <li>
                                  {tickCross(
                                    AppartmentDetails.termsRules.party
                                  )}
                                  Party allowed:
                                  <strong>
                                    {AppartmentDetails.termsRules.party}
                                  </strong>
                                </li>
                                <li>
                                  {tickCross(
                                    AppartmentDetails.termsRules.children
                                  )}
                                  Children allowed:
                                  <strong>
                                    {AppartmentDetails.termsRules.children}
                                  </strong>
                                </li>
                              </ul>
                              <ul class="detail-list">
                                <li>
                                  <strong>Additional rules information</strong>
                                </li>
                                <li>
                                  {AppartmentDetails.termsRules.additionalInfo}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="video-section" class="video-section">
                      <div class="block">
                        <div class="block-section">
                          <div class="block-body">
                            <div class="block-left">
                              <h3 class="title">Video</h3>
                            </div>
                            <div class="block-right">
                              <div class="block-video">
                                <iframe
                                  title="Things to Check Before Moving Into an Apartment : Real Estate Tips"
                                  width="1170"
                                  height="658"
                                  src={AppartmentDetails.videoUrl}
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="host-section" class="host-section">
                      <div class="block">
                        <div class="block-head">
                          <div class="media">
                            <div class="media-left">
                              <img
                                width="70"
                                height="70"
                                src={AppartmentDetails.hostInfo.hostImage}
                                class="img-circle media-object"
                              />
                            </div>
                            <div class="media-body">
                              <h2 class="title">
                                Hosted by{" "}
                                <span>{AppartmentDetails.hostInfo.name}</span>
                              </h2>
                              <ul class="list-inline profile-host-info">
                                <li class="super-host-flag">
                                  <i class="fa fa-bookmark"></i>{" "}
                                  {AppartmentDetails.hostInfo.type}
                                </li>
                                <li>
                                  <address>
                                    <i
                                      class="fa fa-map-marker"
                                      aria-hidden="true"
                                    ></i>
                                    {AppartmentDetails.hostInfo.country}
                                  </address>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="block-body">
                          <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <dl>
                                <dt>Languages</dt>
                                <dd>
                                  {AppartmentDetails.hostInfo.languages.map(
                                    (val, ind) => {
                                      if (
                                        ind ==
                                        AppartmentDetails.hostInfo.languages
                                          .length -
                                          1
                                      )
                                        return val;
                                      else return val + ", ";
                                    }
                                  )}
                                </dd>
                              </dl>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <dl>
                                <dt>Profile Status</dt>
                                {AppartmentDetails.hostInfo.verified ? (
                                  <dd class="text-success">
                                    <i class="fa fa-check-circle-o"></i>{" "}
                                    Verified
                                  </dd>
                                ) : (
                                  <dd class="text-failure">
                                    <i class="fa fa-window-close"></i> Not
                                    Verified
                                  </dd>
                                )}
                              </dl>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <dl>
                                <dt>Host rating</dt>
                                <dd>
                                  <div class="rating">
                                    {forStar(AppartmentDetails.hostInfo.stars)}

                                    <span class="star-text-right">
                                      {qualityCheck(
                                        AppartmentDetails.hostInfo.stars
                                      )}
                                    </span>
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                          <div class="host-section-buttons">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal-contact-host"
                              class="btn btn-grey-outlined btn-half-width"
                            >
                              Contact the host
                            </a>
                            <a
                              href="../../host/guescohost08/index.html"
                              class="btn btn-grey-outlined btn-half-width"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="reviews-section" class="reviews-section">
                      <div class="sort-wrap clearfix">
                        <div class="pull-left">
                          <h2>{AppartmentDetails.reviews.length} Review</h2>
                        </div>
                      </div>
                      <div class="alert alert-info" role="alert">
                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                        Verified Reviews - All reviews are from verified guests.
                      </div>
                      <input
                        type="hidden"
                        name="review_listing_id"
                        id="review_listing_id"
                        value="267"
                      />
                      <input
                        type="hidden"
                        name="review_paged"
                        id="review_paged"
                        value="1"
                      />
                      <input
                        type="hidden"
                        name="total_pages"
                        id="total_pages"
                        value="1"
                      />
                      <input
                        type="hidden"
                        name="page_sort"
                        id="page_sort"
                        value=""
                      />
                      <ul id="guesco_reviews" class="list-unstyled">
                        {AppartmentDetails.reviews.map((review, index) => {
                          return (
                            <li id="review-808" class="review-block">
                              <div class="media">
                                <div class="media-left">
                                  <a class="media-object">
                                    <img
                                      width="70"
                                      height="70"
                                      src={review.userImage}
                                      class="img-circle media-object"
                                    />
                                  </a>
                                </div>
                                <div class="media-body media-middle">
                                  <div class="msg-user-info">
                                    <div class="msg-user-left">
                                      <div>
                                        <strong>{review.userName}</strong>
                                        <span class="rating">
                                          {forStar(review.stars)}
                                          <span class="label label-success">
                                            Average
                                          </span>
                                        </span>
                                      </div>
                                      <div class="message-date">
                                        <i class="fa fa-calendar"></i>
                                        {review.date}
                                        <i class="fa fa-clock-o"></i>
                                        {review.time}
                                      </div>
                                    </div>
                                  </div>
                                  <p>{review.text}</p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div
                      id="similar-listing-section"
                      class="similar-listing-section"
                    >
                      <h2 class="title">Similar listings</h2>
                      <div class="item-row item-list-view">
                        <div class="item-wrap infobox_trigger guesco-matchHeight">
                          {AppartmentDetails.similarListings.map((val, ind) => {
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
                      </div>
                    </div>
                  </div>
                </div>
                <InstantBooking AppartmentDetails={AppartmentDetails} />
              </div>
            </div>
          </section>
          <div
            class="modal fade custom-modal-contact-host"
            id="modal-contact-host"
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog clearfix" role="document">
              <div class="modal-body">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Contact the host</h4>
                  </div>
                  <div class="modal-body host-contact-wrap">
                    <div class="modal-contact-host-form">
                      <form method="POST">
                        <input
                          type="hidden"
                          name="target_email"
                          value="Ho&#109;ey&#72;o&#115;&#116;0&#56;&#64;&#101;&#109;ail.c&#111;m"
                        />
                        <input
                          type="hidden"
                          name="host_contact_security"
                          value="0e18893150"
                        />
                        <input
                          type="hidden"
                          name="permalink"
                          value="index.html"
                        />
                        <input
                          type="hidden"
                          name="listing_title"
                          value="Modern Apartment With Pool"
                        />
                        <input
                          type="hidden"
                          name="action"
                          value="guesco_host_contact"
                        />
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name="phone"
                            class="form-control"
                            placeholder="Phone"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            name="message"
                            class="form-control"
                            placeholder="Message"
                            rows="5"
                          ></textarea>
                        </div>
                        <div class="guesco_contact_messages"></div>
                        <button
                          type="submit"
                          class="contact_listing_host btn btn-primary btn-full-width"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="overlay-booking-module"
            class="overlay-booking-module overlay-contentscale"
          >
            <div class="overlay-search-title">Request to book</div>
            <button
              type="button"
              class="overlay-booking-module-close btn-blank"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <InPageNav />
        </div>
        <Footer />

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/custom.js"></script>
      </body>
    </div>
  );
}
