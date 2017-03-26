import React, { PropTypes } from 'react';
import styles from '../styles/CheckList.scss';

/**
 * An unordered list with checkmark icons as bullets
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * @returns {node} The rendered DOM node
 * @param {node} children required. Expected to be CheckListItem
 */
export function CheckList({ children }) {
  return (
    <ul className={styles.checkList}>
      {children}
    </ul>
  );
}

CheckList.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * An unordered list with checkmark icons as bullets
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * @returns {node} The rendered DOM node
 * @param {node} children required. Expected to be CheckListItem
 */
export function CheckListItem({ children }) {
  return (
    <li className={styles.checkListItem}>
      {children}
    </li>
  );
}

CheckListItem.propTypes = {
  children: PropTypes.node.isRequired,
};
