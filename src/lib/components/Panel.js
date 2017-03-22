import React, { PropTypes } from 'react';
import styles from '../styles/Panel.scss';

/**
 * The Module component is the white box container for module chunks of the app.
 * @returns {node} The rendered DOM node
 * @param {string} title  The module's title to be displayed in an h2
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default function Panel({ title, children }) {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
