import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link as link } from "react-router";
import imgAppartment from "../images/appartment.jpg";
import imgBreakfast from "../images/breakfast.jpg";
import imgSofa from "../images/image-3.jpg";
import imgfour from "../images/image-3.jpg";
import imgfive from "../images/image-3.jpg";
import imgStudio from "../images/studio.jpg";
import imgPerson from "../images/person.jpg";
import imgListing from "../images/listing-image.jpg";
import imgMain from "../images/detail-slider-1.jpg";
import imgGallery1 from "../images/gallery-1.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import AppartmentCard from "./AppartmentListing/AppartmentCard";
import Footer from "./Footer";

export default function Details() {
  const AppartmentDetails = {
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
  };

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
  const [instantBookingState, setInstantBookingState] = useState({
    arrival: "",
    depart: "",
    budget: "",
    breakfast: false,
    lunch: false,
    dinner: false,
    text: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const ToggleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setInstantBookingState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  function instantBoking(event) {
    console.log("SAVEDD");
    const obj = {
      arrival: instantBookingState.arrival,
      depart: instantBookingState.depart,
      budget: instantBookingState.arrival,
      breakfast: instantBookingState.breakfast,
      lunch: instantBookingState.lunch,
      dinner: instantBookingState.dinner,
      text: instantBookingState.text,
    };
    //use redux here
    sessionStorage.setItem("instantBoking", JSON.stringify(obj));
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
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 homey_sticky">
                  <div class="sidebar right-sidebar fixedscroll-sidebar">
                    <div
                      id="guesco_remove_on_mobile"
                      class="sidebar-booking-module hidden-sm hidden-xs"
                    >
                      <div class="block">
                        <div class="sidebar-booking-module-header">
                          <div class="block-body-sidebar">
                            <span class="item-price">
                              <sup>$</sup>
                              {AppartmentDetails.prices.nightly}
                              <sub>/night</sub>
                            </span>
                          </div>
                        </div>
                        <div class="sidebar-booking-module-body">
                          <form class="guesco_notification block-body-sidebar">
                            <div
                              id="single-listing-date-range"
                              class="search-date-range"
                            >
                              <div class="search-date-range-arrive">
                                <input
                                  required
                                  type="name"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="arrival"
                                  value={instantBookingState.arrival}
                                  onChange={InputEvent}
                                  placeholder="Arrive"
                                />
                              </div>
                              <div class="search-date-range-depart">
                                <input
                                  required
                                  type="name"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="depart"
                                  value={instantBookingState.depart}
                                  onChange={InputEvent}
                                  type="text"
                                  class="form-control check_out_date"
                                  placeholder="Depart"
                                />
                              </div>
                            </div>
                            <div class="search-guests search-budget-js">
                              <input
                                required
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="budget"
                                value={instantBookingState.budget}
                                onChange={InputEvent}
                                type="text"
                                class="form-control"
                                placeholder="Budget"
                              />
                            </div>
                            <div class="search-extra-services">
                              <strong>Extra services</strong>
                              <ul class="extra-services-list list-unstyled clearfix">
                                <li>
                                  <label class="homey_extra_price control control--checkbox">
                                    <input
                                      type="checkbox"
                                      name="breakfast"
                                      data-name="breakfast"
                                      data-price="16"
                                      data-type="per_guest"
                                      value={instantBookingState.breakfast}
                                      onChange={ToggleEvent}
                                    />
                                    <span class="control-text">Breakfast</span>
                                    <span class="control__indicator"></span>
                                  </label>
                                  <span>
                                    ${AppartmentDetails.priceBreakfast}
                                  </span>
                                </li>
                                <li>
                                  <label class="homey_extra_price control control--checkbox">
                                    <input
                                      type="checkbox"
                                      name="lunch"
                                      data-name="lunch"
                                      data-price="24"
                                      data-type="per_guest"
                                      value={instantBookingState.lunch}
                                      onChange={ToggleEvent}
                                    />
                                    <span class="control-text">Lunch</span>
                                    <span class="control__indicator"></span>
                                  </label>
                                  <span>${AppartmentDetails.priceLunch}</span>
                                </li>
                                <li>
                                  <label class="homey_extra_price control control--checkbox">
                                    <input
                                      type="checkbox"
                                      name="dinner"
                                      data-name="dinner"
                                      data-price="24"
                                      data-type="per_guest"
                                      value={instantBookingState.dinner}
                                      onChange={ToggleEvent}
                                    />
                                    <span class="control-text">Dinner</span>
                                    <span class="control__indicator"></span>
                                  </label>
                                  <span>${AppartmentDetails.priceDinner}</span>
                                </li>
                              </ul>
                            </div>
                            <div class="search-message">
                              <textarea
                                name="text"
                                class="form-control"
                                rows="3"
                                placeholder="Introduce yourself to the host"
                                onChange={InputEvent}
                                value={instantBookingState.text}
                              ></textarea>
                            </div>
                            <div style={{ height: "15px" }}></div>

                            <a
                              href="checkout"
                              onSubmit={instantBoking}
                              type="submit button"
                              class="btn btn-full-width btn-primary"
                            >
                              Instant Booking
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-booking-module-footer">
                      <div class="block-body-sidebar">
                        <button
                          type="button"
                          data-listid="267"
                          class="add_fav btn btn-full-width btn-grey-outlined"
                        >
                          <i class="fa fa-heart-o" aria-hidden="true"></i> Add
                          to Favorite
                        </button>
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#modal-contact-host"
                          class="btn btn-full-width btn-grey-outlined"
                        >
                          Contact the host
                        </button>
                        <button
                          type="button"
                          id="guesco-print"
                          class="btn btn-full-width btn-blank"
                          data-listing-id="267"
                        >
                          <i class="fa fa-print" aria-hidden="true"></i> Print
                          this page{" "}
                        </button>
                      </div>
                      <div class="social-icons social-round">
                        <a class="btn-bg-facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn-bg-facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn-bg-facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn-bg-facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn-bg-facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div class="sidebar-booking-module">
              <div class="block">
                <div class="sidebar-booking-module-body">
                  <div class="guesco_notification search-wrap search-banner">
                    <div
                      id="single-listing-date-range"
                      class="search-date-range"
                    >
                      <div class="search-date-range-arrive">
                        <input
                          name="arrive"
                          value=""
                          readonly
                          type="text"
                          class="form-control check_in_date"
                          placeholder="Arrive"
                        />
                      </div>
                      <div class="search-date-range-depart">
                        <input
                          name="depart"
                          value=""
                          readonly
                          type="text"
                          class="form-control check_out_date"
                          placeholder="Depart"
                        />
                      </div>
                      <div
                        id="single-booking-search-calendar"
                        class="search-calendar single-listing-booking-calendar-js clearfix"
                        style={{ display: "none" }}
                      >
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="1"
                        >
                          <div class="month clearfix">
                            <h4>
                              August <span>2020</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1596240000"
                              data-formatted-date="2020-08-1"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1596326400"
                              data-formatted-date="2020-08-2"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1596412800"
                              data-formatted-date="2020-08-3"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1596499200"
                              data-formatted-date="2020-08-4"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1596585600"
                              data-formatted-date="2020-08-5"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1596672000"
                              data-formatted-date="2020-08-6"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1596758400"
                              data-formatted-date="2020-08-7"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1596844800"
                              data-formatted-date="2020-08-8"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1596931200"
                              data-formatted-date="2020-08-9"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1597017600"
                              data-formatted-date="2020-08-10"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1597104000"
                              data-formatted-date="2020-08-11"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1597190400"
                              data-formatted-date="2020-08-12"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1597276800"
                              data-formatted-date="2020-08-13"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1597363200"
                              data-formatted-date="2020-08-14"
                              class="current-month day-available day-disabled past-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1597449600"
                              data-formatted-date="2020-08-15"
                              class="current-month current-day day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1597536000"
                              data-formatted-date="2020-08-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1597622400"
                              data-formatted-date="2020-08-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1597708800"
                              data-formatted-date="2020-08-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1597795200"
                              data-formatted-date="2020-08-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1597881600"
                              data-formatted-date="2020-08-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1597968000"
                              data-formatted-date="2020-08-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1598054400"
                              data-formatted-date="2020-08-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1598140800"
                              data-formatted-date="2020-08-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1598227200"
                              data-formatted-date="2020-08-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1598313600"
                              data-formatted-date="2020-08-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1598400000"
                              data-formatted-date="2020-08-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1598486400"
                              data-formatted-date="2020-08-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1598572800"
                              data-formatted-date="2020-08-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1598659200"
                              data-formatted-date="2020-08-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1598745600"
                              data-formatted-date="2020-08-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1598832000"
                              data-formatted-date="2020-08-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="2"
                        >
                          <div class="month clearfix">
                            <h4>
                              September <span>2020</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1598918400"
                              data-formatted-date="2020-09-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1599004800"
                              data-formatted-date="2020-09-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1599091200"
                              data-formatted-date="2020-09-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1599177600"
                              data-formatted-date="2020-09-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1599264000"
                              data-formatted-date="2020-09-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1599350400"
                              data-formatted-date="2020-09-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1599436800"
                              data-formatted-date="2020-09-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1599523200"
                              data-formatted-date="2020-09-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1599609600"
                              data-formatted-date="2020-09-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1599696000"
                              data-formatted-date="2020-09-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1599782400"
                              data-formatted-date="2020-09-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1599868800"
                              data-formatted-date="2020-09-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1599955200"
                              data-formatted-date="2020-09-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1600041600"
                              data-formatted-date="2020-09-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1600128000"
                              data-formatted-date="2020-09-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1600214400"
                              data-formatted-date="2020-09-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1600300800"
                              data-formatted-date="2020-09-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1600387200"
                              data-formatted-date="2020-09-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1600473600"
                              data-formatted-date="2020-09-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1600560000"
                              data-formatted-date="2020-09-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1600646400"
                              data-formatted-date="2020-09-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1600732800"
                              data-formatted-date="2020-09-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1600819200"
                              data-formatted-date="2020-09-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1600905600"
                              data-formatted-date="2020-09-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1600992000"
                              data-formatted-date="2020-09-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1601078400"
                              data-formatted-date="2020-09-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1601164800"
                              data-formatted-date="2020-09-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1601251200"
                              data-formatted-date="2020-09-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1601337600"
                              data-formatted-date="2020-09-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1601424000"
                              data-formatted-date="2020-09-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="3"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              October <span>2020</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1601510400"
                              data-formatted-date="2020-10-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1601596800"
                              data-formatted-date="2020-10-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1601683200"
                              data-formatted-date="2020-10-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1601769600"
                              data-formatted-date="2020-10-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1601856000"
                              data-formatted-date="2020-10-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1601942400"
                              data-formatted-date="2020-10-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1602028800"
                              data-formatted-date="2020-10-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1602115200"
                              data-formatted-date="2020-10-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1602201600"
                              data-formatted-date="2020-10-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1602288000"
                              data-formatted-date="2020-10-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1602374400"
                              data-formatted-date="2020-10-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1602460800"
                              data-formatted-date="2020-10-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1602547200"
                              data-formatted-date="2020-10-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1602633600"
                              data-formatted-date="2020-10-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1602720000"
                              data-formatted-date="2020-10-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1602806400"
                              data-formatted-date="2020-10-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1602892800"
                              data-formatted-date="2020-10-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1602979200"
                              data-formatted-date="2020-10-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1603065600"
                              data-formatted-date="2020-10-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1603152000"
                              data-formatted-date="2020-10-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1603238400"
                              data-formatted-date="2020-10-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1603324800"
                              data-formatted-date="2020-10-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1603411200"
                              data-formatted-date="2020-10-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1603497600"
                              data-formatted-date="2020-10-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1603584000"
                              data-formatted-date="2020-10-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1603670400"
                              data-formatted-date="2020-10-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1603756800"
                              data-formatted-date="2020-10-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1603843200"
                              data-formatted-date="2020-10-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1603929600"
                              data-formatted-date="2020-10-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1604016000"
                              data-formatted-date="2020-10-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1604102400"
                              data-formatted-date="2020-10-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="4"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              November <span>2020</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1604188800"
                              data-formatted-date="2020-11-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1604275200"
                              data-formatted-date="2020-11-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1604361600"
                              data-formatted-date="2020-11-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1604448000"
                              data-formatted-date="2020-11-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1604534400"
                              data-formatted-date="2020-11-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1604620800"
                              data-formatted-date="2020-11-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1604707200"
                              data-formatted-date="2020-11-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1604793600"
                              data-formatted-date="2020-11-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1604880000"
                              data-formatted-date="2020-11-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1604966400"
                              data-formatted-date="2020-11-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1605052800"
                              data-formatted-date="2020-11-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1605139200"
                              data-formatted-date="2020-11-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1605225600"
                              data-formatted-date="2020-11-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1605312000"
                              data-formatted-date="2020-11-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1605398400"
                              data-formatted-date="2020-11-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1605484800"
                              data-formatted-date="2020-11-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1605571200"
                              data-formatted-date="2020-11-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1605657600"
                              data-formatted-date="2020-11-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1605744000"
                              data-formatted-date="2020-11-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1605830400"
                              data-formatted-date="2020-11-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1605916800"
                              data-formatted-date="2020-11-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1606003200"
                              data-formatted-date="2020-11-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1606089600"
                              data-formatted-date="2020-11-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1606176000"
                              data-formatted-date="2020-11-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1606262400"
                              data-formatted-date="2020-11-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1606348800"
                              data-formatted-date="2020-11-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1606435200"
                              data-formatted-date="2020-11-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1606521600"
                              data-formatted-date="2020-11-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1606608000"
                              data-formatted-date="2020-11-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1606694400"
                              data-formatted-date="2020-11-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="5"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              December <span>2020</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1606780800"
                              data-formatted-date="2020-12-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1606867200"
                              data-formatted-date="2020-12-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1606953600"
                              data-formatted-date="2020-12-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1607040000"
                              data-formatted-date="2020-12-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1607126400"
                              data-formatted-date="2020-12-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1607212800"
                              data-formatted-date="2020-12-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1607299200"
                              data-formatted-date="2020-12-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1607385600"
                              data-formatted-date="2020-12-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1607472000"
                              data-formatted-date="2020-12-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1607558400"
                              data-formatted-date="2020-12-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1607644800"
                              data-formatted-date="2020-12-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1607731200"
                              data-formatted-date="2020-12-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1607817600"
                              data-formatted-date="2020-12-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1607904000"
                              data-formatted-date="2020-12-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1607990400"
                              data-formatted-date="2020-12-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1608076800"
                              data-formatted-date="2020-12-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1608163200"
                              data-formatted-date="2020-12-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1608249600"
                              data-formatted-date="2020-12-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1608336000"
                              data-formatted-date="2020-12-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1608422400"
                              data-formatted-date="2020-12-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1608508800"
                              data-formatted-date="2020-12-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1608595200"
                              data-formatted-date="2020-12-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1608681600"
                              data-formatted-date="2020-12-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1608768000"
                              data-formatted-date="2020-12-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1608854400"
                              data-formatted-date="2020-12-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1608940800"
                              data-formatted-date="2020-12-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1609027200"
                              data-formatted-date="2020-12-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1609113600"
                              data-formatted-date="2020-12-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1609200000"
                              data-formatted-date="2020-12-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1609286400"
                              data-formatted-date="2020-12-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1609372800"
                              data-formatted-date="2020-12-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="6"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              January <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1609459200"
                              data-formatted-date="2021-01-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1609545600"
                              data-formatted-date="2021-01-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1609632000"
                              data-formatted-date="2021-01-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1609718400"
                              data-formatted-date="2021-01-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1609804800"
                              data-formatted-date="2021-01-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1609891200"
                              data-formatted-date="2021-01-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1609977600"
                              data-formatted-date="2021-01-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1610064000"
                              data-formatted-date="2021-01-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1610150400"
                              data-formatted-date="2021-01-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1610236800"
                              data-formatted-date="2021-01-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1610323200"
                              data-formatted-date="2021-01-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1610409600"
                              data-formatted-date="2021-01-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1610496000"
                              data-formatted-date="2021-01-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1610582400"
                              data-formatted-date="2021-01-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1610668800"
                              data-formatted-date="2021-01-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1610755200"
                              data-formatted-date="2021-01-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1610841600"
                              data-formatted-date="2021-01-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1610928000"
                              data-formatted-date="2021-01-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1611014400"
                              data-formatted-date="2021-01-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1611100800"
                              data-formatted-date="2021-01-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1611187200"
                              data-formatted-date="2021-01-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1611273600"
                              data-formatted-date="2021-01-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1611360000"
                              data-formatted-date="2021-01-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1611446400"
                              data-formatted-date="2021-01-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1611532800"
                              data-formatted-date="2021-01-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1611619200"
                              data-formatted-date="2021-01-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1611705600"
                              data-formatted-date="2021-01-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1611792000"
                              data-formatted-date="2021-01-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1611878400"
                              data-formatted-date="2021-01-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1611964800"
                              data-formatted-date="2021-01-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1612051200"
                              data-formatted-date="2021-01-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="7"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              February <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li
                              data-timestamp="1612137600"
                              data-formatted-date="2021-02-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1612224000"
                              data-formatted-date="2021-02-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1612310400"
                              data-formatted-date="2021-02-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1612396800"
                              data-formatted-date="2021-02-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1612483200"
                              data-formatted-date="2021-02-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1612569600"
                              data-formatted-date="2021-02-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1612656000"
                              data-formatted-date="2021-02-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1612742400"
                              data-formatted-date="2021-02-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1612828800"
                              data-formatted-date="2021-02-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1612915200"
                              data-formatted-date="2021-02-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1613001600"
                              data-formatted-date="2021-02-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1613088000"
                              data-formatted-date="2021-02-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1613174400"
                              data-formatted-date="2021-02-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1613260800"
                              data-formatted-date="2021-02-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1613347200"
                              data-formatted-date="2021-02-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1613433600"
                              data-formatted-date="2021-02-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1613520000"
                              data-formatted-date="2021-02-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1613606400"
                              data-formatted-date="2021-02-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1613692800"
                              data-formatted-date="2021-02-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1613779200"
                              data-formatted-date="2021-02-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1613865600"
                              data-formatted-date="2021-02-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1613952000"
                              data-formatted-date="2021-02-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1614038400"
                              data-formatted-date="2021-02-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1614124800"
                              data-formatted-date="2021-02-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1614211200"
                              data-formatted-date="2021-02-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1614297600"
                              data-formatted-date="2021-02-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1614384000"
                              data-formatted-date="2021-02-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1614470400"
                              data-formatted-date="2021-02-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="8"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              March <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li
                              data-timestamp="1614556800"
                              data-formatted-date="2021-03-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1614643200"
                              data-formatted-date="2021-03-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1614729600"
                              data-formatted-date="2021-03-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1614816000"
                              data-formatted-date="2021-03-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1614902400"
                              data-formatted-date="2021-03-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1614988800"
                              data-formatted-date="2021-03-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1615075200"
                              data-formatted-date="2021-03-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1615161600"
                              data-formatted-date="2021-03-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1615248000"
                              data-formatted-date="2021-03-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1615334400"
                              data-formatted-date="2021-03-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1615420800"
                              data-formatted-date="2021-03-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1615507200"
                              data-formatted-date="2021-03-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1615593600"
                              data-formatted-date="2021-03-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1615680000"
                              data-formatted-date="2021-03-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1615766400"
                              data-formatted-date="2021-03-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1615852800"
                              data-formatted-date="2021-03-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1615939200"
                              data-formatted-date="2021-03-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1616025600"
                              data-formatted-date="2021-03-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1616112000"
                              data-formatted-date="2021-03-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1616198400"
                              data-formatted-date="2021-03-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1616284800"
                              data-formatted-date="2021-03-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1616371200"
                              data-formatted-date="2021-03-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1616457600"
                              data-formatted-date="2021-03-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1616544000"
                              data-formatted-date="2021-03-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1616630400"
                              data-formatted-date="2021-03-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1616716800"
                              data-formatted-date="2021-03-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1616803200"
                              data-formatted-date="2021-03-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1616889600"
                              data-formatted-date="2021-03-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1616976000"
                              data-formatted-date="2021-03-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1617062400"
                              data-formatted-date="2021-03-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1617148800"
                              data-formatted-date="2021-03-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="9"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              April <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1617235200"
                              data-formatted-date="2021-04-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1617321600"
                              data-formatted-date="2021-04-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1617408000"
                              data-formatted-date="2021-04-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1617494400"
                              data-formatted-date="2021-04-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1617580800"
                              data-formatted-date="2021-04-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1617667200"
                              data-formatted-date="2021-04-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1617753600"
                              data-formatted-date="2021-04-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1617840000"
                              data-formatted-date="2021-04-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1617926400"
                              data-formatted-date="2021-04-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1618012800"
                              data-formatted-date="2021-04-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1618099200"
                              data-formatted-date="2021-04-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1618185600"
                              data-formatted-date="2021-04-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1618272000"
                              data-formatted-date="2021-04-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1618358400"
                              data-formatted-date="2021-04-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1618444800"
                              data-formatted-date="2021-04-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1618531200"
                              data-formatted-date="2021-04-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1618617600"
                              data-formatted-date="2021-04-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1618704000"
                              data-formatted-date="2021-04-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1618790400"
                              data-formatted-date="2021-04-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1618876800"
                              data-formatted-date="2021-04-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1618963200"
                              data-formatted-date="2021-04-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1619049600"
                              data-formatted-date="2021-04-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1619136000"
                              data-formatted-date="2021-04-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1619222400"
                              data-formatted-date="2021-04-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1619308800"
                              data-formatted-date="2021-04-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1619395200"
                              data-formatted-date="2021-04-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1619481600"
                              data-formatted-date="2021-04-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1619568000"
                              data-formatted-date="2021-04-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1619654400"
                              data-formatted-date="2021-04-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1619740800"
                              data-formatted-date="2021-04-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="10"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              May <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1619827200"
                              data-formatted-date="2021-05-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1619913600"
                              data-formatted-date="2021-05-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1620000000"
                              data-formatted-date="2021-05-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1620086400"
                              data-formatted-date="2021-05-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1620172800"
                              data-formatted-date="2021-05-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1620259200"
                              data-formatted-date="2021-05-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1620345600"
                              data-formatted-date="2021-05-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1620432000"
                              data-formatted-date="2021-05-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1620518400"
                              data-formatted-date="2021-05-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1620604800"
                              data-formatted-date="2021-05-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1620691200"
                              data-formatted-date="2021-05-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1620777600"
                              data-formatted-date="2021-05-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1620864000"
                              data-formatted-date="2021-05-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1620950400"
                              data-formatted-date="2021-05-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1621036800"
                              data-formatted-date="2021-05-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1621123200"
                              data-formatted-date="2021-05-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1621209600"
                              data-formatted-date="2021-05-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1621296000"
                              data-formatted-date="2021-05-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1621382400"
                              data-formatted-date="2021-05-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1621468800"
                              data-formatted-date="2021-05-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1621555200"
                              data-formatted-date="2021-05-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1621641600"
                              data-formatted-date="2021-05-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1621728000"
                              data-formatted-date="2021-05-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1621814400"
                              data-formatted-date="2021-05-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1621900800"
                              data-formatted-date="2021-05-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1621987200"
                              data-formatted-date="2021-05-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1622073600"
                              data-formatted-date="2021-05-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1622160000"
                              data-formatted-date="2021-05-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1622246400"
                              data-formatted-date="2021-05-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1622332800"
                              data-formatted-date="2021-05-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1622419200"
                              data-formatted-date="2021-05-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap left-calendar"
                          data-month="11"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              June <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1622505600"
                              data-formatted-date="2021-06-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1622592000"
                              data-formatted-date="2021-06-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1622678400"
                              data-formatted-date="2021-06-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1622764800"
                              data-formatted-date="2021-06-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1622851200"
                              data-formatted-date="2021-06-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1622937600"
                              data-formatted-date="2021-06-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1623024000"
                              data-formatted-date="2021-06-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1623110400"
                              data-formatted-date="2021-06-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1623196800"
                              data-formatted-date="2021-06-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1623283200"
                              data-formatted-date="2021-06-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1623369600"
                              data-formatted-date="2021-06-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1623456000"
                              data-formatted-date="2021-06-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1623542400"
                              data-formatted-date="2021-06-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1623628800"
                              data-formatted-date="2021-06-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1623715200"
                              data-formatted-date="2021-06-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1623801600"
                              data-formatted-date="2021-06-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1623888000"
                              data-formatted-date="2021-06-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1623974400"
                              data-formatted-date="2021-06-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1624060800"
                              data-formatted-date="2021-06-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1624147200"
                              data-formatted-date="2021-06-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1624233600"
                              data-formatted-date="2021-06-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1624320000"
                              data-formatted-date="2021-06-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1624406400"
                              data-formatted-date="2021-06-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1624492800"
                              data-formatted-date="2021-06-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1624579200"
                              data-formatted-date="2021-06-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1624665600"
                              data-formatted-date="2021-06-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1624752000"
                              data-formatted-date="2021-06-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1624838400"
                              data-formatted-date="2021-06-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1624924800"
                              data-formatted-date="2021-06-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1625011200"
                              data-formatted-date="2021-06-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="single-listing-calendar-wrap right-calendar"
                          data-month="12"
                          style={{ display: "none" }}
                        >
                          <div class="month clearfix">
                            <h4>
                              July <span>2021</span>
                            </h4>
                          </div>
                          <ul class="weekdays clearfix">
                            <li data-dayName="Monday">M</li>
                            <li data-dayName="Tuesday">T</li>
                            <li data-dayName="Wednesday">W</li>
                            <li data-dayName="Thursday">T</li>
                            <li data-dayName="Friday">F</li>
                            <li data-dayName="Saturday">S</li>
                            <li data-dayName="Sunday">S</li>
                          </ul>
                          <ul class="days clearfix">
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li class="prev-month"></li>
                            <li
                              data-timestamp="1625097600"
                              data-formatted-date="2021-07-1"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">1</span>
                            </li>
                            <li
                              data-timestamp="1625184000"
                              data-formatted-date="2021-07-2"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">2</span>
                            </li>
                            <li
                              data-timestamp="1625270400"
                              data-formatted-date="2021-07-3"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">3</span>
                            </li>
                            <li
                              data-timestamp="1625356800"
                              data-formatted-date="2021-07-4"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">4</span>
                            </li>
                            <li
                              data-timestamp="1625443200"
                              data-formatted-date="2021-07-5"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">5</span>
                            </li>
                            <li
                              data-timestamp="1625529600"
                              data-formatted-date="2021-07-6"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">6</span>
                            </li>
                            <li
                              data-timestamp="1625616000"
                              data-formatted-date="2021-07-7"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">7</span>
                            </li>
                            <li
                              data-timestamp="1625702400"
                              data-formatted-date="2021-07-8"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">8</span>
                            </li>
                            <li
                              data-timestamp="1625788800"
                              data-formatted-date="2021-07-9"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">9</span>
                            </li>
                            <li
                              data-timestamp="1625875200"
                              data-formatted-date="2021-07-10"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">10</span>
                            </li>
                            <li
                              data-timestamp="1625961600"
                              data-formatted-date="2021-07-11"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">11</span>
                            </li>
                            <li
                              data-timestamp="1626048000"
                              data-formatted-date="2021-07-12"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">12</span>
                            </li>
                            <li
                              data-timestamp="1626134400"
                              data-formatted-date="2021-07-13"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">13</span>
                            </li>
                            <li
                              data-timestamp="1626220800"
                              data-formatted-date="2021-07-14"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">14</span>
                            </li>
                            <li
                              data-timestamp="1626307200"
                              data-formatted-date="2021-07-15"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">15</span>
                            </li>
                            <li
                              data-timestamp="1626393600"
                              data-formatted-date="2021-07-16"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">16</span>
                            </li>
                            <li
                              data-timestamp="1626480000"
                              data-formatted-date="2021-07-17"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">17</span>
                            </li>
                            <li
                              data-timestamp="1626566400"
                              data-formatted-date="2021-07-18"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">18</span>
                            </li>
                            <li
                              data-timestamp="1626652800"
                              data-formatted-date="2021-07-19"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">19</span>
                            </li>
                            <li
                              data-timestamp="1626739200"
                              data-formatted-date="2021-07-20"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">20</span>
                            </li>
                            <li
                              data-timestamp="1626825600"
                              data-formatted-date="2021-07-21"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">21</span>
                            </li>
                            <li
                              data-timestamp="1626912000"
                              data-formatted-date="2021-07-22"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">22</span>
                            </li>
                            <li
                              data-timestamp="1626998400"
                              data-formatted-date="2021-07-23"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">23</span>
                            </li>
                            <li
                              data-timestamp="1627084800"
                              data-formatted-date="2021-07-24"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">24</span>
                            </li>
                            <li
                              data-timestamp="1627171200"
                              data-formatted-date="2021-07-25"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">25</span>
                            </li>
                            <li
                              data-timestamp="1627257600"
                              data-formatted-date="2021-07-26"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">26</span>
                            </li>
                            <li
                              data-timestamp="1627344000"
                              data-formatted-date="2021-07-27"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">27</span>
                            </li>
                            <li
                              data-timestamp="1627430400"
                              data-formatted-date="2021-07-28"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">28</span>
                            </li>
                            <li
                              data-timestamp="1627516800"
                              data-formatted-date="2021-07-29"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">29</span>
                            </li>
                            <li
                              data-timestamp="1627603200"
                              data-formatted-date="2021-07-30"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">30</span>
                            </li>
                            <li
                              data-timestamp="1627689600"
                              data-formatted-date="2021-07-31"
                              class="current-month day-available future-day"
                            >
                              <span class="day-number">31</span>
                            </li>
                          </ul>
                        </div>
                        <div class="calendar-navigation custom-actions">
                          <button class="listing-cal-prev btn btn-action pull-left disabled">
                            <i
                              class="fa fa-chevron-left"
                              aria-hidden="true"
                            ></i>
                          </button>
                          <button class="listing-cal-next btn btn-action pull-right">
                            <i
                              class="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="search-guests single-guests-js">
                      <input
                        name="guests"
                        value=""
                        readonly
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        placeholder="Guests"
                      />
                      <input type="hidden" name="adult_guest" value="0" />
                      <input type="hidden" name="child_guest" value="0" />
                      <div class="search-guests-wrap single-form-guests-js clearfix">
                        <div class="adults-calculator">
                          <span class="quantity-calculator guesco_adult">
                            0
                          </span>
                          <span class="calculator-label">Adults</span>
                          <button
                            class="adult_plus btn btn-secondary-outlined"
                            type="button"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                          <button
                            class="adult_minus btn btn-secondary-outlined"
                            type="button"
                          >
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div class="children-calculator">
                          <span class="quantity-calculator guesco_child">
                            0
                          </span>
                          <span class="calculator-label">Children</span>
                          <button
                            class="child_plus btn btn-secondary-outlined"
                            type="button"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                          <button
                            class="child_minus btn btn-secondary-outlined"
                            type="button"
                          >
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div class="guest-apply-btn">
                          <button
                            class="btn apply_guests btn-primary"
                            type="button"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      id="instance_reservation_mobile"
                      type="button"
                      class="btn btn-full-width btn-primary"
                    >
                      Instant Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay-booking-btn visible-sm visible-xs">
            <div class="pull-left">
              <div class="overlay-booking-price">
                $525<span>/night</span>
              </div>
              <div class="list-inline rating">
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star-o"></li>
                <li class="fa fa-star-o"></li>
                <li>
                  <span class="star-text-right">Average</span>
                </li>
              </div>
            </div>
            <button
              id="trigger-overlay-booking-form"
              class="trigger-overlay btn btn-primary"
              type="button"
            >
              Instant Booking
            </button>
          </div>
          <div class="listing-nav hidden-xs">
            <div class="container">
              <nav class="listing-navi">
                <ul class="main-menu">
                  <li>
                    <a href="#about-section">About</a>
                  </li>
                  <li>
                    <a href="#details-section">Details</a>
                  </li>
                  <li>
                    <a href="#gallery-section">Gallery</a>
                  </li>
                  <li>
                    <a href="#price-section">Prices</a>
                  </li>
                  <li>
                    <a href="#custom-price-section">Custom Period Prices</a>
                  </li>
                  <li>
                    <a href="#accomodation-section">Accomodation</a>
                  </li>
                  <li>
                    <a href="#features-section">Features</a>
                  </li>
                  <li>
                    <a href="#map-section">Map</a>
                  </li>
                  <li>
                    <a href="#nearby-section">Nearby</a>
                  </li>
                  <li>
                    <a href="#rules-section">Terms &amp; rules</a>
                  </li>
                  <li>
                    <a href="#video-section">Video</a>
                  </li>
                  <li>
                    <a href="#availability-section">Availability</a>
                  </li>
                  <li>
                    <a href="#host-section">Host</a>
                  </li>
                  <li>
                    <a href="#reviews-section">Reviews</a>
                  </li>
                  <li>
                    <a href="#similar-listing-section">Similar listings</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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
