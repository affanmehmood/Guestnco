import React from "react";

import SearchBar from "../../Reusable/SearchBar";
import Footer from "../../Reusable/Footer";

import "./AppartmentEntryForm.css";

const AppartmentEntryForm = () => {
  return (
    <div style={{ paddingTop: "130px" }}>
      <SearchBar />
      <div className="text-center">
        <h2>Add Appartment</h2>
        <p>Add details about your appartment.</p>
      </div>

      <div class="container">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="fname">Appartment Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Appartmemt Name"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">City</label>
            </div>
            <div class="col-75">
              <input type="text" id="lname" name="lastname" placeholder="NY" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">State</label>
            </div>
            <div class="col-75">
              <select id="country" name="country">
                <option value="australia">Calafornia</option>
                <option value="canada">Taxas</option>
                <option value="usa">Mississippi</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Description</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default AppartmentEntryForm;
