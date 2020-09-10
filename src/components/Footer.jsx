import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  const description =
    "guestco is a powerful booking platform that lets you run a residential or commercial rental business online with no hassle";
  const address = "142 Bay Rd, Miami Beach, FL 33139";
  const phone = "800 987 65434";
  const fax = "876 654 23624";
  const email = " guestco@email.com";
  return (
    <footer className="footer-wrap footer whitebg">
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
                  <p>{description}</p>
                  <p className="read">
                    <Link to="#">
                      Read more <i className="fa fa-caret-right"></i>
                    </Link>
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
                      <Link to="#">Apartment</Link>
                    </li>
                    <li>
                      <Link to="#">Bed &amp; Breakfast</Link>
                    </li>
                    <li>
                      <Link to="#">Condo</Link>
                    </li>
                    <li>
                      <Link to="#">House</Link>
                    </li>
                    <li>
                      <Link to="#">Loft</Link>
                    </li>
                    <li>
                      <Link to="#">Studio</Link>
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
                      <Link to="index.html" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li
                      id="menu-item-1363"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363"
                    >
                      <Link to="about-guestco/index.html">About</Link>
                    </li>
                    <li
                      id="menu-item-1364"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364"
                    >
                      <Link to="blog/index.html">Blog and Press</Link>
                    </li>
                    <li
                      id="menu-item-1830"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1830"
                    >
                      <Link to="half-map/index.html">Listings</Link>
                    </li>
                    <li
                      id="menu-item-1362"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1362"
                    >
                      <Link to="frequently-asked-questions/index.html">
                        Help
                      </Link>
                    </li>
                    <li
                      id="menu-item-1361"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361"
                    >
                      <Link to="contact-us/index.html">Contact us</Link>
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
                      <i className="fa fa-map-marker"></i> {address}
                    </li>
                    <li>
                      <i className="fa fa-phone-square"></i> {phone}
                    </li>
                    <li>
                      <i className="fa fa-fax"></i> {fax}
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>{" "}
                      <Link to="mailto:$email">{email}</Link>
                    </li>
                    <li>
                      <i className="fa fa-arrow-circle-o-right"></i>{" "}
                      <Link to="#">Contact us</Link>
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
                  <Link className="btn-bg-facebook" target="_blank" to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link className="btn-bg-twitter" target="_blank" to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link className="btn-bg-linkedin" target="_blank" to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link className="btn-bg-google-plus" target="_blank" to="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                  <Link className="btn-bg-instagram" target="_blank" to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link className="btn-bg-pinterest" target="_blank" to="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                  <Link className="btn-bg-yelp" target="_blank" to="#">
                    <i className="fa fa-yelp"></i>
                  </Link>
                  <Link className="btn-bg-youtube" target="_blank" to="#">
                    <i className="fa fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
