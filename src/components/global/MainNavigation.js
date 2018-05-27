import React from "react";
import logo from "../../assets/logo.svg";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const MainNavigation = () => (
  <StickyTopNav id="navigation" className="p-navigation">
    <div className="p-navigation__banner">
      <LogoWrapper className="p-navigation__logo">
        <Link to="/">
          <img
            className="p-navigation__image"
            src={logo}
            alt="Ubuntu Free Culture Showcase Logo"
          />
        </Link>
      </LogoWrapper>
      <a href="#navigation" className="p-navigation__toggle--open" title="menu">
        Menu
      </a>
      <a
        href="#navigation-closed"
        className="p-navigation__toggle--close"
        title="close menu"
      >
        Close menu
      </a>
    </div>
    <nav className="p-navigation__nav" role="menubar">
      <span className="u-off-screen">
        <a href="#main-content">Jump to main content</a>
      </span>
      <ul className="p-navigation__links" role="menu">
        <NavItem to="/" title="Images" />
        <NavItem to="/audio" title="Audio" />
        <NavItem to="/videos" title="Video" />
        <NavItem to="/sign-in" title="Sign in" />
      </ul>
    </nav>
  </StickyTopNav>
);

const NavItem = ({ to, title, ...otherProps }) => (
  <Route path={to} {...otherProps}>
    {({ match }) => (
      <li
        className={`p-navigation__link ${match ? "is-selected" : null}`}
        role="menuitem"
      >
        <Link to={to}>{title}</Link>
      </li>
    )}
  </Route>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const StickyTopNav = styled.header`
  position: sticky;
  top: 0;
  z-index: 10000;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
