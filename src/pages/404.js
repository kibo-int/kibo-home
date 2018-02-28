import React from 'react';
import { Section } from '../styles/utils';
import { H2, Text } from '../styles/typography';

const NotFoundPage = () => (
  <Section>
    <H2 orange>NOT FOUND</H2>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Section>
);

export default NotFoundPage;
