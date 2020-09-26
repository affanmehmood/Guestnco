import React from "react";

import { useHistory, Link } from "react-router-dom";

const FeaturedItemCard = (props) => {
  const id = props.id;
  const featured = props.featured;
  const imageUrl = props.imageUrl;
  const price = props.price;
  const name = props.name;
  const noRooms = props.noRooms;
  const noBaths = props.noBaths;
  const noGuests = props.noGuests;
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
  const history = useHistory();
  function GoToDetails() {
    sessionStorage.setItem("idFromAptCard", id);
    history.push("/details-2");
  }
  return (
    <div class="item-list-view">
      <div class="media property-item">
        <div class="media-left">
          <div onClick={GoToDetails} class="item-media item-media-thumb">
            {checkFeatured()}
            <a to="details-2">
              <img
                width="450"
                height="300"
                src={imageUrl}
                class="img-responsive wp-post-image"
                alt=""
                loading="lazy"
              />{" "}
            </a>
          </div>
        </div>
        <div class="media-body item-body clearfix">
          <div class="item-title-head">
            <div class="title-head-left">
              <h2 class="title">
                <Link onClick={GoToDetails} to="details-2">
                  {name}
                </Link>
              </h2>
              <span class="item-price">AED{price}/night</span>
              <span class="list-inline rating stars">{forStar()}</span>
            </div>
          </div>
          <ul class="item-amenities">
            <li>
              <i class="fa fa-bed"></i>{" "}
              <span class="total-beds">{noRooms}</span>
            </li>
            <li>
              <i class="fa fa-shower"></i>{" "}
              <span class="total-baths">{noBaths}</span>
            </li>
            <li>
              <i class="fa fa-user"></i>{" "}
              <span class="total-guests">{noGuests}</span>
            </li>
            <li>Bed &amp; Breakfast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FeaturedItemCard;
