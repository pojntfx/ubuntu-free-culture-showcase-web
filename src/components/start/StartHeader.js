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

export const StartHeader = ({
  mainImgSrc,
  title,
  subTitle,
  description,
  buttonText,
  secondaryImgSrc,
  secondaryImgAlt
}) => (
  <Strip
    deep
    image={{
      src: mainImgSrc,
      colour: "dark"
    }}
    style={{ backgroundPosition: "77% 0%" }}
  >
    <ResponsiveStripRowWrapper>
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
);

const ResponsiveStripRowWrapper = styled.div`
  & > div {
    display: flex;
    flex-direction: column-reverse;
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

StartHeader.propTypes = {
  mainImgSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  secondaryImgSrc: PropTypes.string,
  secondaryImgAlt: PropTypes.string
};
