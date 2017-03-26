import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/PrimaryButton.scss';

/**
 * The PrimaryButton component shows a button with a blue background.
 * @returns {node} The rendered DOM node
 * @param {string} type required. Defaults to 'button'. HTML button type.
 * Must be 'button', 'submit' or 'reset'
 * @param {bool} padded if true, makes a wider button with extrea left and right padding
 * @param {bool} block if true, makes button with width of the container
 * @param {func} handleClick The function to be run when the button is clicked
 * @param {node} children required. Expected to be the text to display inside the button
 */
export default function PrimaryButton({ type, padded, block, onClick, children }) {
  const buttonClassName = classnames({
    [styles.primaryButton]: true,
    [styles.block]: block,
    [styles.padded]: padded,
  });

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  type: PropTypes.string,
  block: PropTypes.bool,
  padded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

PrimaryButton.defaultProps = {
  type: 'button',
};
