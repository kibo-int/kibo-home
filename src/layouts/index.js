import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl'; // for Firefox on Android
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import translations from '../languages/translations';

import favicon from '../../favicon.ico';

import theme from '../styles/theme';
import '../styles/global';

import { Wrapper } from '../styles/utils';
import Header from '../components/Header';

const MainStyle = Wrapper.withComponent('main');
const Main = MainStyle.extend` 
  `;

addLocaleData([...en, ...ja]);

class TemplateWrapper extends Component {
  // state = {
  //   language: 'en',
  // }

  // componentDidMount = () =>
  //   this.setState({ language: navigator.language.substring(0, 2) });

  // toggleLanguage = (language) => {
  //   this.setState({ language });
  //   console.log('Langauge: ', language);
  //   console.log(this.state.language);
  // }

  render() {
    // const { language } = this.state;
    const { children } = this.props;

    const language = navigator && navigator.language.substring(0, 2) === 'ja' ? 'ja' : 'en';

    return (
      <IntlProvider locale={language} messages={translations[language]}>
        <ThemeProvider theme={theme}>
          <div>
            <Helmet
              title="Kibo International"
              meta={[
                  { name: 'description', content: 'Kibo International will take care of all your localization needs with services that range from translation, interpreting, and more!' },
                  { name: 'keywords', content: 'homepage, kibo, localization, international, localisation, translation, interpreting' },
                  { property: 'twitter:card', content: 'summary' },
                  { property: 'twitter:site', content: '@kibo_int' },
                  { property: 'twitter:title', content: 'Kibo International' },
                  { property: 'twitter:description', content: 'Kibo International will take care of all your localization needs with services that range from translation, interpreting, and more!' },
                  { property: 'twitter:creator', content: 'Kibo' },
                  { property: 'twitter:image', content: 'http://kibo-int.com/img/city.jpeg' },
                  { property: 'og:title', content: 'Kibo' },
                  { property: 'og:url', content: 'http://kibo-int.com' },
                  { property: 'og:image', content: 'http://kibo-int.com/img/city.jpeg' },
                  { property: 'og:description', content: 'Kibo International will take care of all your localization needs with services that range from translation, interpreting, and more!' },
                  { property: 'og:site_name', content: 'Kibo International' },
                  { name: 'theme-color', content: '#ff8939' },
                  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                ]}
            >
              <link rel="shortcut icon" type="image/png" href={favicon} />
              <html lang="en" />
            </Helmet>
            <Header language={language} toggleLanguage={this.toggleLanguage} />
            <Main noPadding >
              {children()}
            </Main>
          </div>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
