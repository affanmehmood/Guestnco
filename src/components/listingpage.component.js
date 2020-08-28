import React, { Component } from 'react';
import imgone from '../images/appartment.jpg';
import imgtwo from '../images/breakfast.jpg';
import imgthree from '../images/image-3.jpg';
import imgfour from '../images/image-3.jpg';
import imgfive from '../images/image-3.jpg';
import imgsix from '../images/studio.jpg';
import imgseven from '../images/listing-image-4.jpg';
import imgeight from '../images/person.jpg';



class Listingpage extends Component{

  render() {
    return (
     <div>
      <div className="nav-area header-type-1">
      
      <header id="guestco_nav_sticky" className="header-nav hidden-sm hidden-xs">
          <div className="container-fluid">
              <div className="header-inner table-block">
                  <div className="header-comp-logo">
                      <h1>
                          <a className="guestco_logo" href="javascript:void(0)">
                              Logo
                          </a>
                      </h1>
                  </div>
                  <div className="header-comp-nav text-right">
                      <nav className="navi">
                          <ul id="main-menu" className="main-menu">
                              <li><a href="javascript:void(0)">Home</a></li>
                              <li><a href="javascript:void(0)">About</a></li>
                              <li><a href="javascript:void(0)">Menu Item</a></li>
                              <li><a href="javascript:void(0)">Menu Item 2</a></li>
                              <li><a href="javascript:void(0)">Menu Item 3</a></li>
                              <li><a href="javascript:void(0)">Menu Item 4</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div className="header-comp-right">
                      <div className="account-login">
                          <ul className="login-register list-inline">
                              <li><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-login">Login</a></li>
                              <li><i className="fa fa-circle-o"></i></li>
                              <li><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-register">Register</a></li>
                          </ul>
                          <a href="javascript:void(0)" className="btn btn-add-new-listing">Become a Host</a>
                      </div>
                  </div>
              </div>
          </div>
      </header>
 
      <header className="header-nav header-mobile hidden-md hidden-lg">
          <div className="header-mobile-wrap">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-3">
                          <button type="button" className="btn btn-mobile-nav mobile-main-nav" data-toggle="collapse" data-target="#mobile-nav" aria-expanded="false">
                              <i className="fa fa-bars" aria-hidden="true"></i>
                          </button> 
                      </div>
                      <div className="col-xs-6">
                          <div className="mobile-logo text-center">
                              <h1>
                                  <a href="javascript:void(0)">
                                      Logo
                                  </a>
                              </h1>
                          </div> 
                      </div>
                      <div className="col-xs-3">
                          <div className="user-menu text-right">
                              <button type="button" className="btn btn-mobile-nav user-mobile-nav" data-toggle="collapse" data-target="#user-nav" aria-expanded="false">
                                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                  <span className="user-alert"></span> </button>
                          </div> 
                      </div>
                  </div> 
              </div> 
          </div> 
          <div className="container">
              <div className="row">
                  <div className="mobile-nav-wrap">
                      <nav id="mobile-nav" className="nav-dropdown main-nav-dropdown collapse navbar-collapse">
                          <ul id="mobile-menu" className="mobile-menu">
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Menu Item</a></li>
                              <li><a href="#">Menu Item 2</a></li>
                              <li><a href="#">Menu Item 3</a></li>
                              <li><a href="#">Menu Item 4</a></li>
                          </ul>
                      </nav>
                  </div> 
              </div>
          </div> 
          <div className="container">
              <div className="row">
                  <div className="user-nav-wrap">
                      <nav id="user-nav" className="nav-dropdown main-nav-dropdown collapse navbar-collapse">
                          <ul>
                              <li>
                                  <a href="javascript:void(0)" data-toggle="modal" data-target="##">
                                      <span data-toggle="collapse" data-target="#user-nav">Login</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="javascript:void(0)" data-toggle="modal" data-target="##">
                                      <span data-toggle="collapse" data-target="#user-nav">Register</span>
                                  </a>
                              </li>
                              <li><a href="javascript:void(0)">Become a Host</a></li>
                          </ul>
                      </nav> 
                  </div> 
              </div>
          </div> 
       </header>
      </div>




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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="page-title">
                            <div className="block-top-title">
                                <ol className="breadcrumb">
                                    <li><a href="../index.html"><span>Home</span></a></li>
                                    <li className="active">Order Summary</li>
                                </ol>
                                <h1 className="listing-title">Order Summary</h1>
                            </div> 
                        </div> 
                    </div>
                </div> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sidebar">
                            <div className="main-box-sidebar categories_sidebar user_dashboards">
                                <h3 className="heading_sidebar">Quick Links</h3>
                                <ul>
                                    <li className=""><a href="#"><span>My Favorite Business</span></a></li>
                                    <li><a href="#"><span>Lisiting Management</span></a></li>
                                    <li><a href="#"><span>My Orders</span></a></li>
                                    <li><a href="#"><span>Optional </span></a></li>
                                    <li><a href="#"><span>Optional </span></a></li>
                                    <li><a href="#"><span>Optional </span></a></li>
                                    <li><a href="#"><span>Reward Points Activity</span></a></li>
                                    <li><a href="#"><span>Change Password</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="order-summary-wrapper">
                            <div className="summary-inner">
                                <div className="summary-details ">
                                    <h2>Your Order Summary</h2>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Order #:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>123456</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Order Date:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>23/8/2020</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Name:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>John Doe</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Email:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>email@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Payment Mode:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>VISA Card</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3>Description:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p className="lineheight15">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <h3 className="total-label">Total Amount:</h3>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p className="total-amount">123456</p>   
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <h2>Orders Details</h2>
                                <div className="listing-table-wrapper">
                                    <div className="common-table">
                                        <table className="datatable-className table table-striped" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <thead>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>   
                                            <tbody>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                                <tr>
                                                    <td>Product name 1</td>
                                                    <td>2kg pack</td>
                                                    <td>$2345</td>
                                                </tr>
                                            </tbody> 
                                        </table>
                                    </div>
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


    <div className="modal fade custom-modal-login" id="modal-login" tabindex="-1" role="dialog">
        <div className="modal-dialog clearfix" role="document">
            <div className="modal-body-left pull-left">
                <div className="login-register-title">
                    Welcome back Please log in </div>
            </div>
            <div className="modal-body-right pull-right">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Login</h4>
                    </div>
                    <div className="modal-body">
                        <div className="homey_login_messages message"></div>
                        <button type="button" className="btn btn-facebook-lined btn-full-width"><i className="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</button>
                        <button type="button" className="btn btn-google-plus-lined btn-full-width"><i className="fa fa-google-plus" aria-hidden="true"></i> Login with Google</button>
                        <div className="modal-login-form">
                            <p className="text-center"><strong>Log in</strong></p>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control email-input-1" placeholder="Username or Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control password-input-2" placeholder="Password"/>
                                </div>
                                <div className="checkbox pull-left">
                                    <label>
                                        <input name="remember" type="checkbox"/>Remember me </label>
                                </div>
                                <div className="forgot-password-text pull-right">
                                    <a href="#" data-toggle="modal" data-target="#modal-login-forgot-password" data-dismiss="modal">Forgot password?</a>
                                </div>

                                <button type="submit" className="btn btn-primary btn-full-width">Log In</button>
                            </form>
                            <p className="text-center">Don&#039;t you have an account? <a href="#" data-toggle="modal" data-target="#modal-register" data-dismiss="modal">Register</a></p>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    </div> 


 </div>
     
    )

  }
}
export default Listingpage