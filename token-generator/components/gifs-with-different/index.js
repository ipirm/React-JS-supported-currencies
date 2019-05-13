import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';

import Slide1 from './slider-images/carousel-1.png';
import Slide2 from './slider-images/carousel-2.png';
import Slide3 from './slider-images/carousel-3.png';

const slides = [
  Slide1,
  Slide2,
  Slide3,
];

class PosterComponent extends Component {
  state = {
    slide: 0,
  }

  handleRight = () => {
    this.setState({ slide: Math.min(this.state.slide + 1, slides.length - 1) });
  }

  handleLeft = () => {
    this.setState({ slide: Math.max(this.state.slide - 1, 0) });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <CenterTitle
              title={<I18nText id="TG_SLIDER_MAKING_TITLE" />}
              description={<I18nText id="TG_SLIDER_MAKING_TITLE_DESC" />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-1">
            <div className={styles.arrowLeft} onClick={this.handleLeft} />
          </div>
          <div className="col-xs-8">
            {this.state.slide === 0 && (
              <div className={styles.descSlide}>
                <h4><I18nText id="TG_CREATE_TOKENS" /></h4>
                <p>
                  <I18nText id="TG_CREATE_TOKENS_SLIDER_DESC" html />
                </p>
              </div>
            )}
            {this.state.slide === 1 && (
              <div className={styles.descSlide}>
                <h4><I18nText id="TG_SLIDER_DISTRIBUTE_IT" /></h4>
                <p>
                  <I18nText id="TG_SLIDER_DISTRIBUTE_IT_DESC" html />
                </p>
              </div>
            )}
            {this.state.slide === 2 && (
              <div className={styles.descSlide}>
                <h4><I18nText id="TG_PROMOTE_YOUR_TOKEN" /></h4>
                <p>
                  <I18nText id="TG_SLIDER_PROMOTE_TOKEN_DESC" html />
                </p>
              </div>
            )}
          </div>
          <div className="col-xs-1">
            <div className="pull-right">
              <div className={styles.arrowRight} onClick={this.handleRight} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.slider}>
              <div className={styles.slide} style={{ backgroundImage: `url(${slides[this.state.slide]})` }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PosterComponent;
