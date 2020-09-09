import React from "react";

import imgeight from "../../images/person.jpg";

import { Link } from "react-router-dom";
const AppartmentCard = (props) => {
  const featured = props.featured;
  const imageUrl = props.imageUrl;
  const price = props.price;
  const adminImageUrl = props.adminImageUrl;
  const name = props.name;
  const address = props.address;
  const noRooms = props.noRooms;
  const noBaths = props.noBaths;
  const noGuests = props.noGuests;
  const type = props.type;
  const stars = props.stars;

  function checkFeatured() {
    if (featured == true) {
      return (
        <span className="label-wrap top-left">
          <span className="label label-success label-featured">Featured</span>
        </span>
      );
    }
  }

  function forStar() {
    const items = [];
    for (var i = 0; i < stars; i++) {
      items.push(<li className="fa fa-star"></li>);
    }
    for (var i = 0; i < 5 - stars; i++) {
      items.push(<li className="fa fa-star-o"></li>);
    }
    return items;
  }
  function qualityCheck() {
    switch (stars) {
      case 0:
        return "Very Poor";
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
  return (
    <div className="col-md-4 col-12">
      <div className="item-wrap infobox_trigger guestco-matchHeight">
        <div className="media property-item">
          <div className="media-left">
            <div className="item-media item-media-thumb">
              {checkFeatured()}
              <Link className="hover-effect" to="detailpage.html">
                <img
                  width="450"
                  height="300"
                  src={imageUrl}
                  className="img-responsive"
                  alt=""
                  loading="lazy"
                />{" "}
              </Link>
              <div className="item-media-price">
                <span className="item-price">
                  <sup>$</sup>
                  {price}
                  <sub>/night</sub>
                </span>
              </div>
              <div className="item-user-image">
                <img
                  width="36"
                  height="36"
                  src={adminImageUrl}
                  className="img-responsive img-circle"
                  alt=""
                  loading="lazy"
                />{" "}
              </div>
            </div>
          </div>
          <div className="media-body item-body clearfix">
            <div className="item-title-head table-block">
              <div className="title-head-left">
                <h2 className="title">
                  <Link to="detailpage.html">{name}</Link>
                </h2>
                <address className="item-address">{address}</address>
              </div>
            </div>
            <ul className="item-amenities">
              <li>
                <i className="fa fa-bed"></i>{" "}
                <span className="total-beds">{noRooms}</span>{" "}
                <span className="item-label">Bedrooms</span>
              </li>
              <li>
                <i className="fa fa-shower"></i>{" "}
                <span className="total-baths">{noBaths}</span>{" "}
                <span className="item-label">Baths</span>
              </li>
              <li>
                <i className="fa fa-user"></i>{" "}
                <span className="total-guests">{noGuests}</span>{" "}
                <span className="item-label">Guests</span>
              </li>
              <li className="item-type">{type}</li>
            </ul>
            <div className="item-user-image list-item-hidden">
              <img
                width="36"
                height="36"
                src={imgeight}
                className="img-responsive img-circle"
                alt=""
                loading="lazy"
              />{" "}
              <span className="item-user-info">Hosted by Andrew Garcia</span>
            </div>
            <div className="item-footer">
              <div className="footer-right">
                <div className="item-tools">
                  <div className="btn-group dropup">
                    <button
                      className="btn-item-tools dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="guestco_compare compare-271"
                          to="#"
                          data-listing_id="271"
                        >
                          Compare
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="add_fav" data-listid="271">
                          Add to Favorite{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-left">
                <div className="stars">
                  <ul className="list-inline rating">
                    {forStar()}
                    <li>
                      <span className="star-text-right">{qualityCheck()}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppartmentCard;
