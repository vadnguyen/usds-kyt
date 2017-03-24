import React, { PropTypes } from 'react';
// import Link from 'react-router/lib/Link';
import styles from '../styles/ExternalLink.scss';

/**
 * Shows a link with an icon indicating the user is leaving the site.
 * @returns {node} The rendered DOM node
 * @param {node} children required. The link text
 */
export default function ExternalLink({ href, children }) {
  return (
    <a className={styles.externalLink} href={href}>
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ExternalLink.defaultProps = {
};
