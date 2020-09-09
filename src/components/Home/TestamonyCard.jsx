import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

const TestamonyCard = (props) => {
  const description = props.description;
  const name = props.name;
  const imgLink = props.imgLink;
  const desegnation = props.desegnation;

  return (
    <div className="item">
      <div className="testimonial-item text-center">
        <p className="description">{description}</p>
        <div className="testimonial-thumb">
          <img
            width="120"
            height="120"
            src={imgLink}
            className="img-circle img-responsive"
            alt=""
            loading="lazy"
          />
        </div>
        <p className="auther-info">
          <strong>{name}</strong>
          <div>
            <em>{desegnation}</em>
          </div>
        </p>
      </div>
    </div>
  );
};

export default TestamonyCard;
