import React from "react";

import appartment from "../../images/appartment.jpg";
import breakfast from "../../images/breakfast.jpg";
import image3 from "../../images/image-3.jpg";
import homeimg from "../../images/home.jpg";
import loft from "../../images/loft.jpg";
import studio from "../../images/studio.jpg";
import { Link } from "react-router-dom";

const FindPlace = () => {
  return (
    <div className="whitebg">
      <div className="container">
        <div style={{ clear: "both", width: "100%", height: "50px" }}></div>
        <div className="module-title  text-center ">
          <h2>Find a Place That Fits Your Comfort</h2>
          <p className="sub-heading"></p>
        </div>
        <div style={{ clear: "both", width: "100%", height: "30px" }}></div>
        <div className="taxonomy-grid taxonomy-grid-2">
          <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="taxonomy-item taxonomy-card">
                <Link className="taxonomy-link hover-effect" to="listing">
  <div className="taxonomy-title">{'Loft & Modern'}</div>
                  <img
                    className="img-responsive"
                    src={breakfast}
                    width="360"
                    height="360"
                    alt="listing_type"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="taxonomy-item taxonomy-card">
                <Link className="taxonomy-link hover-effect" to="listing">
                  <div className="taxonomy-title">Apartments</div>
                  <img
                    className="img-responsive"
                    src={appartment}
                    width="555"
                    height="262"
                    alt="listing_type"
                  />
                </Link>
              </div>
            </div>
        
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="taxonomy-item taxonomy-card">
                <Link className="taxonomy-link hover-effect" to="listing">
                  <div className="taxonomy-title">Studio</div>
                  <img
                    className="img-responsive"
                    src={image3}
                    width="360"
                    height="360"
                    alt="listing_type"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
             
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="taxonomy-item taxonomy-card">
                <Link className="taxonomy-link hover-effect" to="listing">
                  <div className="taxonomy-title">Villa</div>
                  <img
                    className="img-responsive"
                    src={homeimg}
                    width="360"
                    height="360"
                    alt="listing_type"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="taxonomy-item taxonomy-card">
                <Link className="taxonomy-link hover-effect" to="listing">
                  <div className="taxonomy-title">Townhouse</div>
                  <img
                    className="img-responsive"
                    src={loft}
                    width="360"
                    height="360"
                    alt="listing_type"
                  />
                </Link>
              </div>
            </div>
          
          </div>
        </div>
        <div className=" loadmore text-center">
          <Link to="listing" className="btn btn-primary btn-long">
            Find More Places to Rent{" "}
          </Link>
        </div>
        <div style={{ clear: "both", width: "100%", height: "80px" }}></div>
      </div>
    </div>
  );
};
export default FindPlace;
