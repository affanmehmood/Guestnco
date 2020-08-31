import React, { Component } from 'react';
import imgone from '../images/listing-image-2.jpg';
import person from '../images/person.jpg';
import sidebar from '../images/sidebar-image-1.jpg';
import sidebar_one from '../images/los.png';
import sidebar_three from '../images/review-image.png';
import { Get } from '../helpers/api.helper';
import Skeleton from 'react-loading-skeleton';
class Accesslisting extends Component{

	constructor(){
		super();
		this.state = {
			apartments:[]
		}
	}

	componentDidMount = () => {
		this.getApartmentList();
	}

	getApartmentList = () => {
		Get('user/getapartmentlist').then(res => {
			if(res.status === 1){
				this.setState({apartments:res.data});
			}
			else{
				this.setState({apartments:[]});
			}
		}).catch(err => {return err;})
	}

  render() {
	  const { apartments } = this.state;
    return (
     <div>
      <div className="nav-area header-type-1">
	   <div id="guesco-main-search" className="main-search " data-sticky="0">
            <div className="container-fluid">
                <form className="clearfix">
                    <div id="search-desktop" className="search-wrap hidden-sm hidden-xs">
                        <div className="search-destination">
                            <input type="text" name="location_search" autoComplete="off" value="" className="form-control input-search" placeholder="City" />
                        </div>
                        <div className="search-guests search-budget-js">
                            <input type="text" name="" autoComplete="off" value="" className="form-control" placeholder="Budget" />
                        </div>
                        <div className="search-date-range main-search-date-range-js">
                            <div className="search-date-range-arrive">
                                <input type="text" autoComplete="off" name="arrive" value="" className="form-control" placeholder="Check In" />
                            </div>
                            <div className="search-date-range-depart">
                                <input type="text" autoComplete="off" name="depart" value="" className="form-control" placeholder="Check Out" />
                            </div>
                        </div>
                        
                        <div className="search-button">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                    <div className="search-wrap search-banner-mobile">
                        <div className="search-destination">
                            <input value="" type="text" className="form-control" placeholder="Where to go?"  />
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>


      <div id="section-body">
	<section className="main-content-area">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="page-title">
						<div className="block-top-title">
							<ol className="breadcrumb">
								<li>
									<a href="../index.html">
										<span>Home</span>
									</a>
								</li>
								<li className="active">Search Result</li>
							</ol>
							<h1 className="listing-title">Search Result</h1>
						</div>
						 
					</div>
				 
				</div>
			</div>
		 
		</div>
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<div className="sort-wrap clearfix">
						<div className="pull-left">
							<div id="listings_found" className="number-of-listings">
                                    39 Rentals </div>
						</div>
						<div className="pull-right">
							<ul className="list-inline">
								<li>
									<strong>Sort By:</strong>
								</li>
								<li>
									<select defaultValue="featured_top" id="sort_listings" className="selectpicker bs-select-hidden" title="Default Order" data-live-search-style="begins" data-live-search="false">
										<option value="">Default Order</option>
										<option value="a_price">Price (Low to High)</option>
										<option value="d_price">Price (High to Low)</option>
										<option value="d_rating">Rating</option>
										<option value="featured_top">Featured First</option>
										<option value="a_date">Date Old to New</option>
										<option value="d_date">Date New to Old</option>
									</select>
								</li>
							</ul>
						</div>
					</div>
				 
					{apartments.length == 0?
					<div className='row'>
						<div className='col-md-6 col-sm-6'>
						<Skeleton height={300} width='100%' />
						<Skeleton count={3} height={30}/>
						</div>
						<div className='col-md-6 col-sm-6'>
						
						<Skeleton count={3} height={30} />
						</div>
					</div>
					:
					apartments.map((elmnt, i) => {
						return (
							<div id="listings_module_section" className="listing-wrap item-grid-view">
						<div className="row">
							<div className="col-md-6  item-wrap infobox_trigger guesco-matchHeight">
								<div className="media property-item">
									<div className="media-left">
										<div className="item-media item-media-thumb">
											<span className="label-wrap top-left">
												{elmnt.is_featured?<span className="label label-success label-featured">Featured</span>:null}
											</span>
											<a className="hover-effect" href="#">
												<img width="450" height="300" src={imgone} className="img-responsive" alt="" loading="lazy"/>
												</a>
												<div className="item-media-price">
													<span className="item-price">
														<sup>$</sup>{elmnt.rent_fee}
														<sub>{'/'+elmnt.rent_frequency}</sub>
													</span>
												</div>
												<div className="item-user-image">
													<img width="36" height="36" src={imgone} className="img-responsive img-circle" alt="" loading="lazy"/>
													</div>
												</div>
											</div>
											<div className="media-body item-body clearfix">
												<div className="item-title-head table-block">
													<div className="title-head-left">
														<h2 className="title">
															<a href="#">{elmnt.apartment_name}</a>
														</h2>
						<address className="item-address">{elmnt.adress1 + ' '+ elmnt.address2}</address>
													</div>
												</div>
												<ul className="item-amenities">
													<li>
														<i className="fa fa-bed"></i>
														<span className="total-beds">{elmnt.bedrooms}</span>
														<span className="item-label">Bedrooms</span>
													</li>
													<li>
														<i className="fa fa-shower"></i>
						<span className="total-baths">{elmnt.bathrooms}</span>
														<span className="item-label">Baths</span>
													</li>
													<li>
														<i className="fa fa-user"></i>
														<span className="total-guests">2</span>
														<span className="item-label">Guests</span>
													</li>
													<li className="item-type">{elmnt.description}</li>
												</ul>
												<div className="item-user-image list-item-hidden">
													<img width="36" height="36" src={person} className="img-responsive img-circle" alt="" loading="lazy"/>
														<span className="item-user-info">Hosted by
															<br/>
                                                        Andrew Garcia
															</span>
														</div>
														<div className="item-footer">
															<div className="footer-right">
																<div className="item-tools">
																	<div className="btn-group dropup">
																		<button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
																		</button>
																		<ul className="dropdown-menu">
																			<li>
																				<a className="guesco_compare compare-271" href="#" data-listing_id="271">Compare</a>
																			</li>
																			<li>
																				<a href="#" className="add_fav" data-listid="271">
                                                                            Add to Favorite </a>
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
																		<li>
																			<span className="star-text-right">Excellent</span>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6 item-wrap infobox_trigger guesco-matchHeight">
												<div className="media property-item">
													<div className="media-left">
														<div className="item-media item-media-thumb">
															<a className="hover-effect" href="#">
																<img width="450" height="300" src="images/listing-image-2.jpg" className="img-responsive" alt="" loading="lazy"/>
																</a>
																<div className="item-media-price">
																	<span className="item-price">
																		<sup>$</sup>65
																		<sub>/night</sub>
																	</span>
																</div>
																<div className="item-user-image">
																	<img width="36" height="36" src="images/person.jpg" className="img-responsive img-circle" alt="" loading="lazy"/>
																	</div>
																</div>
															</div>
															<div className="media-body item-body clearfix">
																<div className="item-title-head table-block">
																	<div className="title-head-left">
																		<h2 className="title">
																			<a href="#">
                                                                {elmnt.apartment_name}</a>
																		</h2>
																		<address className="item-address">{elmnt.adress1+' '+elmnt.address2}</address>
																	</div>
																</div>
																<ul className="item-amenities">
																	<li>
																		<i className="fa fa-bed"></i>
																		<span className="total-beds">{elmnt.bedrooms}</span>
																		<span className="item-label">Bedrooms</span>
																	</li>
																	<li>
																		<i className="fa fa-shower"></i>
																		<span className="total-baths">{elmnt.bathrooms}</span>
																		<span className="item-label">Baths</span>
																	</li>
																	<li>
																		<i className="fa fa-user"></i>
																		<span className="total-guests">2</span>
																		<span className="item-label">Guests</span>
																	</li>
																	<li className="item-type">{elmnt.description}</li>
																</ul>
																<div className="item-user-image list-item-hidden">
																	<img width="36" height="36" src="images/person.jpg" className="img-responsive img-circle" alt="" loading="lazy"/>
																		<span className="item-user-info">Hosted by
																			<br/>
                                                        Andrew Garcia
																			</span>
																		</div>
																		<div className="item-footer">
																			<div className="footer-right">
																				<div className="item-tools">
																					<div className="btn-group dropup">
																						<button className="btn-item-tools dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																							<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
																						</button>
																						<ul className="dropdown-menu">
																							<li>
																								<a className="guesco_compare compare-271" href="#" data-listing_id="271">Compare</a>
																							</li>
																							<li>
																								<a href="#" className="add_fav" data-listid="271">
                                                                            Add to Favorite </a>
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
																						<li>
																							<span className="star-text-right">Excellent</span>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													 
													
													 
													</div>
						)
					})}

													<div className="guesco-loadmore loadmore text-center">
															<a href="#" className="btn btn-primary btn-long">
                                    
                                    Load More </a>
														</div>
												</div>
												<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 guesco_sticky">
													<div className="sidebar right-sidebar">
														<div id="mc4wp_form_widget-2" className="widget widget_mc4wp_form_widget">
															<div className="widget-top">
																<h3 className="widget-title">Newsletter Sign Up!</h3>
															</div>
															<form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1282" method="post" data-id="1282">
																<div className="mc4wp-form-fields">
																	<p>guesco is a powerful booking platform that lets you run a residential or commercial
                                            rental business online with no hassle</p>
																	<div className="row">
																		<div className="col-sm-12">
																			<input className="form-control mb-10" type="email" name="EMAIL" required="" placeholder="Enter your email"/>
																			</div>
																			<div className="col-sm-12">
																				<button type="submit" className="btn btn-primary btn-full-width">Submit</button>
																			</div>
																		</div>
																	</div>
																</form>
															 
															</div>
															<div id="" className="widget widget-list-properties widget-latest-properties">
																<div className="widget-top">
																	<h3 className="widget-title">Featured</h3>
																</div>
																<div className="widget-body">
																	<div className="item-list-view">
																		<div className="media property-item">
																			<div className="media-left">
																				<div className="item-media item-media-thumb">
																					<span className="label-wrap top-left">
																						<span className="label label-success label-featured">Featured</span>
																					</span>
																					<a href="#">
																						<img width="450" height="300" src={sidebar} className="img-responsive wp-post-image" alt="" loading="lazy"/>
																						</a>
																					</div>
																				</div>
																				<div className="media-body item-body clearfix">
																					<div className="item-title-head">
																						<div className="title-head-left">
																							<h2 className="title">
																								<a href="#">Beautiful Cove</a>
																							</h2>
																							<span className="item-price">
                                                            $175/night
                                                        </span>
																							<span className="list-inline rating stars">
																								<span className="fa fa-star"></span>
																								<span className="fa fa-star"></span>
																								<span className="fa fa-star"></span>
																								<span className="fa fa-star"></span>
																								<span className="fa fa-star-o"></span>
																							</span>
																						</div>
																					</div>
																					<ul className="item-amenities">
																						<li>
																							<i className="fa fa-bed"></i>
																							<span className="total-beds">2</span>
																						</li>
																						<li>
																							<i className="fa fa-shower"></i>
																							<span className="total-baths">1</span>
																						</li>
																						<li>
																							<i className="fa fa-user"></i>
																							<span className="total-guests">2</span>
																						</li>
																						<li>Bed &amp; Breakfast</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																		<div className="item-list-view">
																			<div className="media property-item">
																				<div className="media-left">
																					<div className="item-media item-media-thumb">
																						<span className="label-wrap top-left">
																							<span className="label label-success label-featured">Featured</span>
																						</span>
																						<a href="#">
																						<img width="450" height="300" src={sidebar} className="img-responsive wp-post-image" alt="" loading="lazy"/>
																							</a>
																						</div>
																					</div>
																					<div className="media-body item-body clearfix">
																						<div className="item-title-head">
																							<div className="title-head-left">
																								<h2 className="title">
																									<a href="#">Beautiful Cove</a>
																								</h2>
																								<span className="item-price">
                                                            $175/night
                                                        </span>
																								<span className="list-inline rating stars">
																									<span className="fa fa-star"></span>
																									<span className="fa fa-star"></span>
																									<span className="fa fa-star"></span>
																									<span className="fa fa-star"></span>
																									<span className="fa fa-star-o"></span>
																								</span>
																							</div>
																						</div>
																						<ul className="item-amenities">
																							<li>
																								<i className="fa fa-bed"></i>
																								<span className="total-beds">2</span>
																							</li>
																							<li>
																								<i className="fa fa-shower"></i>
																								<span className="total-baths">1</span>
																							</li>
																							<li>
																								<i className="fa fa-user"></i>
																								<span className="total-guests">2</span>
																							</li>
																							<li>Bed &amp; Breakfast</li>
																						</ul>
																					</div>
																				</div>
																			</div>
																			<div className="item-list-view">
																				<div className="media property-item">
																					<div className="media-left">
																						<div className="item-media item-media-thumb">
																							<span className="label-wrap top-left">
																								<span className="label label-success label-featured">Featured</span>
																							</span>
																							<a href="#">
																							<img width="450" height="300" src={sidebar} className="img-responsive wp-post-image" alt="" loading="lazy"/>
																								</a>
																							</div>
																						</div>
																						<div className="media-body item-body clearfix">
																							<div className="item-title-head">
																								<div className="title-head-left">
																									<h2 className="title">
																										<a href="#">Beautiful Cove</a>
																									</h2>
																									<span className="item-price">
                                                            $175/night
                                                        </span>
																									<span className="list-inline rating stars">
																										<span className="fa fa-star"></span>
																										<span className="fa fa-star"></span>
																										<span className="fa fa-star"></span>
																										<span className="fa fa-star"></span>
																										<span className="fa fa-star-o"></span>
																									</span>
																								</div>
																							</div>
																							<ul className="item-amenities">
																								<li>
																									<i className="fa fa-bed"></i>
																									<span className="total-beds">2</span>
																								</li>
																								<li>
																									<i className="fa fa-shower"></i>
																									<span className="total-baths">1</span>
																								</li>
																								<li>
																									<i className="fa fa-user"></i>
																									<span className="total-guests">2</span>
																								</li>
																								<li>Bed &amp; Breakfast</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																				<div className="item-list-view">
																					<div className="media property-item">
																						<div className="media-left">
																							<div className="item-media item-media-thumb">
																								<span className="label-wrap top-left">
																									<span className="label label-success label-featured">Featured</span>
																								</span>
																								<a href="#">
																								<img width="450" height="300" src={sidebar} className="img-responsive wp-post-image" alt="" loading="lazy"/>
																									</a>
																								</div>
																							</div>
																							<div className="media-body item-body clearfix">
																								<div className="item-title-head">
																									<div className="title-head-left">
																										<h2 className="title">
																											<a href="#">Beautiful Cove</a>
																										</h2>
																										<span className="item-price">
                                                            $175/night
                                                        </span>
																										<span className="list-inline rating stars">
																											<span className="fa fa-star"></span>
																											<span className="fa fa-star"></span>
																											<span className="fa fa-star"></span>
																											<span className="fa fa-star"></span>
																											<span className="fa fa-star-o"></span>
																										</span>
																									</div>
																								</div>
																								<ul className="item-amenities">
																									<li>
																										<i className="fa fa-bed"></i>
																										<span className="total-beds">2</span>
																									</li>
																									<li>
																										<i className="fa fa-shower"></i>
																										<span className="total-baths">1</span>
																									</li>
																									<li>
																										<i className="fa fa-user"></i>
																										<span className="total-guests">2</span>
																									</li>
																									<li>Bed &amp; Breakfast</li>
																								</ul>
																							</div>
																						</div>
																					</div>
																				</div>
																			 
																			</div>
																			<div id="" className="widget widget-taxonomies-card widget-categories">
																				<div className="widget-top">
																					<h3 className="widget-title">Explore</h3>
																				</div>
																				<div className="widget-body">
																					<div className="taxonomy-card">
																						<a className="taxonomy-link hover-effect" href="#">
																							<div className="taxonomy-title">Los Angeles </div>
																							<img className="img-responsive" src={sidebar_one} width="360" height="120" alt="Los Angeles"/>
																							</a>
																						</div>
																						<div className="taxonomy-card">
																							<a className="taxonomy-link hover-effect" href="#">
																								<div className="taxonomy-title">Los Angeles </div>
																								<img className="img-responsive" src={sidebar_one} width="360" height="120" alt="Los Angeles"/>
																								</a>
																							</div>
																							<div className="taxonomy-card">
																								<a className="taxonomy-link hover-effect" href="#">
																									<div className="taxonomy-title">Los Angeles </div>
																									<img className="img-responsive" src={sidebar_one} width="360" height="120" alt="Los Angeles"/>
																									</a>
																								</div>
																								<div className="taxonomy-card">
																									<a className="taxonomy-link hover-effect" href="#">
																										<div className="taxonomy-title">Los Angeles </div>
																										<img className="img-responsive"src={sidebar_one} width="360" height="120" alt="Los Angeles"/>
																										</a>
																									</div>
																								</div>
																							</div>
																							<div id="" className="widget widget-latest-reviews">
																								<div className="widget-top">
																									<h3 className="widget-title">Latest Reviews</h3>
																								</div>
																								<div className="widget-body">
																									<div className="review-block">
																										<div className="media">
																											<div className="media-left">
																												<a className="media-object">
																													<img width="70" height="70" src={sidebar_three} className="img-circle" alt="" loading="lazy"/>
																													</a>
																												</div>
																												<div className="media-body media-middle">
																													<div className="msg-user-info">
																														<div className="msg-user-left">
																															<h2 className="title">
																																<a href="#">Review 3021</a>
																															</h2>
																															<div className="message-date">
																																<i className="fa fa-calendar-o"></i>10 months ago
                                                            
																																<span className="rating"></span>
																															</div>
																														</div>
																													</div>
																													<p>Sjajno mesto za odmor</p>
																												</div>
																											</div>
																										</div>
																										<div className="review-block">
																											<div className="media">
																												<div className="media-left">
																													<a className="media-object">
																														<img width="70" height="70" src={sidebar_three} className="img-circle" alt="" loading="lazy"/>
																														</a>
																													</div>
																													<div className="media-body media-middle">
																														<div className="msg-user-info">
																															<div className="msg-user-left">
																																<h2 className="title">
																																	<a href="#">Review 3021</a>
																																</h2>
																																<div className="message-date">
																																	<i className="fa fa-calendar-o"></i>10 months ago
                                                            
																																	<span className="rating"></span>
																																</div>
																															</div>
																														</div>
																														<p>Sjajno mesto za odmor</p>
																													</div>
																												</div>
																											</div>
																											<div className="review-block">
																												<div className="media">
																													<div className="media-left">
																														<a className="media-object">
																															<img width="70" height="70" src={sidebar_three} className="img-circle" alt="" loading="lazy"/>
																															</a>
																														</div>
																														<div className="media-body media-middle">
																															<div className="msg-user-info">
																																<div className="msg-user-left">
																																	<h2 className="title">
																																		<a href="#">Review 3021</a>
																																	</h2>
																																	<div className="message-date">
																																		<i className="fa fa-calendar-o"></i>10 months ago
                                                            
																																		<span className="rating"></span>
																																	</div>
																																</div>
																															</div>
																															<p>Sjajno mesto za odmor</p>
																														</div>
																													</div>
																												</div>
																											</div>
																										 
																										</div>
																										<div id="" className="widget widget-latest-posts">
																											<div className="widget-top">
																												<h3 className="widget-title">Latest Posts</h3>
																											</div>
																											<div className="widget-body">
																												<div className="item-list-view">
																													<div className="media property-item">
																														<div className="media-left">
																															<div className="item-media item-media-thumb">
																																<a href="#">
																																	<img width="120" height="80" src="images/blog-image.JPG" className="img-responsive wp-post-image" alt="" loading="lazy"/>
																																	</a>
																																</div>
																															</div>
																															<div className="media-body item-body clearfix">
																																<div className="item-title-head">
																																	<div className="title-head-left">
																																		<h2 className="title">
																																			<a href="#">Here’s What People Are Saying About Rentals</a>
																																		</h2>
																																		<i className="fa fa-calendar-o"></i> 2 years ago 
																																		<span className="post-author">
                                                            by
                                                            
																																			<a href="#">Mike Parker</a>
																																		</span>
																																	</div>
																																</div>
																																<p>Lorem ipsum dolor sit amet, consectetur... 
																																	<a href="#">Read more</a>
																																</p>
																															</div>
																														</div>
																													</div>
																												 
																													<div className="item-list-view">
																														<div className="media property-item">
																															<div className="media-left">
																																<div className="item-media item-media-thumb">
																																	<a href="#">
																																		<img width="120" height="80" src="images/blog-image.JPG" className="img-responsive wp-post-image" alt="" loading="lazy"/>
																																		</a>
																																	</div>
																																</div>
																																<div className="media-body item-body clearfix">
																																	<div className="item-title-head">
																																		<div className="title-head-left">
																																			<h2 className="title">
																																				<a href="#">Here’s What People Are Saying About Rentals</a>
																																			</h2>
																																			<i className="fa fa-calendar-o"></i> 2 years ago 
																																			<span className="post-author">
                                                            by
                                                            
																																				<a href="#">Mike Parker</a>
																																			</span>
																																		</div>
																																	</div>
																																	<p>Lorem ipsum dolor sit amet, consectetur... 
																																		<a href="#">Read more</a>
																																	</p>
																																</div>
																															</div>
																														</div>
																													 
																														<div className="item-list-view">
																															<div className="media property-item">
																																<div className="media-left">
																																	<div className="item-media item-media-thumb">
																																		<a href="#">
																																			<img width="120" height="80" src="images/blog-image.JPG" className="img-responsive wp-post-image" alt="" loading="lazy"/>
																																			</a>
																																		</div>
																																	</div>
																																	<div className="media-body item-body clearfix">
																																		<div className="item-title-head">
																																			<div className="title-head-left">
																																				<h2 className="title">
																																					<a href="#">Here’s What People Are Saying About Rentals</a>
																																				</h2>
																																				<i className="fa fa-calendar-o"></i> 2 years ago 
																																				<span className="post-author">
                                                            by
                                                            
																																					<a href="#">Mike Parker</a>
																																				</span>
																																			</div>
																																		</div>
																																		<p>Lorem ipsum dolor sit amet, consectetur... 
																																			<a href="#">Read more</a>
																																		</p>
																																	</div>
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




 </div>
     
    )

  }
}
export default Accesslisting