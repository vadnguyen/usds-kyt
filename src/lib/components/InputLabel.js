import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/InputLabel.scss';
/**
 * Label for form fields
 * @returns {node} the rendered DOM node
 * @param {string} label required - text for the input's label
 * @param {string} htmlFor required - sets the <label for... attribute
 * @param {bool} required defaults to false. Adds required label
 */
export default function InputLabel({ label, htmlFor, required }) {
  const style = classnames({
    [styles.label]: true,
    [styles.required]: required,
  });

  return (
    <label
      id={`${htmlFor}-label`}
      className={style}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

InputLabel.defaultProps = {
  required: false,
};
