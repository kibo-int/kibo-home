import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import '../../static/fontawesome/fontawesome.min';
import '../../static/fontawesome/fa-solid.min';
import '../../static/fontawesome/fa-brands.min';
import '../../static/fontawesome/fa-regular.min';

import { Title, H2, H3, Text, LinkText } from '../styles/typography';
import { media, flexbox, Grid, GridItem, Section } from '../styles/utils';

const Hero = styled.div`
  background: url("/img/city.jpeg") top;
  background-size: cover;
  padding: 30rem ${({ theme }) => theme.containerPadding}rem 20rem ${({ theme }) => theme.containerPadding}rem;
  text-align: center;

  ${media.small`
    padding: 20rem 2rem;
  `};
`;

const AboutSection = Section.extend`
`;

const AboutGridItem = GridItem.extend`
  ${media.medium`
    grid-row: 1;
  `};
`;

const ExplainSection = Section.extend`
  background: ${({ theme = { colors: {} } }) => theme.colors.lightGray};
  display: grid;
  grid-template-columns: 66% 1fr;
  grid-gap: 0;

  ${media.medium`
    grid-template-columns: 1fr;
  `};
`;

const ServicesSection = Section.extend`
`;

const ServicesGrid = Grid.extend`
  ${media.tablet`
    grid-template-columns: 1fr;
  `};
`;

const WorkWithUsSection = Section.extend`
  display: grid;
  grid-template-columns: 66% 1fr;
  grid-gap: 0;

  ${media.medium`
    grid-template-columns: 1fr;
  `};
`;

const MapBackground = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9)), url("/img/world.png") center;
`;

const ContactSection = Section.extend`
  background: none;
`;

const Footer = styled.footer`
  ${flexbox};
  padding: ${({ theme }) => theme.containerPadding}rem;
  padding-bottom: 2rem;
`;

const FooterContainer = styled.footer`
  ${flexbox};
`;

const IconContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const EmailIconContainer = styled.div`
  text-align: center;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.margins}rem;
`;

const ResponsiveImg = styled.img`
  ${media.medium`
    display: none;
  `};
`;

const IndexPage = () => (
  <div>
    <Hero>
      <Title white>
        <FormattedMessage
          id="hero.kibo_localization"
          defaultMessage="Kibo Localization"
        />
      </Title>

      <Text white large>
        <FormattedMessage
          id="hero.expand_your_reach"
          defaultMessage="Expand your reach"
        />
      </Text>
    </Hero>

    <AboutSection id="about">
      <Grid cols={2} alignCenter>
        <ResponsiveImg src="/img/kibo-translate.svg" alt="" />
        <AboutGridItem col={2}>
          <H2 orange small light>
            <FormattedMessage
              id="about.our_mission"
              defaultMessage="OUR MISSION"
            />
          </H2>
          <Text bold large>
            <FormattedMessage
              id="about.linguistic_solutions"
              defaultMessage="We provide linguistic solutions for small to medium projects, including translation, interpreting and much more."
            />
          </Text>
        </AboutGridItem>
      </Grid>
    </AboutSection>

    <ExplainSection id="explain">
      <div>
        <H2 orange small light>
          <FormattedMessage
            id="explain.set_apart"
            defaultMessage="WHAT SETS US APART"
          />
        </H2>
        <Text bold large>
          <FormattedMessage
            id="explain.set_apart_description"
            defaultMessage="We have our eyes constantly set on the future, and make it our goal to preemptively deal with any translation issue that may arise before it has the chance to. From making sure translations are as accurate and true to the original content while making sure they sound natural in the target language, to deeply researching content to ensure only the most pertinent of translations make it to our client, we are much more than an ordinary translation company."
          />
        </Text>
        <H2 orange small light>
          <FormattedMessage
            id="explain.difference"
            defaultMessage="What is the Difference Between &quot; Translation&quot; and &quot;Localization&quot;?"
          />
        </H2>
        <Text bold large>
          <FormattedMessage
            id="explain.difference_description"
            defaultMessage="Translation is just that, translation.One language to another. Localization takes an extra step by slightly modifying content when needed sound natural whilst still delivering the initially intended information."
          />
        </Text>
      </div>
    </ExplainSection>

    <ServicesSection id="services" black>
      <H2 center lightGray>
        <FormattedMessage
          id="services.services"
          defaultMessage="SERVICES"
        />
      </H2>
      <ServicesGrid cols={3}>
        <GridItem>
          <IconContainer>
            <i className="fas fa-book fa-3x" />
          </IconContainer>
          <H3 center orange>
            <FormattedMessage
              id="services.translation"
              defaultMessage="Translation"
            />
          </H3>
          <Text center white>
            <FormattedMessage
              id="services.translation_description"
              defaultMessage="We can translate books, apps, digital media, videos and more! Just let us know what languages you need and we will take care of the rest."
            />
          </Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-comments fa-3x" />
          </IconContainer>
          <H3 center orange>
            <FormattedMessage
              id="services.interpreting"
              defaultMessage="Interpreting"
            />
          </H3>
          <Text center white>
            <FormattedMessage
              id="services.interpreting_description"
              defaultMessage="Need a last minute interpreter for your big presentation? We have professionals on standby waiting to assist you."
            />
          </Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-globe fa-3x" />
          </IconContainer>
          <H3 center orange>
            <FormattedMessage
              id="services.other_services"
              defaultMessage="Other Services"
            />
          </H3>
          <Text center white>
            <FormattedMessage
              id="services.other_services_description"
              defaultMessage="Haven&apos;t seen what you are looking for yet? We also provide other services such as quality assurance website localization and image localization."
            />
          </Text>
        </GridItem>
      </ServicesGrid>
    </ServicesSection>

    <WorkWithUsSection id="contact" orange>
      <div>
        <H2 white>
          <FormattedMessage
            id="contact.work_with_us"
            defaultMessage="WORK WITH US"
          />
        </H2>
        <Text white>
          <FormattedMessage
            id="contact.looking_for_translators"
            defaultMessage="We are looking for translators of any language pair to join us. All we need is your name, contact, and a few other bits of information concerning your background in translation to get started. If you are interested, please contact us "
          />
          <LinkText href="mailto:info@kibo-int.com">
            <FormattedMessage
              id="contact.here"
              defaultMessage="here."
            />
          </LinkText>
        </Text>
      </div>
    </WorkWithUsSection>
    <MapBackground>
      <ContactSection id="contact">
        <H2 black center>
          <FormattedMessage
            id="contact.contact"
            defaultMessage="CONTACT"
          />
        </H2>
        <EmailIconContainer>
          <LinkText orange bold href="mailto:info@kibo-int.com">info@kibo-int.com
          </LinkText>
        </EmailIconContainer>
      </ContactSection>

      <Footer column>
        <FooterContainer center>
          <SocialLink href="https://www.facebook.com/kiboint">
            <i className="fab fa-facebook-f fa-lg" />
          </SocialLink>
          <SocialLink href="https://www.twitter.com/kibo_int">
            <i className="fab fa-twitter fa-lg" />
          </SocialLink>
        </FooterContainer>
        <Text small center gray>
          <FormattedMessage
            id="footer.copyright"
            defaultMessage="Kibo International - Copyright 2018"
          />
        </Text>
      </Footer>
    </MapBackground>
  </div>
);

export default IndexPage;
