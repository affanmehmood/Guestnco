import React, { Component } from 'react';
import imgone from '../images/appartment.jpg';
import imgtwo from '../images/breakfast.jpg';
import imgthree from '../images/image-3.jpg';
import imgfour from '../images/image-3.jpg';
import imgfive from '../images/image-3.jpg';
import imgsix from '../images/studio.jpg';
import imgeight from '../images/person.jpg';
import propertyimage from '../images/listing-image-2.jpg';
import propertyimage1 from '../images/listing-image-1.jpg';
import propertyimage3 from '../images/listing-image-3.jpg';
import propertyimage4 from '../images/listing-image-4.jpg';
import appartment from '../images/appartment.jpg';
import breakfast from '../images/breakfast.jpg';
import image3 from '../images/image3.jpg';





import { Link } from 'react-router-dom';
class Home extends Component{
    
  render() {
    return (
     <div>

<div id="section-body">
<section class="top-banner-wrap">
            <div class="banner-caption ">
                <div class="search-wrap search-banner search-banner-desktop hidden-xs">
                    <form class="clearfix" action="" method="GET">
                        <div class="search-destination">
                            <input type="text" name="location_search" autocomplete="off" value="" class="form-control input-search" placeholder="City" />
                        </div>
                        <div class="search-guests search-budget-js">
                            <input type="text" name="" autocomplete="off" value="" class="form-control" placeholder="Budget" />
                        </div>
                        <div class="search-date-range main-search-date-range-js">
                            <div class="search-date-range-arrive">
                                <input type="text" autocomplete="off" name="arrive" value="" class="form-control" placeholder="Check In" />
                            </div>
                            <div class="search-date-range-depart">
                                <input type="text" autocomplete="off" name="depart" value="" class="form-control" placeholder="Check Out" />
                            </div>
                        </div>
                        <div class="search-button">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
                <div class="search-wrap search-banner search-banner-mobile">
                    <form class="clearfix">
                        <div class="search-destination">
                            <input value="" type="text" class="form-control" placeholder="City?" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className="main-content-area">
            <div className="graybg">
                <div className="container">
                    <div style={{clear:"both", width:"100%", height:"50px"}}></div>
                    <div className="guestco-module module-title section-title-module text-left ">
                        <h2>Our Featured Homes</h2>
                        <p className="sub-heading">Hand-picked selection of quality places</p>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
                    <div className="">
                        <div className="featured-wrapper item-grid-view">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage} className="img-responsive" alt="" loading="lazy" /> </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>65<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Affordable Urban Room</Link></h2>
                                                        <address className="item-address">398 Pete Pascale Pl, New York, NY 10029</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">1</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">1</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">2</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">Bed &amp; Breakfast</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> <span className="item-user-info">Hosted by
                                                        Andrew Garcia</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-271" to="#" data-listing_id="271">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="271">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li><span className="star-text-right">Excellent</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage1} className="img-responsivee" alt="" loading="lazy" />
                                                    </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>525<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Modern Apartment With Pool</Link></h2>
                                                        <address className="item-address">984 1st Avenue, New York, NY 10022</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">2</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">2</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">4</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">Apartment</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" />
                                                    <span className="item-user-info">Hosted by
                                                        Jerry Coleman</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-267" to="#" data-listing_id="267">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="267">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star-o"></li>
                                                                <li className="fa fa-star-o"></li>
                                                                <li><span className="star-text-right">Average</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage3} className="img-responsive " alt="" /> </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>455<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Spacious Family Home</Link></h2>
                                                        <address className="item-address">268 W 10th St, New York, NY 10014</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">3</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">2</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">6</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">House</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> <span className="item-user-info">Hosted by
                                                        Crystal Elliott</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-277" to="#" data-listing_id="277">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="277">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li><span className="star-text-right">Excellent</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage4} className="img-responsive " alt="" loading="lazy" /> </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>129<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Confy Designer Room</Link></h2>
                                                        <address className="item-address">369 Sumner Ave Brooklyn, NY 11221</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">1</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">2</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">2</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">Bed &amp; Breakfast</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> <span className="item-user-info">Hosted by
                                                        Rose Burke</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-283" to="#" data-listing_id="283">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="283">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li><span className="star-text-right">Excellent</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage1} className="img-responsivee" alt="" loading="lazy" />
                                                    </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>525<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Modern Apartment With Pool</Link></h2>
                                                        <address className="item-address">984 1st Avenue, New York, NY 10022</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">2</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">2</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">4</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">Apartment</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> <span className="item-user-info">Hosted by
                                                        Jerry Coleman</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-267" to="#" data-listing_id="267">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="267">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star-o"></li>
                                                                <li className="fa fa-star-o"></li>
                                                                <li><span className="star-text-right">Average</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="item-wrap infobox_trigger guestco-matchHeight">
                                        <div className="media property-item">
                                            <div className="media-left">
                                                <div className="item-media item-media-thumb">
                                                    <span className="label-wrap top-left">
                                                        <span className="label label-success label-featured">Featured</span>
                                                    </span>
                                                    <Link className="hover-effect" to="detailpage.html">
                                                        <img width="450" height="300" src={propertyimage3} className="img-responsive " alt="" /> </Link>
                                                    <div className="item-media-price">
                                                        <span className="item-price">
                                                            <sup>$</sup>455<sub>/night</sub>
                                                        </span>
                                                    </div>
                                                    <div className="item-user-image">
                                                        <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> </div>
                                                </div>
                                            </div>
                                            <div className="media-body item-body clearfix">
                                                <div className="item-title-head table-block">
                                                    <div className="title-head-left">
                                                        <h2 className="title"><Link to="detailpage.html">
                                                                Spacious Family Home</Link></h2>
                                                        <address className="item-address">268 W 10th St, New York, NY 10014</address>
                                                    </div>
                                                </div>
                                                <ul className="item-amenities">
                                                    <li>
                                                        <i className="fa fa-bed"></i> <span className="total-beds">3</span> <span className="item-label">Bedrooms</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-shower"></i> <span className="total-baths">2</span> <span className="item-label">Baths</span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-user"></i> <span className="total-guests">6</span> <span className="item-label">Guests</span>
                                                    </li>
                                                    <li className="item-type">House</li>
                                                </ul>
                                                <div className="item-user-image list-item-hidden">
                                                    <img width="36" height="36" src={imgeight} className="img-responsive img-circle" alt="" loading="lazy" /> <span className="item-user-info">Hosted by
                                                        Crystal Elliott</span>
                                                </div>
                                                <div className="item-footer">
                                                    <div className="footer-right">
                                                        <div className="item-tools">
                                                            <div className="btn-group dropup">
                                                                <button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <Link className="guestco_compare compare-277" to="#" data-listing_id="277">Compare</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className="add_fav" data-listid="277">
                                                                            Add to Favorite </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-left">
                                                        <div className="stars">
                                                            <ul className="list-inline rating">
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li className="fa fa-star"></li>
                                                                <li><span className="star-text-right">Excellent</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" loadmore text-center">
                                <Link to="listingpage.html" className="btn btn-primary btn-long">
                                    Learn More </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
                </div>
            </div>
            <div className="whitebg">
                <div className="container">
                    <div style={{clear:"both", width:"100%", height:"50px"}}></div>
                    <div className="module-title  text-center ">
                        <h2>Find a Place That Fits Your Comfort</h2>
                        <p className="sub-heading"></p>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
                    <div className="taxonomy-grid taxonomy-grid-2">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">Apartment</div>
                                        <img className="img-responsive" src="../images/appartment.jpg" width="555" height="262" alt="listing_type"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">Bed &amp; Breakfast</div>
                                        <img className="img-responsive" src="../images/breakfast.jpg" width="360" height="360" alt="listing_type"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">Condo</div>
                                        <img className="img-responsive" src="../images/image-3.jpg" width="360" height="360" alt="listing_type"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">House</div>
                                        <img className="img-responsive" src="../images/home.jpg" width="360" height="360" alt="listing_type"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">Loft</div>
                                        <img className="img-responsive" src="../images/loft.jpg" width="360" height="360" alt="listing_type"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="taxonomy-item taxonomy-card">
                                    <Link className="taxonomy-link hover-effect" to="listingpage.html">
                                        <div className="taxonomy-title">Studio</div>
                                        <img className="img-responsive" src="../images/studio.jpg" width="555" height="262" alt="listing_type"/>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" loadmore text-center">
                        <Link to="listingpage.html" className="btn btn-primary btn-long">
                            Find More Places to Rent </Link>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"80px"}}></div>
                </div>
            </div>
            <div className="payment-homepage" >
                <div className="container">
                    <div className="service-blocks-main services-module three_columns style_one">
                        <div className="row no-margin">
                            <div className="module-item">
                                <div className="service-block">
                                    <div className="block-icon"><img width="60" height="60" src="../images/payment-icon-1.png" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy"/></div>
                                    <div className="block-content">
                                        <h3>Payment Gateways</h3>
                                        <p>Receive reservation payments with PayPal and Stripe. Homey fully supports popular payment solutions.</p><Link to="#" className="read-more">Find More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="module-item">
                                <div className="service-block">
                                    <div className="block-icon"><img width="60" height="60" src="../images/payment-icon-2.png" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy"/></div>
                                    <div className="block-content">
                                        <h3>PayPal Integration</h3>
                                        <p>Connect to your PayPal account (with just a few clicks) and you are ready to receive money with no hassle.</p><Link to="#" className="read-more">Find More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="module-item">
                                <div className="service-block">
                                    <div className="block-icon"><img width="60" height="60" src="../images/payment-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy"/></div>
                                    <div className="block-content">
                                        <h3>Stripe Integration</h3>
                                        <p>Start accepting customer payments with Stripe and start processing credit and debit cards professionally.</p><Link to="#" className="read-more">Find More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="whitebg">
                <div className="container">
                    <div style={{clear:"both", width:"100%", height:"50px"}}></div>
                    <div className="module-title  text-center ">
                        <h2>Hear From Our Hosts</h2>
                        <p className="sub-heading">The biggest reward is to satisfy our clients and share their experience with us</p>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
          
                    <div className=" ">
                        
                    </div>
                    <div className="module-wrap testimonials-module">
                        <div className="featured-wrapper item-grid-view">
                            <div className="owl-carousel owl-theme testimonials-listing">
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                        <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                        <p className="auther-info"><strong>Anna Andrews</strong><em>guestco Host</em></p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <p className="description">Lorem ipsum dolor sit amet, adipiscing elit. Proin facilisis neque. Integer eu mollis. </p>
                                        <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                        <p className="auther-info"><strong>Harold Warren</strong><em>guestco Host</em></p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <p className="description">Proin facilisis neque. Integer eu mollis montem. Lorem ipsum dolor sit amet, adipiscing elit. </p>
                                        <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                        <p className="auther-info"><strong>Michelle Wright</strong><em>guestco Host</em></p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                    <p className="description">Proin facilisis neque. Integer eu mollis. Lorem ipsum dolor sit amet, adipiscing elit. </p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Mike Forward</strong><em>guestco Host</em></p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Anna Andrews</strong><em>guestco Host</em></p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, adipiscing elit. Proin facilisis neque. Integer eu mollis. </p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Harold Warren</strong><em>guestco Host</em></p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-item text-center">
                                    <p className="description">Proin facilisis neque. Integer eu mollis montem. Lorem ipsum dolor sit amet, adipiscing elit. </p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Michelle Wright</strong><em>guestco Host</em></p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-item text-center">
                                <p className="description">Proin facilisis neque. Integer eu mollis. Lorem ipsum dolor sit amet, adipiscing elit. </p>
                                <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                <p className="auther-info"><strong>Mike Forward</strong><em>guestco Host</em></p>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                  
                    <div style={{clear:"both", width:"100%", height:"50px"}}></div>
                </div>
            </div>
            <div className="graybg">
                <div className="container">
                    <div style={{clear:"both", width:"100%", height:"50px"}}></div>
                    <div className="guestco-module module-title section-title-module text-left ">
                        <h2>Our Partners</h2>
                        <p className="sub-heading">We only work with the best companies around the globe</p>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
                    <div className="">
                        <div className="featured-wrapper item-grid-view">
                            <div className="owl-carousel owl-theme clients-listing">
                                <div className="item">
                                    <div className="partner-item text-center">
                                        <div className="partner-thumb">
                                            <Link target="_blank" to="#">
                                                <img width="285" height="160" src="../images/logo-1.jpg" className="img-responsive wp-post-image" alt="" loading="lazy" /> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="partner-item text-center">
                                        <div className="partner-thumb">
                                            <Link target="_blank" to="#">
                                                <img width="285" height="160" src="../images/logo-1.jpg" className="img-responsive wp-post-image" alt="" loading="lazy" /> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="partner-item text-center">
                                        <div className="partner-thumb">
                                            <Link target="_blank" to="#">
                                                <img width="285" height="160" src="../images/logo-1.jpg" className="img-responsive wp-post-image" alt="" loading="lazy" /> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="partner-item text-center">
                                        <div className="partner-thumb">
                                            <Link target="_blank" to="#">
                                                <img width="285" height="160" src="../images/logo-1.jpg" className="img-responsive wp-post-image" alt="" loading="lazy" /> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="partner-item text-center">
                                        <div className="partner-thumb">
                                            <Link target="_blank" to="#">
                                                <img width="285" height="160" src="../images/logo-1.jpg" className="img-responsive wp-post-image" alt="" loading="lazy" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{clear:"both", width:"100%", height:"30px"}}></div>
                </div>
            </div>
        </section>
    </div>

    <footer className="footer-wrap footer">
        <div className="footer-top-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div id="guestco_about_widget-7" className="widget footer-widget widget-about">
                            <div className="widget-body">
                                <p>
                                    Logo
                                </p>
                                <p>guestco is a powerful booking platform that lets you run a residential or commercial rental business online with no hassle</p>
                                <p className="read"><Link to="#">Read more <i className="fa fa-caret-right"></i></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div id="guestco_taxonomies-7" className="widget footer-widget widget-categories">
                            <div className="widget-top">
                                <h3 className="widget-title">Explore</h3>
                            </div>
                            <div className="widget-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#">Apartment</Link></li>
                                    <li>
                                        <Link to="#">Bed &amp; Breakfast</Link></li>
                                    <li>
                                        <Link to="#">Condo</Link></li>
                                    <li>
                                        <Link to="#">House</Link></li>
                                    <li>
                                        <Link to="#">Loft</Link></li>
                                    <li>
                                        <Link to="#">Studio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div id="nav_menu-2" className="widget footer-widget widget_nav_menu">
                            <div className="widget-top">
                                <h3 className="widget-title">Company</h3>
                            </div>
                            <div className="menu-footer-nav-container">
                                <ul id="menu-footer-nav" className="menu">
                                    <li id="menu-item-1829" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-493 current_page_item menu-item-1829"><Link to="index.html" aria-current="page">Home</Link></li>
                                    <li id="menu-item-1363" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363"><Link to="about-guestco/index.html">About</Link></li>
                                    <li id="menu-item-1364" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364"><Link to="blog/index.html">Blog and Press</Link></li>
                                    <li id="menu-item-1830" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1830"><Link to="half-map/index.html">Listings</Link></li>
                                    <li id="menu-item-1362" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1362"><Link to="frequently-asked-questions/index.html">Help</Link></li>
                                    <li id="menu-item-1361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361"><Link to="contact-us/index.html">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div id="guestco_contact-7" className="widget footer-widget widget-contact">
                            <div className="widget-top">
                                <h3 className="widget-title">Contact Us</h3>
                            </div>
                            <div className="widget-body">
                                <div className="contact_text"></div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-map-marker"></i> 142 Bay Rd, Miami Beach, FL 33139</li>
                                    <li><i className="fa fa-phone-square"></i> 800 987 6543</li>
                                    <li><i className="fa fa-fax"></i> 876 654 2362</li>
                                    <li><i className="fa fa-envelope-o"></i> <Link to="mailto:guestco@email.com">guestco@email.com</Link></li>
                                    <li><i className="fa fa-arrow-circle-o-right"></i> <Link to="#">Contact us</Link></li>
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
                                <Link className="btn-bg-facebook" target="_blank" to="#"><i className="fa fa-facebook"></i></Link>
                                <Link className="btn-bg-twitter" target="_blank" to="#"><i className="fa fa-twitter"></i></Link>
                                <Link className="btn-bg-linkedin" target="_blank" to="#"><i className="fa fa-linkedin"></i></Link>
                                <Link className="btn-bg-google-plus" target="_blank" to="#"><i className="fa fa-google-plus"></i></Link>
                                <Link className="btn-bg-instagram" target="_blank" to="#"><i className="fa fa-instagram"></i></Link>
                                <Link className="btn-bg-pinterest" target="_blank" to="#"><i className="fa fa-pinterest"></i></Link>
                                <Link className="btn-bg-yelp" target="_blank" to="#"><i className="fa fa-yelp"></i></Link>
                                <Link className="btn-bg-youtube" target="_blank" to="#"><i className="fa fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </footer>
 </div>
     
    )

  }
}
export default Home