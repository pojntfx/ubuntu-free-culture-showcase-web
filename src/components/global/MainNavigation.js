import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const MainNavigation = () => (
  <header id="navigation" className="p-navigation">
    <div className="p-navigation__banner">
      <div className="p-navigation__logo">
        <Link to="/">
          <img
            className="p-navigation__image"
            src={logo}
            alt="Ubuntu Free Culture Showcase Logo"
          />
        </Link>
      </div>
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
        <li className="p-navigation__link is-selected" role="menuitem">
          <Link to="/">Images</Link>
        </li>
        <li className="p-navigation__link" role="menuitem">
          <Link to="/audio">Audio</Link>
        </li>
        <li className="p-navigation__link" role="menuitem">
          <Link to="/video">Video</Link>
        </li>
        <li className="p-navigation__link" role="menuitem">
          <Link to="/sign-in">Sign in</Link>
        </li>
      </ul>
    </nav>
  </header>
);
