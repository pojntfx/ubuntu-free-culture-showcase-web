import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MainNavigation } from "../components/global/MainNavigation";
import { MainFooter } from "../components/global/MainFooter";

export const DefaultLayout = ({ children }) => (
  <Fragment>
    <MainNavigation />
    <Container>
      {children}
      <MainFooter />
    </Container>
  </Fragment>
);

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 1rem;
`;
