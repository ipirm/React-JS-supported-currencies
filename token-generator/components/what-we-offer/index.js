import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';

import ImageUser from './image-user.svg';
import ImagePromo from './image-promo.svg';
import ImageSupport from './image-support.svg';

class PosterComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <CenterTitle title={<I18nText id="WHAT_WE_OFFER" />} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <div className={styles.wrapperBlock}>
              <img src={ImageUser} alt="" />
              <h3>
                <I18nText id="TG_USER_FRIENDLY_INTERFACE" html="true" />
              </h3>
              <p>
                <I18nText id="TG_USER_FRIENDLY_INTERFACE_DESC" />
              </p>
              <a href="/app/token-generator">
                <I18nText id="CHECK_OUT" />
              </a>
            </div>
          </div>
          <div className="col-xs-4">
            <div className={styles.wrapperBlock}>
              <img src={ImagePromo} alt="" />
              <h3>
                <I18nText id="TG_PROMOTION_PACKAGE" html="true" />
              </h3>
              <p>
                <I18nText id="TG_PROMOTION_PACKAGE_DESC" />
              </p>
              <a href="/app/token-generator">
                <I18nText id="CHECK_OUT" />
              </a>
            </div>
          </div>
          <div className="col-xs-4">
            <div className={styles.wrapperBlock}>
              <img src={ImageSupport} alt="" />
              <h3>
                <I18nText id="TG_FULL_TECH_SUPPORT" html="true" />
              </h3>
              <p>
                <I18nText id="TG_FULL_TECH_SUPPORT_DESC" />
              </p>
              <a href="/app/token-generator">
                <I18nText id="CHECK_OUT" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterComponent;
