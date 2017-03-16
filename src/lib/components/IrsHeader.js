import React from 'react';
import { FlexContainer, FlexRow, FlexCol } from './FlexGrid';
import styles from '../styles/IrsHeader.scss';
import irsLogo from '../assets/images/logo-irs-horizontal-white.svg';

export default function IrsHeader(props) {
  return (
    <header className={styles.irsHeader}>
      <FlexContainer role="banner">
        <FlexRow justify="between">
          <FlexCol>
            <a className={styles.irsLogo} href="" aria-label="Return to the main view">
              <img src={irsLogo} alt="" />
            </a>
          </FlexCol>
          <FlexCol>
            Other content
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </header>

  );
}

IrsHeader.propTypes = {


};
