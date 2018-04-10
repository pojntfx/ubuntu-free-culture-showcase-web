import React from "react";
import styled from "styled-components";

export const SearchBox = () => (
  <Form className="p-search-box" action="/search">
    <input
      type="search"
      className="p-search-box__input"
      name="q"
      placeholder="Search"
      required=""
    />
    {/* <button type="reset" className="p-search-box__reset" alt="reset">
      <i className="p-icon--close" />
    </button> */}
    <button type="submit" className="p-search-box__button" alt="search">
      <i className="p-icon--search" />
    </button>
  </Form>
);

const Form = styled.form`
  margin-bottom: 1.5rem;
`;
