import React from 'react';
import { FlexContainer, FlexRow, FlexCol } from './FlexGrid';
import styles from '../styles/IrsHeader.scss';
import irsLogo from '../assets/images/logo-irs-horizontal-white.svg';

export default function IrsHeader(props) {
  return (
    <header className={styles.irsHeader}>
      <FlexContainer role="banner">
        <FlexRow justify="between">
          <FlexCol xs="2">
            <a className={styles.irsLogo} href="" aria-label="Return to the main view">
              <img src={irsLogo} alt="" />
            </a>
          </FlexCol>
          <FlexCol xs="8">
            <nav className={styles.nav}>
              <ul>
                <li className={styles.welcome}>Welcome, {props.userFullName}</li>
                <li>
                  <a href="">
                    Profile
                    <span className={styles['usa-sr-only']}>
                      This link will open User Profile page in the same browser window.
                    </span>
                  </a>
                </li>
                <li>
                  <a className={styles.logout} href="">
                    Logout
                    <span className={styles['usa-sr-only']}>
                      This link will log the user out.
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </header>

  );
}

IrsHeader.propTypes = {
  userFullName: React.PropTypes.string,
};

IrsHeader.defaultProps = {
  userFullName: 'MICHAEL D STANALAND',
};
