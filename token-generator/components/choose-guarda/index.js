import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import CenterTitle from 'components/specific/center-title';
import Button from 'components/global/button';
import styles from './styles.css';

import ImageSearch from './icon-search.svg';
import ImageSecure from './icon-secure.svg';
import ImageTrusted from './icon-trusted.svg';

class PosterComponent extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <CenterTitle title={<I18nText id="CHOOSE_GUARDA" />} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <div className={styles.wrapperBlock}>
                <img src={ImageTrusted} alt="" />
                <h3><I18nText id="TRUSTED_SERVICE" /></h3>
                <p>
                  <I18nText id="TRUSTED_SERVICE_DESC" />
                </p>
              </div>
            </div>
            <div className="col-xs-4">
              <div className={styles.wrapperBlock}>
                <img src={ImageSecure} alt="" />
                <h3><I18nText id="SECURE_SMART_CONTRACT" /></h3>
                <p>
                  <I18nText id="SECURE_SMART_CONTRACT_DESC" />
                </p>
              </div>
            </div>
            <div className="col-xs-4">
              <div className={styles.wrapperBlock}>
                <img src={ImageSearch} alt="" />
                <h3><I18nText id="ETHERSCAN_READY" /></h3>
                <p>
                  <I18nText id="ETHERSCAN_READY_DESC" />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="/app/token-generator" target="_blank">
                <Button color="blue" size="big">
                  <I18nText id="CREATE_TOKEN" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PosterComponent;
