import React, { Component } from 'react';
import imgone from '../images/appartment.jpg';
import imgtwo from '../images/breakfast.jpg';
import imgthree from '../images/image-3.jpg';
import imgfour from '../images/image-3.jpg';
import imgfive from '../images/image-3.jpg';
import imgsix from '../images/studio.jpg';
import imgeight from '../images/person.jpg';

class Home extends Component{
    
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

      <div id="section-body">
      <section className="top-banner-wrap">
            <div className="banner-caption ">
                <div className="search-wrap search-banner search-banner-desktop hidden-xs">
                    <form className="clearfix">
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
                    </form>
                </div> 
                <div className="search-wrap search-banner search-banner-mobile">
                    <form className="clearfix">
                        <div className="search-destination">
                            <input value="" type="text" className="form-control" placeholder="City?"/>
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
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">Apartment</div>
                                        <img className="img-responsive" src={imgone} width="555" height="262" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">Bed &amp; Breakfast</div>
                                        <img className="img-responsive" src={imgtwo} width="360" height="360" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">Condo</div>
                                        <img className="img-responsive" src={imgthree} width="360" height="360" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">House</div>
                                        <img className="img-responsive" src={imgfour} width="360" height="360" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="taxonomy-item taxonomy-card">
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">Loft</div>
                                        <img className="img-responsive" src={imgfive} width="360" height="360" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="taxonomy-item taxonomy-card">
                                    <a className="taxonomy-link hover-effect" href="javascript:void(0)">
                                        <div className="taxonomy-title">Studio</div>
                                        <img className="img-responsive" src={imgsix} width="555" height="262" alt="listing_type"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" loadmore text-center">
                        <a href="#" className="btn btn-primary btn-long">
                            Find More Places to Rent </a>
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
                        <p className="sub-heading">The biggest reward is to satisfy our clients and share their experience with us</p>
                    </div>
             <div className="clearfix"></div>
             <div className="module-wrap testimonials-module">
                   <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Anna Andrews</strong><br/><em>guestco Host</em></p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Anna Andrews</strong><br/><em>guestco Host</em></p>
                                </div>
                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Anna Andrews</strong><br/><em>guestco Host</em></p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="testimonial-item text-center">
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.</p>
                                    <div className="testimonial-thumb"><img width="120" height="120" src={imgeight} className="img-circle img-responsive" alt="" loading="lazy" /></div>
                                    <p className="auther-info"><strong>Anna Andrews</strong><br/><em>guestco Host</em></p>
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
export default Home