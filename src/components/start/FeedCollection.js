import React from "react";
import { List, ListItem, Image } from "vanilla-framework-react";
import PropTypes from "prop-types";

export const FeedCollection = () => (
  <List modifier="split">
    <PreviewImage src="http://placekitten.com/g/200/200" />
    <PreviewImage src="http://placekitten.com/g/234/200" />
    <PreviewImage src="http://placekitten.com/g/500/200" />
    <PreviewImage src="http://placekitten.com/g/356/325" />
    <PreviewImage src="http://placekitten.com/g/243/200" />
  </List>
);

const PreviewImage = ({ src }) => (
  <a href={src}>
    <ListItem>
      <Image bordered shadowed src={src} style={{ width: "100%" }} />
    </ListItem>
  </a>
);

PreviewImage.propTypes = {
  src: PropTypes.string.isRequired
};
