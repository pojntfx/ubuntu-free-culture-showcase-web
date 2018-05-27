import React from "react";
import { List, ListItem, Card } from "vanilla-framework-react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const FeedCollection = () => (
  <List modifier="split">
    <SubmissionCard src="https://picsum.photos/500/500" title="Submission" />
    <SubmissionCard src="https://picsum.photos/234/200" title="Submission" />
    <SubmissionCard src="https://picsum.photos/500/200" title="Submission" />
    <SubmissionCard src="https://picsum.photos/356/325" title="Submission" />
    <SubmissionCard src="https://picsum.photos/243/200" title="Submission" />
    <SubmissionCard src="https://picsum.photos/455/200" title="Submission" />
    <SubmissionCard src="https://picsum.photos/345/678" title="Submission" />
    <SubmissionCard src="https://picsum.photos/455/456" title="Submission" />
    <SubmissionCard src="https://picsum.photos/564/456" title="Submission" />
    <SubmissionCard src="https://picsum.photos/678/450" title="Submission" />
  </List>
);

const PreviewImage = ({ src, title, ...otherProps }) => (
  <a href={src} {...otherProps}>
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
  </a>
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
  title: PropTypes.string.isRequired
};
