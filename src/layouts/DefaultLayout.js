import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MainNavigation } from "../components/global/MainNavigation";
import { MainFooter } from "../components/global/MainFooter";

export const DefaultLayout = ({ header, children }) => (
  <Fragment>
    <MainNavigation />
    {header}
    <Container>
      {children}
      <MainFooter />
    </Container>
  </Fragment>
);

DefaultLayout.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export const Container = styled.div`
  margin: 0 auto;
  max-width: 64.875rem;
  padding: 1.5rem;
`;
