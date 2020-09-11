import React from "react";

import "./PaymentCard.css";

const PartnerCard = () => {
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <div className="text-center">
        <h5 class="headingTop text-center d-flex justify-content-center">
          Select Your Payment Method
        </h5>
      </div>
      <div  class="container-fluid payment-container">
        <div class="row">
          <div class=" d-flex justify-content-center">
            <div class="paymentWrap">
              <div
                class="btn-group paymentBtnGroup btn-group-justified"
                data-toggle="buttons"
              >
                <label class="btn paymentMethod active">
                  <div class="method visa"></div>
                  <input type="radio" name="options" checked />
                </label>
                <label class="btn paymentMethod">
                  <div class="method master-card"></div>
                  <input type="radio" name="options" />
                </label>
                <label class="btn paymentMethod">
                  <div class="method amex"></div>
                  <input type="radio" name="options" />
                </label>
                <label class="btn paymentMethod">
                  <div class="method vishwa"></div>
                  <input type="radio" name="options" />
                </label>
                <label class="btn paymentMethod">
                  <div class="method ez-cash"></div>
                  <input type="radio" name="options" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnerCard;
