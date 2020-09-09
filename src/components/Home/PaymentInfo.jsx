import React from "react";

import payment1 from "../../images/payment-icon-1.png";
import payment2 from "../../images/payment-icon-2.png";
import payment3 from "../../images/payment-icon-3.png";

import { Link } from "react-router-dom";
const PaymentInfo = () => {
  return (
    <div className="payment-homepage">
      <div className="container">
        <div className="service-blocks-main services-module three_columns style_one">
          <div className="row no-margin">
            <div className="module-item">
              <div className="service-block">
                <div className="block-icon">
                  <img
                    width="60"
                    height="60"
                    src={payment1}
                    className="attachment-thumbnail size-thumbnail"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="block-content">
                  <h3>Payment Gateways</h3>
                  <p>
                    Receive reservation payments with PayPal and Stripe. Homey
                    fully supports popular payment solutions.
                  </p>
                  <Link to="#" className="read-more">
                    Find More
                  </Link>
                </div>
              </div>
            </div>
            <div className="module-item">
              <div className="service-block">
                <div className="block-icon">
                  <img
                    width="60"
                    height="60"
                    src={payment2}
                    className="attachment-thumbnail size-thumbnail"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="block-content">
                  <h3>PayPal Integration</h3>
                  <p>
                    Connect to your PayPal account (with just a few clicks) and
                    you are ready to receive money with no hassle.
                  </p>
                  <Link to="#" className="read-more">
                    Find More
                  </Link>
                </div>
              </div>
            </div>
            <div className="module-item">
              <div className="service-block">
                <div className="block-icon">
                  <img
                    width="60"
                    height="60"
                    src={payment3}
                    className="attachment-thumbnail size-thumbnail"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="block-content">
                  <h3>Stripe Integration</h3>
                  <p>
                    Start accepting customer payments with Stripe and start
                    processing credit and debit cards professionally.
                  </p>
                  <Link to="#" className="read-more">
                    Find More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentInfo;
