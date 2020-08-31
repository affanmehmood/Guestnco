import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../components/Home.component';
import Services from '../components/servicesaquired.component';
import Ordersumary from '../components/order-summary.component';
import Orderlisting from '../components/orderslisting.component';
import Checkout from '../components/checkout.component';
import Accesslisting from '../components/access-listing.component';
import Listingpage from '../components/listingpage.component';
import Search from '../components/search.component';
import Header from './header';
const Main = () => (

 <BrowserRouter>

<Header></Header>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/services' component={Services} />
    <Route path='/ordersummary' component={Ordersumary} />
    <Route path='/orderlisting' component={Orderlisting} />
    <Route path="/checkout" component={Checkout} />
    <Route path='/accesslisting' component={Accesslisting} />
    <Route path="/listing" component={Listingpage} />
    <Route path="/search" component={Search} />
  </Switch>
 </BrowserRouter>

)

export default Main
