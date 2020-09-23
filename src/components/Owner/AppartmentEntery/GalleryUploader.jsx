import React from "react";

import Footer from "../../Reusable/Footer";
import Header from "../../Reusable/header";

import MultipleImageUploadComponent from "./MultipleImageUpload";
const GalleryUploader = () => {
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div style={{ paddingTop: "150px", paddingBottom: "150px" }}>
        <div className="text-center">
          <h2>Upload Appartment Images</h2>
          <p>Build your gallery to attract customers.</p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-100">
              <MultipleImageUploadComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GalleryUploader;
