import React from "react";
import PropTypes from "prop-types";
import {
  Strip,
  StripRow,
  StripColumn,
  Button,
  Image
} from "vanilla-framework-react";
import styled from "styled-components";
import screenshot from "../../assets/screenshot-laptop-header.png";
import bionicWallpaper from "../../assets/ubuntu-bionic-wallpaper.jpg";
import { Container } from "../../layouts/DefaultLayout";

export const CurrentHeader = props => (
  <HeaderTemplate
    mainImgSrc={bionicWallpaper}
    title="Ubuntu 18.10 Wallpaper Contest"
    subTitle="1 - 29 September 2018"
    description="Share your images with millions of Ubuntu users and get them distributed with Ubuntu."
    buttonText="Upload your images"
    secondaryImgSrc={screenshot}
    secondaryImgAlt="Ubuntu devices infographic"
    {...props}
  />
);

export const HeaderTemplate = ({
  mainImgSrc,
  title,
  subTitle,
  description,
  buttonText,
  secondaryImgSrc,
  secondaryImgAlt,
  fullHeight
}) =>
  fullHeight ? (
    <Strip
      deep
      image={{
        src: mainImgSrc,
        colour: "dark"
      }}
      style={{ backgroundPosition: "77% 0%" }}
    >
      <ResponsiveStripRowWrapper fullHeight={fullHeight}>
        <StripRow>
          <StripColumn size={7}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <h5>{description}</h5>
            <p>
              <StripButton positive value={buttonText} />
            </p>
          </StripColumn>
          <StripColumn size={5}>
            <Image src={secondaryImgSrc} alt={secondaryImgAlt} />
          </StripColumn>
        </StripRow>
      </ResponsiveStripRowWrapper>
    </Strip>
  ) : (
    <TopContainer>
      <Notification>
        <div className="row u-vertically-center">
          <StripColumn size={8}>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <h5>{description}</h5>
          </StripColumn>
          <div className="col-4 u-align--right">
            <SmallerStripButton positive value={buttonText} />
          </div>
        </div>
      </Notification>
    </TopContainer>
  );

const Notification = styled.div.attrs({ className: "p-notification" })`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const TopContainer = styled(Container)`
  padding-bottom: 0 !important;
  & > .p-notification {
    margin-bottom: 0 !important;
  }
`;

const ResponsiveStripRowWrapper = styled.div`
  & > div {
    display: flex;
    ${({ fullHeight }) =>
      fullHeight ? "flex-direction: column-reverse" : "flex-direction: column"};
    & > .col-5 {
      display: flex;
      align-items: center;
      & > img {
        padding-bottom: 1.5rem;
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    & > div {
      flex-direction: row;
      align-items: center;
      color: "#ffffff";
    }
  }
`;

const StripButton = styled(Button)`
  margin-top: 1rem !important;
`;

const SmallerStripButton = styled(Button)`
  margin-bottom: 0 !important;
`;

HeaderTemplate.propTypes = {
  mainImgSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  secondaryImgSrc: PropTypes.string,
  secondaryImgAlt: PropTypes.string,
  fullHeight: PropTypes.bool
};
