import React, { useState } from "react";

import SearchBar from "../../Reusable/SearchBar";
import Footer from "../../Reusable/Footer";
import Datetime from "react-datetime";
import ImageUploader from "react-images-upload";
import MultipleImageUploadComponent from "./MultipleImageUpload";

import "../../../../node_modules/react-datetime/css/react-datetime.css";

import "./AppartmentEntryForm.css";

const AppartmentEntryForm = () => {
  const [state, setState] = useState({
    pictures: [],
    imgSrc: "",
    files: [],
  });
  function onDrop(picture) {
    state.pictures.push(picture);
    console.log(state.pictures);
  }

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
                type="name"
                id="fname"
                name="firstname"
                placeholder="Appartmemt Name"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname">No. of Bedroom</label>
            </div>
            <div class="col-75">
              <input type="number" id="fname" name="bedroom" placeholder="1" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname">No. of Bathrooms</label>
            </div>
            <div class="col-75">
              <input
                type="number"
                id="fname"
                name="firstname"
                placeholder="1"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Address 1</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="address1"
                placeholder="Ney York"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Address 2</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="address2"
                placeholder="Street 23"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Type</label>
            </div>
            <div class="col-75">
              <select id="country" name="country">
                <option value="australia">House</option>
                <option value="canada">Appartment</option>
                <option value="usa">Hotel Room</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Is Available?</label>
            </div>
            <div class="col-75">
              <input
                type="checkbox"
                id="lname"
                name="available"
                placeholder="Street 23"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Is Furnished?</label>
            </div>
            <div class="col-75">
              <input
                type="checkbox"
                id="lname"
                name="furnished"
                placeholder="Street 23"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="lname">Is Featured?</label>
            </div>
            <div class="col-75">
              <input
                type="checkbox"
                id="lname"
                name="featured"
                placeholder="Street 23"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Select Date and Time</label>
            </div>
            <div class="col-75">
              <Datetime />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Upload Images</label>
            </div>
            <div class="col-75">
              <MultipleImageUploadComponent />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Description</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="description"
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
