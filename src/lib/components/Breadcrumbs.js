import React, { PropTypes } from 'react';
import styles from '../styles/Breadcrumbs.scss';

/**
 * The Breadcrumbs component shows a horizontal list of links or text.
 * @returns {node} The rendered DOM node
 * @param {node} children required.
 */
export function Breadcrumbs({ children }) {
  return (
    <div>
      <ul className={styles.breadcrumbs}>
        {children}
      </ul>
    </div>
  );
}

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};

Breadcrumbs.defaultProps = {
};

export function Breadcrumb({ children }) {
  return (
    <li className={styles.breadcrumb}>
      {children}
    </li>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

Breadcrumb.defaultProps = {
};
