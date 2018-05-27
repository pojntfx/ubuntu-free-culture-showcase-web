import React from "react";
import { List, ListItem, Card } from "vanilla-framework-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImageCollection = ({ children }) => (
  <List modifier="split">{children}</List>
);

ImageCollection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.nod)
  ]).isRequired
};

const PreviewImage = ({ src, title, id, ...otherProps }) => (
  <Link to={`/detail/${id}`} {...otherProps}>
    <ListItem>
      <Card
        title={title}
        image={{
          src,
          alt: "Submission Image",
          style: { minWidth: "100%" }
        }}
      >
        {""}
      </Card>
    </ListItem>
  </Link>
);

export const SubmissionCard = styled(PreviewImage)`
  .p-card {
    margin-bottom: 0 !important;
    header {
      img {
        width: 100%;
      }
    }
    h3 {
      margin: 0 !important;
      padding-bottom: 0.1rem;
    }
  }
`;

PreviewImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
