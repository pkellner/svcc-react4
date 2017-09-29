import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Speakers from '../speakers/Speakers';
import Sessions from '../sessions/Sessions';
import Sponsors from '../sponsors/Sponsors';
import Home from '../home/Home';

import AttendeesCcy from '../admin/attendeeccy/AttendeeCcy';


import SponsorPageBottom from '../sponsors/SponsorPageBottom';
import StayInformed from './StayInformed';
import Footer from './Footer';
import { basename } from '../../../global';

import store from '../../../store';

const MainSection = () => (
  <div>
    <Route exact path="/ReactApp/build/" component={Home} />
    <Route exact path="/ReactApp/build/attendeeccy" component={AttendeesCcy} />
    <Route path="/sessions" component={Sessions} />
    <Route path="/ReactApp/build/speakers" component={Speakers} />
    <Route path="/sponsors" component={Sponsors} />
  </div>
);

const PageTop = props => (
  <div>
    <header className="header">
      <div className="container-main d-flex align-items-center justify-content-between">
        <a href="/" rel="home" className="header-logo">
          <img src="assets/images/SVCClogo.png" alt="SVCC" />
        </a>
        {props.children}
      </div>
    </header>
  </div>
);

PageTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const CodeCampMenu = () => (
  <div>
    <div className="header__open-button-mobile">
      <a href="" className="js-open-main-menu">
        <i className="fa fa-bars" />
      </a>
    </div>
    <div className="header__user">
      <img
        src="assets/images/user-icon.png"
        className="header__user__icon"
        alt="User Icon"
      />
      <span className="header__user__hello">Hello, stranger</span>
      <a href="" data-toggle="modal" data-target="#login-modal">
        Login
      </a>
    </div>

    <ul className="header__menu-list js-menu">
      <li className="close-button-mobile">
        <a href="" className="js-close-main-menu">
          <i className="fa fa-remove" />
        </a>
      </li>
      <li>
        <Link to="/ReactApp/build/">Home</Link>
      </li>
      <li>
        <a href="">Profile</a>
      </li>
      <li>
        <Link to="/sessions">Sessions</Link>
      </li>
      <li>
        <Link to="/ReactApp/build/speakers">Speakers</Link>
      </li>
      <li>
        <Link to="/sponsors">Sponsors</Link>
      </li>
      <li>
        <Link to="/ReactApp/build/attendeeccy">AttendeeCCY</Link>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li className="social-icon">
        <a href="">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </li>
      <li className="social-icon">
        <a href="">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </li>

      <li className="social-icon">
        <a href="">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
);

export default function FullPage() {
  return (
    <Provider store={store}>
      <Router basename={basename}>
        <div>
          <PageTop>
            <CodeCampMenu />
          </PageTop>
          <MainSection />
          <SponsorPageBottom />
          <StayInformed />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
