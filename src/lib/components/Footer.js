import React from 'react';
// import classnames from '../helpers/classnames';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import irsLogo from '../assets/images/logo-irs-horizontal-white.svg';
import styles from '../styles/Footer.scss';

/**
 * The Module component is the white box container for module chunks of the app.
 * @returns {node} The rendered DOM node
 * @param {string} title  The module's title to be displayed in an h2
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FlexContainer>
        <FlexRow align="center" justify="between">
          <FlexCol xs="12" md="2">
            <img src={irsLogo} className={styles.logo} alt="Decorative IRS Logo" aria-hidden="true" />
          </FlexCol>
          <FlexCol xs="12" md="8" className={styles.linksContainer}>
            <ul id="footer-links">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="http://survey.foreseeresults.com/survey/display?cid=BAZQsB5xRUYZtxB5gM5BUw==&amp;sid=link-online-act">
                  Give Feedback <span className={styles.srOnly}> This link will open ForeSee Survey in a new browser window.</span>
                </a>
              </li>

              <li>
                <a target="_blank" rel="noopener noreferrer" href="http://www.irs.gov/uac/IRS-Privacy-Policy">
                  Privacy Policy <span className={styles.srOnly}> This link will open the IRS privacy policy in a new window.</span>
                </a>
              </li>

              <li id="accessibility-link">
                <a target="_blank" rel="noopener noreferrer" href="accessibilityGuide.html">
                  Accessibility <span className={styles.srOnly}> This link will open the accessibility guide in a new window.</span>
                </a>
              </li>
            </ul>
          </FlexCol>

        </FlexRow>
      </FlexContainer>
    </footer>
  );
}

// Footer.propTypes = {
// };
//
// Footer.defaultProps = {
// };
