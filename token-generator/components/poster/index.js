import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import Poster from 'components/specific/poster';
import Button from 'components/global/button';
import styles from './styles.css';

import ImageCreate from './image-create.svg';
import ImageDistibute from './image-distribute.svg';
import ImagePromote from './image-promote.svg';

class PosterComponent extends Component {
  render() {
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-5">
          <h1>
            Guarda <I18nText id="TOKEN_GENERATOR" />
          </h1>
          <h2>
            <I18nText id="TOKEN_GENERATOR_POSTER_H2" />
          </h2>
          <div className={styles.blocks}>
            <p>
              <I18nText id="TOKEN_GENERATOR_POSTER_TEXT" />
            </p>

            <div className={styles.functions}>
              <span>
                <img src={ImageCreate} alt="" />
                <p><I18nText id="CREATE" /></p>
              </span>
              <span>
                <img src={ImageDistibute} alt="" />
                <p><I18nText id="DISTRIBUTE" /></p>
              </span>
              <span>
                <img src={ImagePromote} alt="" />
                <p><I18nText id="PROMOTE" /></p>
              </span>
            </div>

            <a href="/app/token-generator" target="_blank">
              <Button color="white" size="big">
                <I18nText id="CREATE_TOKEN" />
              </Button>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-xs-offset-1">
          <div className={styles.webWalletImage} />
        </div>
      </Poster>
    );
  }
}


export default PosterComponent;
