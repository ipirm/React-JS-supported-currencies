import React, { Component } from 'react';
import I18nText from 'libs/i18n/text';
import IconCurrency from 'components/global/icon-currency';
import { NavLink } from 'react-router-dom';
import { formatCurrency } from 'libs/currency-info';
import styles from './styles.css';
import tableData from './table-data';
import PopupGetWallet from './popup-get-wallet';

export default class TableCrypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiblePopup: false,
      walletItem: {},
    };
  }

  handleClosePopup = () => {
    this.setState({ isVisiblePopup: false });
  };

  handlePopupOpen = (item) => {
    this.setState({ isVisiblePopup: true, walletItem: item });
  };

  render() {
    return (
      <div>
        <PopupGetWallet
          isVisible={this.state.isVisiblePopup}
          onClose={() => this.handleClosePopup()}
          walletItem={this.state.walletItem}
        />
        <div className="container">
          <table className={styles.table}>
            <thead>
              <tr>
                <td colSpan={2}>
                  <I18nText id="CURRENCY" />
                </td>
                <td>
                  <I18nText id="WEB_WALLET" />
                </td>
                <td>
                  <I18nText id="DESKTOP" />
                </td>
                <td>
                  <I18nText id="MOBILE_WALLET" />
                </td>
                <td>
                  <I18nText id="CHROME_EXTENSION" />
                </td>
                <td>
                  <I18nText id="EXCHANGE" />
                </td>
                <td>
                  <I18nText id="BUY" />
                </td>
                <td />
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => (
                <tr key={`table-key${item.ticker || item.title}`}>
                  <td className={styles.iconCol}>
                    {item.icon ? (
                      <img src={item.icon} alt="" />
                    ) : (
                      <IconCurrency currency={item.ticker} className={styles.iconCurrency} />
                    )}
                  </td>
                  <td>
                    <span className={styles.title}>
                      {item.link ? (
                        <NavLink to={item.link} rel="noopener noreferrer">{item.title}</NavLink>
                      ) : item.title}
                    </span>
                    <span className={styles.ticker}>
                      {formatCurrency(item.ticker)}
                    </span>
                  </td>
                  <td className={styles.dotWrapper}>
                    {item.web ? (<span className={styles.dotIcon} />) : null}
                  </td>
                  <td className={styles.dotWrapper}>
                    {item.web ? (<span className={styles.dotIcon} />) : null}
                  </td>


                  <td className={styles.dotWrapper}>
                    {item.android ? (<span className={styles.dotIcon} />) : null}
                  </td>
                  <td className={styles.dotWrapper}>
                    {item.web ? (<span className={styles.dotIcon} />) : null}
                  </td>
                  <td className={styles.dotWrapper}>
                    {item.exchange ? (<span className={styles.dotIcon} />) : null}
                  </td>
                  <td className={styles.dotWrapper}>
                    {item.buy ? (<span className={styles.dotIcon} />) : null}
                  </td>
                  <td className={styles.dotWrapper}>
                    <a onClick={() => this.handlePopupOpen(item)}>
                      <I18nText id="GET_WALLET" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
