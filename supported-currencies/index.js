import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import LatestNews from 'components/specific/latest-news';
import Footer from 'components/specific/footer';
import Poster from './components/poster';
import TableCrypto from './components/table-crypto';

import meta from './meta';

class SupportedCryptocurrencies extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  render() {
    return (
      <DocumentMeta extend {...meta(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster />
          <div className="clearfix" />
          <TableCrypto />
          <LatestNews />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(SupportedCryptocurrencies);
