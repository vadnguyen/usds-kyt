import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/Panel.scss';

/**
 * The Module component is the white box container for module chunks of the app.
 * @returns {node} The rendered DOM node
 * @param {string} title  The module's title to be displayed in an h2
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default function Panel({ title, padding, className, children }) {
  const style = classnames({
    [styles.panel]: true,
    [styles[`padding-${padding}`]]: padding,
  });

  return (
    <div className={classnames([style, className])}>
      {title
        ? <h2 className={styles.title}>{title}</h2>
        : null}
      {children}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.oneOf([
    'none',
    'normal',
    'extra',
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};
