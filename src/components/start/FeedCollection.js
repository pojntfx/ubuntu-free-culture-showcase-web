import React from "react";
import { List, ListItem, Card } from "vanilla-framework-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeedCollection = () => (
  <List modifier="split">
    <SubmissionCard
      src="https://picsum.photos/500/500"
      title="Submission"
      id="1"
    />
    <SubmissionCard
      src="https://picsum.photos/234/200"
      title="Submission"
      id="2"
    />
    <SubmissionCard
      src="https://picsum.photos/500/200"
      title="Submission"
      id="3"
    />
    <SubmissionCard
      src="https://picsum.photos/356/325"
      title="Submission"
      id="4"
    />
    <SubmissionCard
      src="https://picsum.photos/243/200"
      title="Submission"
      id="5"
    />
    <SubmissionCard
      src="https://picsum.photos/455/200"
      title="Submission"
      id="6"
    />
    <SubmissionCard
      src="https://picsum.photos/345/678"
      title="Submission"
      id="7"
    />
    <SubmissionCard
      src="https://picsum.photos/455/456"
      title="Submission"
      id="8"
    />
    <SubmissionCard
      src="https://picsum.photos/564/456"
      title="Submission"
      id="9"
    />
    <SubmissionCard
      src="https://picsum.photos/678/450"
      title="Submission"
      id="10"
    />
  </List>
);

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

const SubmissionCard = styled(PreviewImage)`
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
