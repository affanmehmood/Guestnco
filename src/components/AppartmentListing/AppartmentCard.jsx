import React from "react";

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
  const hostName = props.hostName;

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
    <div class="col-md-12 item-wrap infobox_trigger guesco-matchHeight">
      <div class="media property-item">
        <div class="media-left">
          <div class="item-media item-media-thumb">
            {checkFeatured()}
            <a class="hover-effect" href="detailpage.html">
              <img
                width="450"
                height="300"
                src={imageUrl}
                class="img-responsive wp-post-image"
                alt=""
              />{" "}
            </a>
            <div class="item-media-price">
              <span class="item-price">
                <sup>$</sup>
                {price}
                <sub>/night</sub>
              </span>
            </div>
            <div class="item-user-image">
              <img
                width="36"
                height="36"
                src={adminImageUrl}
                class="img-responsive img-circle"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="media-body item-body clearfix">
          <div class="item-title-head table-block">
            <div class="title-head-left">
              <h2 class="title">
                <a href="detail-2">{name}</a>
              </h2>
              <address class="item-address">{address}</address>
            </div>
          </div>
          <ul class="item-amenities">
            <li>
              <i class="fa fa-bed"></i>{" "}
              <span class="total-beds">{noRooms}</span>{" "}
              <span class="item-label">Bedrooms</span>
            </li>
            <li>
              <i class="fa fa-shower"></i>{" "}
              <span class="total-baths">{noBaths}</span>{" "}
              <span class="item-label">Baths</span>
            </li>
            <li>
              <i class="fa fa-user"></i>{" "}
              <span class="total-guests">{noGuests}</span>{" "}
              <span class="item-label">Guests</span>
            </li>
            <li class="item-type">{type}</li>
          </ul>
          <div class="item-user-image list-item-hidden">
            <img
              width="36"
              height="36"
              src={adminImageUrl}
              class="img-responsive img-circle"
              alt=""
            />{" "}
            <span class="item-user-info">
              Hosted by
              <br />
              {hostName}
            </span>
          </div>
          <div class="item-footer">
            <div class="footer-right">
              <div class="item-tools">
                <div class="btn-group dropup">
                  <button
                    class="btn-item-tools dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="guesco_compare compare-267"
                        href="#"
                        data-listing_id="267"
                      >
                        Compare
                      </a>
                    </li>
                    <li>
                      <a href="#" class="add_fav" data-listid="267">
                        Add to Favorite{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-left">
              <div class="stars">
                <ul class="list-inline rating">
                  {forStar()}
                  <li>
                    <span class="star-text-right">{qualityCheck()}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppartmentCard;
