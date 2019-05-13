import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import styles from './styles.css';

import ImageAudit from './image-audit.svg';
import ImageEtherscan from './image-etherscan.svg';
import ImageErc20 from './image-erc20.svg';

class PosterComponent extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h2><I18nText id="TG_SMART_CONTRACT_CORE_YOUR_TOKEN" html="true" /></h2>
              <p>
                <I18nText id="TG_SMART_CONTRACT_CORE_YOUR_TOKEN_DESC" />
              </p>
            </div>
            <div className="col-xs-6">
              <div className="row">
                <div className="col-xs-4">
                  <div className={styles.wrapperBlock}>
                    <img src={ImageAudit} alt="" />
                    <h4><I18nText id="TG_AUDIT_AND_SECURE" /></h4>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className={styles.wrapperBlock}>
                    <img src={ImageEtherscan} alt="" />
                    <h4><I18nText id="ETHERSCAN_READY" /></h4>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className={styles.wrapperBlock}>
                    <img src={ImageErc20} alt="" />
                    <h4><I18nText id="TG_ERC20_COMPATIBLE" /></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PosterComponent;
