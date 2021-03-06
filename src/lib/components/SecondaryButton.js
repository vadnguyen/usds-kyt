import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/SecondaryButton.scss';

/**
 * The SecondaryButton component shows a button with white background and blue border.
 * @returns {node} The rendered DOM node
 * @param {string} type required. Defaults to 'button'. HTML button type.
 * Must be 'button', 'submit' or 'reset'
 * @param {bool} padded if true, makes a wider button with extrea left and right padding
 * @param {bool} block if true, makes button with width of the container
 * @param {func} handleClick The function to be run when the button is clicked
 * @param {node} children required. Expected to be the text to display inside the button
 */
export default function SecondaryButton(props) {
  const { type, padded, block, onClick, externalLink, title, children } = props;
  const buttonClassName = classnames({
    [styles.secondaryButton]: true,
    [styles.block]: block,
    [styles.padded]: padded,
    [styles.externalLink]: externalLink,
  });

  return (
    <button
      type={type}
      title={title}
      className={buttonClassName}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}

SecondaryButton.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]).isRequired,
  title: PropTypes.string,
  block: PropTypes.bool,
  padded: PropTypes.bool,
  externalLink: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

SecondaryButton.defaultProps = {
  type: 'button',
  title: '',
  block: false,
  padded: false,
  externalLink: false,
  onClick: () => false,
};
