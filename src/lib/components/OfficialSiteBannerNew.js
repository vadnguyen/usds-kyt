import React from 'react';
import { FlexContainer, FlexRow, FlexCol } from './FlexGrid';
import iconDotGov from '../assets/images/icon-dot-gov.svg';
import iconHttps from '../assets/images/icon-https.svg';
// import iconFlag from '../assets/images/us-flag-icon.svg';
// import iconFlag from '../assets/images/favicons/favicon-57.png';

import styles from '../styles/OfficialSiteBannerNew.scss';

/**
 * Renders the standard official site banner indicating that this site is an
 * official government site.
 *
 * This component is usually rendered in the common {@link Header}. You should
 * only need to add this manually if you are implementing your own header.
 * In that case, this should be the element that is at the very top of the
 * window.
 *
 * For more information, please consult the
 * [U.S. Web Design Standards](https://standards.usa.gov).
 */
export default class OfficialSiteBannerNew extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false,
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  /**
   * Toggles the visiblity of the content section.
   */
  toggleDetails() {
    this.setState({ contentVisible: !this.state.contentVisible });
  }

  /**
   * Renders the content of the accordion that expands when the user clicks
   * on the "Here's how you know" link.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderContent() {
    if (!this.state.contentVisible) {
      return '';
    }
    return (
      <div className={styles.content} id="gov-banner">
        <FlexRow>
          <FlexCol md="6" xl="5">
            <div className={styles['usa-banner-content-group']}>
              <img
                src={iconDotGov} alt="Dot gov"
              />
              <div className={styles['usa-banner-textblock']}>
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />
                  Federal government websites always use a .gov or .mil domain.
                  Before sharing sensitive information online, make sure you’re
                  on a .gov or .mil site by inspecting your browser’s address
                  (or “location”) bar.
                </p>
              </div>
            </div>
          </FlexCol>
          <FlexCol md="6" xl="5">
            <div className={styles['usa-banner-content-group']}>
              <img
                src={iconHttps}
                alt="SSL"
              />
              <div className={styles['usa-banner-textblock']}>
                <p>
                  <strong>https:// means it’s secure.</strong>
                  <br />
                  This site is protected by an SSL (Secure Sockets Layer)
                  certificate that’s been signed by the U.S. government.
                  In other words, any information or browsing
                  history that you provide is transmitted securely.
                </p>
              </div>
            </div>
          </FlexCol>
        </FlexRow>
      </div>
    );
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <div className={styles.wrapper}>
        <FlexContainer>
          <FlexRow>
            <FlexCol className={this.state.contentVisible ? styles.expanded : null}>
              <header className={styles.banner}>
                {/* <img src={iconFlag} alt="U.S. Flag" /> */}
                <p className={styles.bannerText}>
                  An official website of the United States government
                </p>
                <button
                  className={styles['usa-banner-button']}
                  aria-expanded={this.state.contentVisible} aria-controls="gov-banner"
                  onClick={this.toggleDetails}
                >
                  <span className="usa-banner-button-text">
                    Here’s how you know
                  </span>
                </button>
              </header>
            </FlexCol>
          </FlexRow>
          {this.renderContent()}
        </FlexContainer>

      </div>
    );
  }
}
