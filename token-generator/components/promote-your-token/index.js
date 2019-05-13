import React, { Component } from 'react';
import CenterTitle from 'components/specific/center-title';
import { I18nText } from 'libs/i18n';
import styles from './styles.css';

import ImageWallet from './image-wallet.svg';
import ImageUpload from './image-upload.svg';
import ImageCrowdsale from './image-crowdsale.svg';
import ImagePayouts from './image-payouts.svg';

class PosterComponent extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <CenterTitle title={<I18nText id="TG_PROMOTE_YOUR_TOKEN" />} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <div className={styles.wrapperBlock}>
                <img src={ImageWallet} alt="" />
                <h3><I18nText id="TG_GET_CUSTOM_TOKEN" /></h3>
                <p>
                  <I18nText id="TG_GET_CUSTOM_DESC" />
                </p>
              </div>
            </div>
            <div className="col-xs-3">
              <div className={styles.wrapperBlock}>
                <img src={ImageUpload} alt="" />
                <h3><I18nText id="TG_UPLOAD_YOUR_ICON" /></h3>
                <p>
                  <I18nText id="TG_UPLOAD_YOUR_ICON_DESC" />
                </p>
              </div>
            </div>
            <div className="col-xs-3">
              <div className={styles.wrapperBlock}>
                <img src={ImageCrowdsale} alt="" />
                <h3><I18nText id="TG_GET_CROWDSALE_CONTRACTS" /></h3>
                <p>
                  <I18nText id="TG_GET_CROWDSALE_CONTRACTS_DESC" />
                </p>
              </div>
            </div>
            <div className="col-xs-3">
              <div className={styles.wrapperBlock}>
                <img src={ImagePayouts} alt="" />
                <h3><I18nText id="TG_MAKE_MASS_PAYOUTS" /></h3>
                <p>
                  <I18nText id="TG_MAKE_MASS_PAYOUTS_DESC" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PosterComponent;
