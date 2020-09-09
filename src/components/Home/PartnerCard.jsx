import React from "react";

import { Link } from "react-router-dom";

const PartnerCard = (props) => {
  const imgLink = props.imgLink;
  return (
    <div className="item">
      <div className="partner-item text-center">
        <div className="partner-thumb">
          <Link target="_blank" to="#">
            <img
              width="285"
              height="160"
              src={imgLink}
              className="img-responsive wp-post-image"
              alt=""
              loading="lazy"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PartnerCard;
