import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { SearchBox } from "./SearchBox";
import { StartHeader } from "./StartHeader";
import screenshot from "../../assets/screenshot-laptop-header.png";
import bionicWallpaper from "../../assets/ubuntu-bionic-wallpaper.jpg";
import { ImageCollection } from "./ImageCollection";

export const Start = () => (
  <DefaultLayout
    header={
      <StartHeader
        mainImgSrc={bionicWallpaper}
        title="Ubuntu 18.10 Wallpaper Contest"
        subTitle="1 - 29 September 2018"
        description="Share your images with millions of Ubuntu users and get them distributed with Ubuntu."
        buttonText="Upload your image"
        secondaryImgSrc={screenshot}
        secondaryImgAlt="Ubuntu devices infographic"
      />
    }
  >
    <SearchBox />
    <ImageCollection />
  </DefaultLayout>
);
