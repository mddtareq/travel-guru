import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Container/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Container/Login/Login';
import Blog from './Container/Blog/Blog';
import Destination from './Container/Destination/Destination';
import News from './Container/News/News';
import Contact from './Container/Contact/Contact';
import Home from './Container/Home/Home';
import PlaceDetail from './Container/PlaceDetail/PlaceDetail';
import PrivateRoute from './Container/PrivateRoute/PrivateRoute';
import Booking from './Container/Booking/Booking';
import NotFound from './Container/NotFound/NotFound';
import Map from './Container/Map/Map';
import ShowBooking from './Container/ShowBooking/ShowBooking';
export const UserContext = createContext();

function App() {
  const [logged, setLogged] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[logged, setLogged]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/place/:key">
              <PlaceDetail></PlaceDetail>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/bookings">
              <ShowBooking></ShowBooking>
            </PrivateRoute>
            <PrivateRoute path="/booking/:key/:start/:end">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
