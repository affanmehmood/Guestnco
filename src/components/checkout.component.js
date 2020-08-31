import React, { Component } from 'react';
import imgone from '../images/appartment.jpg';
import imgtwo from '../images/breakfast.jpg';
import imgthree from '../images/image-3.jpg';
import imgfour from '../images/image-3.jpg';
import imgfive from '../images/image-3.jpg';
import imgsix from '../images/studio.jpg';
import imgseven from '../images/listing-image-4.jpg';
import imgeight from '../images/person.jpg';







class Checkout extends Component{

  render() {
    return (
     <div>
      <div id="guesco-main-search" className="main-search " data-sticky="0">
            <div className="container-fluid">
                <form className="clearfix">
                    <div id="search-desktop" className="search-wrap hidden-sm hidden-xs">
                        <div className="search-destination">
                            <input type="text" name="location_search" autocomplete="off" value="" className="form-control input-search" placeholder="City"/>
                        </div>
                        <div className="search-guests search-budget-js">
                            <input type="text" name="" autocomplete="off" value="" className="form-control" placeholder="Budget"/>
                        </div>
                        <div className="search-date-range main-search-date-range-js">
                            <div className="search-date-range-arrive">
                                <input type="text" autocomplete="off" name="arrive" value="" className="form-control" placeholder="Check In"/>
                            </div>
                            <div className="search-date-range-depart">
                                <input type="text" autocomplete="off" name="depart" value="" className="form-control" placeholder="Check Out"/>
                            </div>
                        </div>
                        
                        <div className="search-button">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div> 
                    <div className="search-wrap search-banner-mobile">
                        <div className="search-destination">
                            <input value="" type="text" className="form-control" placeholder="Where to go?" onfocus="blur();"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <div id="section-body">
        <section className="main-content-area whitebg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="page-title">
                            <div className="block-top-title">
                                <ol className="breadcrumb">
                                    <li><a href="../index.html"><span>Home</span></a></li>
                                    <li className="active">Checkout</li>
                                </ol>
                                <h1 className="listing-title">Checkout</h1>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div>
            <div className="container">
                <div className="">
                    <div className="checkout-wrapper">
                        <div className="row">
                            <div className="col-md-8 col-xs-12">
                                <div className="form-wrapper">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">First Name</label>
                                                    <input type="text" name="username" className="form-control " placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">Last Name</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">Email</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">Phone Number</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">City</label>
                                                    <input type="text" name="username" className="form-control " placeholder="City"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">State</label>
                                                    <input type="text" name="username" className="form-control " placeholder="State"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">Zip Code</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Zip Code"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="">Company name (Optional)</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Company name (Optional)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="">Address</label>
                                                    <input type="text" name="username" className="form-control " placeholder="Address"/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="checkout-right-wrapper">
                                    <h3>Checkout Details</h3>
                                    <div className="checkout-table">
                                        <table className="table table-striped" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <thead>
                                                <tr>
                                                    <th>Left Label</th>
                                                    <th className="text-right">Right Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Left</td>
                                                    <td className="text-right">Right</td>
                                                </tr>
                                                <tr>
                                                    <td>Left</td>
                                                    <td className="text-right">Right</td>
                                                </tr>
                                                <tr>
                                                    <td>Left</td>
                                                    <td className="text-right">Right</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td><strong>Total</strong></td>
                                                    <td className="text-right"><strong>123$</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="checkbox ">
                                        <label>
                                            <input name="remember" type="checkbox"/> I agree text </label>
                                    </div>

                                  <div className="text-center">
                                    <a href="#" className="btn btn-primary btn-long">
                                    
                                        Checkout </a>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <p className="read"><a href="#">Read more <i className="fa fa-caret-right"></i></a></p>
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
                                        <a href="#">Apartment</a></li>
                                    <li>
                                        <a href="#">Bed &amp; Breakfast</a></li>
                                    <li>
                                        <a href="#">Condo</a></li>
                                    <li>
                                        <a href="#">House</a></li>
                                    <li>
                                        <a href="#">Loft</a></li>
                                    <li>
                                        <a href="#">Studio</a></li>
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
                                    <li id="menu-item-1829" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-493 current_page_item menu-item-1829"><a href="index.html" aria-current="page">Home</a></li>
                                    <li id="menu-item-1363" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363"><a href="about-guestco/index.html">About</a></li>
                                    <li id="menu-item-1364" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364"><a href="blog/index.html">Blog and Press</a></li>
                                    <li id="menu-item-1830" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1830"><a href="half-map/index.html">Listings</a></li>
                                    <li id="menu-item-1362" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1362"><a href="frequently-asked-questions/index.html">Help</a></li>
                                    <li id="menu-item-1361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361"><a href="contact-us/index.html">Contact us</a></li>
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
                                    <li><i className="fa fa-envelope-o"></i> <a href="mailto:guestco@email.com">guestco@email.com</a></li>
                                    <li><i className="fa fa-arrow-circle-o-right"></i> <a href="#">Contact us</a></li>
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
                                <a className="btn-bg-facebook" target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                <a className="btn-bg-twitter" target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                <a className="btn-bg-linkedin" target="_blank" href="#"><i className="fa fa-linkedin"></i></a>
                                <a className="btn-bg-google-plus" target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                                <a className="btn-bg-instagram" target="_blank" href="#"><i className="fa fa-instagram"></i></a>
                                <a className="btn-bg-pinterest" target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
                                <a className="btn-bg-yelp" target="_blank" href="#"><i className="fa fa-yelp"></i></a>
                                <a className="btn-bg-youtube" target="_blank" href="#"><i className="fa fa-youtube"></i></a>
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
export default Checkout