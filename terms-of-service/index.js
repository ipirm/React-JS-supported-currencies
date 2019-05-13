/* eslint max-len: [0], react/no-unescaped-entities: [0] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimplePage from 'components/specific/simple-page';
import { withI18N, I18nText } from 'libs/i18n';
import meta from './meta';

class TermsOfServicePage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  render() {
    return (
      <SimplePage meta={meta(this.props.i18n)} isRenderWebView>
        <I18nText id="TERMS_OF_SERVICE_CONTENT" html />
      </SimplePage>
    );
  }
}

export default withI18N(TermsOfServicePage);
