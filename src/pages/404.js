import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Headline = styled.h1`
  color: #ff8939;
`;

const NotFoundPage = () => (
  <NotFound>
    <Headline orange>NOT FOUND</Headline>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFound>
);

export default NotFoundPage;
