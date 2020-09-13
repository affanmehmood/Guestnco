import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.component";
import Services from "../components/servicesaquired.component";
import Ordersumary from "../components/OrderSummary/order-summary.component";
import Orderlisting from "../components/orderslisting.component";
import Checkout from "../components/Checkout/checkout.component";
import AccesslistingNew from "../components/access-listing.component";
import Listingpage from "../components/AppartmentListing/listingpage.component";
import Search from "../components/search.component";
import Details2 from "../components/User/AppartmentDetails/Details2.component";
import AppaertmentListingOwner from "../components/Owner/ApartmentListingOwner/AppartmentListingOwner";
import DashboardOwner from "../components/Owner/Dashboard/Dashboard";
import ProfileViews from "../components/User/ProfileViews/ProfileViews";
import AppartmentEntryForm from "../components/Owner/AppartmentEntery/AppartmentEntryForm";
import GalleryUploader from "../components/Owner/AppartmentEntery/GalleryUploader";

import "@fortawesome/fontawesome-free/css/all.min.css";
const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/ordersummary" component={Ordersumary} />
      <Route path="/orderlisting" component={Orderlisting} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/accesslisting" component={AccesslistingNew} />
      <Route path="/listing" component={Listingpage} />
      <Route path="/search" component={Search} />
      <Route path="/details-2" component={Details2} />
      <Route path="/listing-owner" component={AppaertmentListingOwner} />
      <Route path="/dashboard-owner" component={DashboardOwner} />
      <Route path="/profileviews" component={ProfileViews} />
      <Route path="/appartmententry" component={AppartmentEntryForm} />
      <Route path="/galleryuploader" component={GalleryUploader} />
    </Switch>
  </BrowserRouter>
);

export default Main;
