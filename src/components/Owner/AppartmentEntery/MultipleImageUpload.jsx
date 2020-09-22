import React, { Component } from "react";

import axios from "axios";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
export default class MultipleImageUploadComponent extends Component {
  appartment_id = 0;
  fileObj = [];
  fileArray = [];
  j = 0;
  constructor(props) {
    super(props);

    this.appartment_id = sessionStorage.getItem("appartment_id");
    console.log("APPARTMENT_ID", this.appartment_id);

    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[this.j].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[this.j][i]));
    }
    this.setState({ file: this.fileArray });

    let formData = new FormData(); //formdata object
    formData.append("apartment_id", this.appartment_id); //append the values with key, value pair
    formData.append("image", e.target.files[0]);
    axios
      .post("http://18.223.32.178:3000/admin/postimage", formData)
      .then((response) => {
        console.log("Response from upload", response);
      });

    console.log("FILE", this.fileObj[this.j]);

    this.j++;
  }

  uploadFiles(e) {
    e.preventDefault();
    //console.log(this.state.file);
    toast.success("files uploaded successfuly");
  }

  render() {
    return (
      <form>
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
        <div id="gallery-section" class="gallery-section">
          <div class="block">
            <div class="featured-image-wrap featured-slide-gallery-wrap clearfix">
              {this.fileArray.map((url, i) => (
                <a href=".#" className="swipebox">
                  <img key={i} src={url} alt="..." />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      </form>
    );
  }
}
