import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { SearchBox } from "./SearchBox";
import { CurrentHeader } from "../global/Header";
import { ImageCollection, SubmissionCard } from "./ImageCollection";

export const Start = () => (
  <DefaultLayout header={<CurrentHeader fullHeight/>}>
    <SearchBox />
    <ImageCollection>
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
    </ImageCollection>
  </DefaultLayout>
);
