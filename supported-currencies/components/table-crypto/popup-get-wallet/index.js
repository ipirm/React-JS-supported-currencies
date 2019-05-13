import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import { NavLink } from 'components/global/link';
import PropTypes from 'prop-types';
import Button from 'components/global/button';
import Popup from 'components/global/popup';
import styles from './styles.css';

export const CURRENCY_DATA_TYPE = {
  ANDROID: {
    ID: 'android',
  },
  BUY: {
    ID: 'buy',
  },
  EXCHANGE: {
    ID: 'exchange',
  },
  WEB: {
    ID: 'web',
  },
  DESKTOP: {
    ID: 'desktop',
  },
};

export default class extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    walletItem: PropTypes.object,
  };

  getCurrencyName = () => {
    if (this.props.walletItem.title) {
      return this.props.walletItem.title;
    }
    return '';
  };

  validateClick = (e, itemData) => {
    if (!this.isLinkActive(itemData)) {
      e.preventDefault();
    }
  }

  isLinkActive = (itemData) => {
    switch (itemData) {
      case CURRENCY_DATA_TYPE.ANDROID.ID:
        return this.props.walletItem.android;
      case CURRENCY_DATA_TYPE.WEB.ID:
        return this.props.walletItem.web;
      case CURRENCY_DATA_TYPE.EXCHANGE.ID:
        return this.props.walletItem.exchange;
      case CURRENCY_DATA_TYPE.BUY.ID:
        return this.props.walletItem.buy;
      case CURRENCY_DATA_TYPE.DESKTOP.ID:
        return this.props.walletItem.web;
      default:
        return false;
    }
  };

  render() {
    const data = this.props.walletItem;
    return (
      <Popup visible={this.props.isVisible} onClose={this.props.onClose} width={450}>
        <div className={styles.whiteBlock}>
          <h3 className={styles.heading}>
            <I18nText id="GET_NAME_WALLET" values={{ name: this.getCurrencyName() }} />:
          </h3>
          <div>
            <div className={styles.container}>
              <div className={styles.containerHeading}>
                <I18nText id="APPLICATIONS" />:
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <a
                    onClick={e => this.validateClick(e, CURRENCY_DATA_TYPE.DESKTOP.ID)}
                    className={!this.isLinkActive(CURRENCY_DATA_TYPE.DESKTOP.ID) ? styles.inactive : undefined}
                    href={data.links && data.links.desktop ? data.links.desktop : '#'}
                  >
                    <I18nText id="DESKTOP_WALLET" />
                  </a>
                </div>
                <div className={styles.item}>
                  <a
                    onClick={e => this.validateClick(e, CURRENCY_DATA_TYPE.WEB.ID)}
                    className={!this.isLinkActive(CURRENCY_DATA_TYPE.WEB.ID) ? styles.inactive : undefined}
                    href={data.links && data.links.web ? data.links.web : '#'}
                  >
                    <I18nText id="WEB_WALLET" />
                  </a>
                </div>
                <div className={styles.item}>
                  <NavLink
                    className={!this.isLinkActive(CURRENCY_DATA_TYPE.ANDROID.ID) ? styles.inactive : undefined}
                    rel="noopener noreferrer"
                    target="_blank"
                    to="/mobile-wallet"
                    onClick={e => this.validateClick(e, CURRENCY_DATA_TYPE.ANDROID.ID)}
                  >
                    <I18nText id="MOBILE_WALLET" />
                  </NavLink>
                </div>
                <div className={styles.item}>
                  <a
                    onClick={e => this.validateClick(e, CURRENCY_DATA_TYPE.WEB.ID)}
                    className={!this.isLinkActive(CURRENCY_DATA_TYPE.WEB.ID) ? styles.inactive : undefined}
                    href="https://chrome.google.com/webstore/detail/guarda/hpglfhgfnhbgpjdenjgmdgoeiappafln"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <I18nText id="CHROME_EXTENSION" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.buttonsWrapper}>
              <div>
                <Button
                  color="blue"
                  size="big"
                  onClick={() => this.props.onClose()}
                >
                  <I18nText id="CLOSE" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}
