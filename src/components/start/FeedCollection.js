import React from "react";
import { Strip, StripRow } from "vanilla-framework-react";
import styled from "styled-components";

export const FeedCollection = () => (
  <Grid>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/500",
        colour: "dark"
      }}
      style={{ gridGrowEnd: "span 3", gridColumnEnd: "span 2" }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
    <Strip
      image={{
        src: "http://placekitten.com/g/600/300",
        colour: "dark"
      }}
    >
      <StripRow>
        <p>This is an image Strip with a dark background</p>
      </StripRow>
    </Strip>
  </Grid>
);

const Grid = styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
