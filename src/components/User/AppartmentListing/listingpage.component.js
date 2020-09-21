import React from "react";

import AppartmentList from "./AppartmentList";
import SearchBar from "../../Reusable/SearchBar";
import Featured from "./Featured";
import Explore from "./Explore";
import LatestReviews from "./LatestReviews";
import LatestPosts from "./LatestPosts";
import Footer from "../../Reusable/Footer";
import Header from "../../Reusable/header";

const Listingpage = () => {
  return (
    <div>
      <div className="inner-page">
        <Header />
      </div>
      <div>
        <title>Listing Result</title>
      </div>
      <div>
        <SearchBar />
        <div id="section-body">
          <section class="main-content-area">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="page-title">
                    <div class="block-top-title">
                      <ol class="breadcrumb">
                        <li>
                          <a href="/">
                            <span>Home</span>
                          </a>
                        </li>
                        <li class="active">Listing</li>
                      </ol>
                      <h1 class="listing-title">Listing</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <AppartmentList />
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 guesco_sticky">
                  <div class="sidebar right-sidebar">
                    <div
                      id="mc4wp_form_widget-2"
                      class="widget widget_mc4wp_form_widget"
                    >
                      <div class="widget-top">
                        <h3 class="widget-title">Newsletter Sign Up!</h3>
                      </div>
                      <form
                        id="mc4wp-form-1"
                        class="mc4wp-form mc4wp-form-1282"
                        method="post"
                        data-id="1282"
                        data-name=""
                      >
                        <div class="mc4wp-form-fields">
                          <p style={{ marginTop: "20px" }}>
                            guesco is a powerful booking platform that lets you
                            run a residential or commercial rental business
                            online with no hassle
                          </p>
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                class="form-control mb-10"
                                type="email"
                                name="EMAIL"
                                required
                                placeholder="Enter your email"
                              />
                            </div>
                            <div class="col-sm-12">
                              <button
                                type="submit"
                                class="btn btn-primary btn-full-width"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <Featured />
                    <Explore />
                    <LatestReviews />
                    <LatestPosts />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/custom.js"></script>
      </div>
    </div>
  );
};
export default Listingpage;
