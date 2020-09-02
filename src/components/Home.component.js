import React, { Component } from "react";
import imgone from "../images/appartment.jpg";
import imgtwo from "../images/breakfast.jpg";
import imgthree from "../images/image-3.jpg";
import imgfour from "../images/image-3.jpg";
import imgfive from "../images/image-3.jpg";
import imgsix from "../images/studio.jpg";
import imgeight from "../images/person.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="section-body">
          <section className="top-banner-wrap">
            <div className="banner-caption ">
              <div className="search-wrap search-banner search-banner-desktop hidden-xs">
                <form className="clearfix">
                  <div className="search-destination">
                    <input
                      type="text"
                      name="location_search"
                      autocomplete="off"
                      value=""
                      className="form-control input-search"
                      placeholder="City"
                    />
                  </div>
                  <div className="search-guests search-budget-js">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value=""
                      className="form-control"
                      placeholder="Budget"
                    />
                  </div>
                  <div className="search-date-range main-search-date-range-js">
                    <div className="search-date-range-arrive">
                      <input
                        type="text"
                        autocomplete="off"
                        name="arrive"
                        value=""
                        className="form-control"
                        placeholder="Check In"
                      />
                    </div>
                    <div className="search-date-range-depart">
                      <input
                        type="text"
                        autocomplete="off"
                        name="depart"
                        value=""
                        className="form-control"
                        placeholder="Check Out"
                      />
                    </div>
                  </div>
                  <div className="search-button">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.history.push("/search");
                      }}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="search-wrap search-banner search-banner-mobile">
                <form className="clearfix">
                  <div className="search-destination">
                    <input
                      value=""
                      type="text"
                      className="form-control"
                      placeholder="City?"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="main-content-area">
            <div className="whitebg">
              <div className="container">
                <div className="clearfix"></div>
                <div className="module-title  text-center ">
                  <h2>Find a Place That Fits Your Comfort</h2>
                  <p className="sub-heading"></p>
                </div>
                <div className="clearfix"></div>
                <div className="taxonomy-grid taxonomy-grid-2">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">Apartment</div>
                          <img
                            className="img-responsive"
                            src={imgone}
                            width="555"
                            height="262"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">
                            Bed &amp; Breakfast
                          </div>
                          <img
                            className="img-responsive"
                            src={imgtwo}
                            width="360"
                            height="360"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">Condo</div>
                          <img
                            className="img-responsive"
                            src={imgthree}
                            width="360"
                            height="360"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">House</div>
                          <img
                            className="img-responsive"
                            src={imgfour}
                            width="360"
                            height="360"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">Loft</div>
                          <img
                            className="img-responsive"
                            src={imgfive}
                            width="360"
                            height="360"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="taxonomy-item taxonomy-card">
                        <Link
                          to="accesslisting"
                          className="taxonomy-link hover-effect"
                        >
                          <div className="taxonomy-title">Studio</div>
                          <img
                            className="img-responsive"
                            src={imgsix}
                            width="555"
                            height="262"
                            alt="listing_type"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" loadmore text-center">
                  <Link
                    tp="/accesslisting"
                    className="btn btn-primary btn-long"
                  >
                    Find More Places to Rent{" "}
                  </Link>
                </div>
                <div classNameName="clearfux"></div>
              </div>
            </div>
          </section>
        </div>

        <div className="whitebg">
          <div className="container">
            <div className="clearfix"></div>

            <div className="module-title  text-center ">
              <h2>Hear From Our Hosts</h2>
              <p className="sub-heading">
                The biggest reward is to satisfy our clients and share their
                experience with us
              </p>
            </div>
            <div className="clearfix"></div>
            <div className="module-wrap testimonials-module">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="testimonial-item text-center">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer eu mollis eros.
                    </p>
                    <div className="testimonial-thumb">
                      <img
                        width="120"
                        height="120"
                        src={imgeight}
                        className="img-circle img-responsive"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="auther-info">
                      <strong>Anna Andrews</strong>
                      <br />
                      <em>guestco Host</em>
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="testimonial-item text-center">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer eu mollis eros.
                    </p>
                    <div className="testimonial-thumb">
                      <img
                        width="120"
                        height="120"
                        src={imgeight}
                        className="img-circle img-responsive"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="auther-info">
                      <strong>Anna Andrews</strong>
                      <br />
                      <em>guestco Host</em>
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="testimonial-item text-center">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer eu mollis eros.
                    </p>
                    <div className="testimonial-thumb">
                      <img
                        width="120"
                        height="120"
                        src={imgeight}
                        className="img-circle img-responsive"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="auther-info">
                      <strong>Anna Andrews</strong>
                      <br />
                      <em>guestco Host</em>
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="testimonial-item text-center">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer eu mollis eros.
                    </p>
                    <div className="testimonial-thumb">
                      <img
                        width="120"
                        height="120"
                        src={imgeight}
                        className="img-circle img-responsive"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="auther-info">
                      <strong>Anna Andrews</strong>
                      <br />
                      <em>guestco Host</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-wrap footer">
          <div className="footer-top-wrap">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div
                    id="guestco_about_widget-7"
                    className="widget footer-widget widget-about"
                  >
                    <div className="widget-body">
                      <p>Logo</p>
                      <p>
                        guestco is a powerful booking platform that lets you run
                        a residential or commercial rental business online with
                        no hassle
                      </p>
                      <p className="read">
                        <a href="#">
                          Read more <i className="fa fa-caret-right"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div
                    id="guestco_taxonomies-7"
                    className="widget footer-widget widget-categories"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Explore</h3>
                    </div>
                    <div className="widget-body">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Apartment</a>
                        </li>
                        <li>
                          <a href="#">Bed &amp; Breakfast</a>
                        </li>
                        <li>
                          <a href="#">Condo</a>
                        </li>
                        <li>
                          <a href="#">House</a>
                        </li>
                        <li>
                          <a href="#">Loft</a>
                        </li>
                        <li>
                          <a href="#">Studio</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div
                    id="nav_menu-2"
                    className="widget footer-widget widget_nav_menu"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Company</h3>
                    </div>
                    <div className="menu-footer-nav-container">
                      <ul id="menu-footer-nav" className="menu">
                        <li
                          id="menu-item-1829"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-493 current_page_item menu-item-1829"
                        >
                          <a href="index.html" aria-current="page">
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-1363"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363"
                        >
                          <a href="about-guestco/index.html">About</a>
                        </li>
                        <li
                          id="menu-item-1364"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364"
                        >
                          <a href="blog/index.html">Blog and Press</a>
                        </li>
                        <li
                          id="menu-item-1830"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1830"
                        >
                          <a href="half-map/index.html">Listings</a>
                        </li>
                        <li
                          id="menu-item-1362"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1362"
                        >
                          <a href="frequently-asked-questions/index.html">
                            Help
                          </a>
                        </li>
                        <li
                          id="menu-item-1361"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361"
                        >
                          <a href="contact-us/index.html">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div
                    id="guestco_contact-7"
                    className="widget footer-widget widget-contact"
                  >
                    <div className="widget-top">
                      <h3 className="widget-title">Contact Us</h3>
                    </div>
                    <div className="widget-body">
                      <div className="contact_text"></div>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker"></i> 142 Bay Rd, Miami
                          Beach, FL 33139
                        </li>
                        <li>
                          <i className="fa fa-phone-square"></i> 800 987 6543
                        </li>
                        <li>
                          <i className="fa fa-fax"></i> 876 654 2362
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>{" "}
                          <a href="mailto:guestco@email.com">
                            guestco@email.com
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-arrow-circle-o-right"></i>{" "}
                          <a href="#">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrap">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="footer-copyright">
                    guestco - All rights reserved
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="social-footer">
                    <div className="social-icons social-round">
                      <a className="btn-bg-facebook" target="_blank" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="btn-bg-twitter" target="_blank" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="btn-bg-linkedin" target="_blank" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a
                        className="btn-bg-google-plus"
                        target="_blank"
                        href="#"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a className="btn-bg-instagram" target="_blank" href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a className="btn-bg-pinterest" target="_blank" href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a className="btn-bg-yelp" target="_blank" href="#">
                        <i className="fa fa-yelp"></i>
                      </a>
                      <a className="btn-bg-youtube" target="_blank" href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;
