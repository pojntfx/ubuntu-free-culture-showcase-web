import React from "react";
import {
  Navigation,
  NavigationBanner,
  NavigationLink
} from "vanilla-framework-react";
import logo from "../../assets/logo.svg";

export const MainNavigation = () => (
  <Navigation>
    <NavigationBanner
      href="#"
      logo={{
        src: logo,
        alt: "Ubuntu Free Culture Showcase Logo"
      }}
    />
    <NavigationLink selected href="#" label="Images" />
    <NavigationLink href="#" label="Audio" />
    <NavigationLink href="#" label="Video" />
    <NavigationLink href="#" label="Sign in" />
  </Navigation>
);
