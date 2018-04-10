import React from "react";
import {
  Navigation,
  NavigationBanner,
  NavigationLink
} from "vanilla-framework-react";

export const MainNavigation = () => (
  <Navigation>
    <NavigationBanner
      href="#"
      logo={{
        src:
          "https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg",
        alt: "Vanilla Framework Logo"
      }}
    />
    <NavigationLink selected href="#" label="Images" />
    <NavigationLink href="#" label="Audio" />
    <NavigationLink href="#" label="Video" />
    <NavigationLink href="#" label="Sign in" />
  </Navigation>
);
