import React, { Component } from 'react';
import I18nText from 'libs/i18n/text';
import Poster from 'components/specific/poster';
import styles from './styles.css';

class PosterComponent extends Component {
  render() {
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-7">
          <h1>
            <I18nText id="SUPPORTED_CRYPTOCURRENCIES_POSTER_TITLE" />
          </h1>
          <p>
            <I18nText id="SUPPORTED_CRYPTOCURRENCIES_POSTER_TEXT" html />
          </p>
        </div>

        <div className="col-xs-5">
          <div className={styles.posterImage} />
        </div>

      </Poster>
    );
  }
}

export default PosterComponent;
