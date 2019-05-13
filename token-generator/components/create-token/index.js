import React, { Component } from 'react';
import { I18nText, withI18N } from 'libs/i18n';
import PropTypes from 'prop-types';
import Poster from 'components/specific/poster';
import Button from 'components/global/button';
import Input from 'components/global/input';
import styles from './styles.css';

import SlideBinance from './slider-images/binance.jpg';
import SlideCoinmarketcup from './slider-images/coinmarket.jpg';
import SlideEtherscan from './slider-images/etherscan.jpg';
import SlideGuarda from './slider-images/guarda.jpg';

const slides = [
  SlideBinance,
  SlideCoinmarketcup,
  SlideEtherscan,
  SlideGuarda,
];

class PosterComponent extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
  }

  state = {
    slide: 0,
    tokenName: '',
  }

  static contextTypes = {
    i18n: PropTypes.object,
  }

  handleRight = () => {
    this.setState({ slide: Math.min(this.state.slide + 1, slides.length - 1) });
  }

  handleLeft = () => {
    this.setState({ slide: Math.max(this.state.slide - 1, 0) });
  }

  handleChangeTokenName = ({ target: { value } }) => {
    this.setState({ tokenName: value });
  }

  handleClick = () => {
    const { tokenName } = this.state;
    if (!tokenName) {
      return;
    }
    window.location.href = `/app/token-generator?title=${tokenName}`;
  }

  render() {
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-6">
          <h1>
            <I18nText id="TG_HOW_TO_CREATE_TOKEN" />
          </h1>
          <ul className={styles.stepper}>
            <li>
              <span className={styles.step}>1</span>
              <h3><I18nText id="TG_NAME_YOUR_TOKEN" /></h3>
              <p>
                <I18nText id="TG_DESC_NAME_TOKEN" />
              </p>
              <div className={styles.wrapperInput}>
                <Input
                  placeholder={this.props.i18n.translate('TG_TOKEN_NAME')}
                  className={styles.input}
                  value={this.state.tokenName}
                  onChange={this.handleChangeTokenName}
                />
                <Button
                  size="big"
                  className={styles.button}
                  onClick={this.handleClick}
                >
                  <I18nText id="CREATE" />
                </Button>
              </div>
            </li>
            <li>
              <span className={styles.step}>2</span>
              <h3><I18nText id="TG_SET_UP_SUPPLY" /></h3>
              <p>
                <I18nText id="TG_SET_UP_SUPPLY_DESC" />
              </p>
            </li>
            <li>
              <span className={styles.step}>3</span>
              <h3><I18nText id="TG_DEPLOY_CONTRACT" /></h3>
              <p>
                <I18nText id="TG_DEPLOY_CONTRACT_DESC" html />
              </p>
            </li>
          </ul>
          <a href="/app/token-generator">
            <Button color="white">
              <I18nText id="CREATE_TOKEN" />
            </Button>
          </a>
        </div>
        <div className="col-xs-6">
          <p className={styles.sliderText}>
            <I18nText id="TG_FOOTER_SLIDER_INFO" />
          </p>
          <div className={styles.slider}>
            <div className={styles.slide} style={{ backgroundImage: `url(${slides[this.state.slide]})` }} />
          </div>
          <div className="clearfix" />
          <div className={styles.arrows}>
            <div className={styles.arrowLeft} onClick={this.handleLeft} />
            <div className={styles.arrowRight} onClick={this.handleRight} />
          </div>
        </div>
      </Poster>
    );
  }
}


export default withI18N(PosterComponent);
