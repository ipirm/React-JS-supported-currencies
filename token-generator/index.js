import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import Footer from 'components/specific/footer';
import WhenUsedBlock from './components/what-we-offer';
import ChooseGuarda from './components/choose-guarda';
import PromoteYourToken from './components/promote-your-token';
import SmartContracts from './components/smart-contracts';
import CreateToken from './components/create-token';
import GifsWithDifferent from './components/gifs-with-different';
import Poster from './components/poster';
import meta from './meta';

class WebWalletPageLanding extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  };

  render() {
    return (
      <DocumentMeta extend {...meta(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster />
          <WhenUsedBlock />
          <GifsWithDifferent />
          <ChooseGuarda />
          <SmartContracts />
          <CreateToken />
          <PromoteYourToken />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(WebWalletPageLanding);
