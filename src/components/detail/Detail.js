import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import {
  MediaObject,
  CodeSnippet,
  List,
  ListItem,
  Image,
  MutedHeading
} from "vanilla-framework-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CurrentHeader } from "../global/Header";

export const Detail = () => (
  <DefaultLayout header={<CurrentHeader />}>
    <TopBar title="Submission" author="Max Mustermann" name="submission-snap" />
    <MutedHeading>Primary Image</MutedHeading>
    <SubmissionFirstImage src="https://picsum.photos/960/540" />
    <div className="grid">
      <Row>
        <div className="col-8">
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            libero nobis sed qui, nesciunt rem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur, minus iste temporibus
            totam dolore nostrum magni quam voluptates praesentium quas eos.
            Blanditiis odit porro cumque consequatur ipsam rem tenetur eveniet
            atque ullam? Itaque sapiente suscipit mollitia, maiores repellat,
            sequi inventore debitis beatae ipsum nesciunt optio, nostrum sint
            corporis veniam dignissimos!
          </Description>
        </div>
        <div className="col-4">
          <Meta
            license="CC-BY-4.0"
            lastUpdate="2018-05-28"
            version="0.0.1-alpha"
          />
          <a href="https://tumblr.com">{"Photographer's"} website</a>
        </div>
      </Row>
    </div>
    <MutedHeading>More images in this bundle</MutedHeading>
    <List modifier="split">
      <PreviewImage src="https://picsum.photos/450/200" />
      <PreviewImage src="https://picsum.photos/400/300" />
      <PreviewImage src="https://picsum.photos/500/400" />
      <PreviewImage src="https://picsum.photos/500/350" />
    </List>
  </DefaultLayout>
);

const Row = styled.div.attrs({ className: "row" })`
  padding-left: 0;
  padding-right: 0;
  margin: 2rem 0;
`;

const Meta = ({ license, lastUpdate, version, ...otherProps }) => (
  <List modifier="divided" {...otherProps}>
    <ListItem>
      <b>License: </b>
      {license}
    </ListItem>
    <ListItem>
      <b>Last update: </b>
      {lastUpdate}
    </ListItem>
    <ListItem>
      <b>Version: </b>
      {version}
    </ListItem>
  </List>
);

Meta.propTypes = {
  license: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
};

const TopBarGrid = ({ title, author, name, ...otherProps }) => (
  <div className="grid" {...otherProps}>
    <Row className="row u-vertically-center">
      <div className="col-6">
        <MediaObject
          round
          title={{ name: title }}
          description={`By ${author}`}
        />
      </div>
      <div className="col-6 u-align--right">
        <CodeSnippet value={`sudo snap install ${name}`} />
      </div>
    </Row>
  </div>
);

TopBarGrid.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const TopBar = styled(TopBarGrid)`
  & .p-media-object {
    margin-bottom: 0;
  }
`;

const SubmissionFirstImage = ({ src }) => (
  <a href={src}>
    <Image
      bordered
      shadowed
      src={src}
      style={{ width: "100%" }}
      alt="Submission first image"
    />
  </a>
);

const Description = styled.p`
  max-width: 100%;
`;

SubmissionFirstImage.propTypes = {
  src: PropTypes.string.isRequired
};

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
