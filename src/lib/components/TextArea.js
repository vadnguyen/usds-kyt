import React, { Component, PropTypes } from 'react';
import classnames from '../helpers/classnames';
import makeId from '../helpers/makeId';
import InputLabel from './InputLabel';
import styles from '../styles/TextArea.scss';

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - label: Sets the text for the input's label
 *
 * Optional props:
 * - id: sets the id attribute for the textarea and the <label for... attribute
 * - value: string. If present pre-populates the textarea with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - isValid: bool. If true, sets isValid state - i.e. green border
 * - allowedChars: Validator object. If present, user can only type characters that match the given test
 */
export default class TextArea extends Component {
  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   * Sets the initial state of the textarea
   * Value: value of the textarea.
   * isPristine: tracks if user has typed in the textarea
   * isValid: tracks if the field is valid based on passed validators
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);

    let pristine = true;

    if (this.props.value || this.props.errorMessage) {
      pristine = false;
    }

    this.state = {
      value: this.props.value,
      isPristine: pristine,
      isValid: this.props.isValid,
      hasError: this.props.errorMessage,
      errorMessage: this.props.errorMessage,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : makeId(this);
  }

  /**
   * If errorMessage is updated after initial render, adjust the state accordingly
   */
  componentWillReceiveProps({ errorMessage }) {
    if (errorMessage) {
      this.setState({
        isPristine: false,
        isValid: false,
        hasError: true,
        errorMessageBody: errorMessage,
      });
    }
  }

  /**
   * @returns {node} (div) that includes a label, errorMessage, input
   */
  render() {
    let error = null;
    if (this.state.hasError) {
      error = (
        <span className={styles.errorMessage} role="alert">
          {this.state.errorMessage}
        </span>
      );
    }

    const style = classnames({
      [styles.input]: true,
      [styles.success]: this.state.isValid,
      [styles.error]: this.state.hasError,
    });

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <InputLabel htmlFor={this.id} required={this.props.required} label={this.props.label} />

        {error}

        <textarea
          id={this.id}
          name={this.props.id}
          value={this.state.value}
          className={style}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        >
        </textarea>
      </div>
    );
  }

  /**
   * Checks textarea value against required status and passed validators
   */
  validate() {
    const validators = this.props.validator;
    // Check if field empty
    if (!this.state.value) {
      // If it's required, say so
      if (this.props.required) {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: 'This field is required',
        });
      } else {
        // is empty so reset isValid and hasError
        this.setState({
          isValid: false,
          hasError: false,
          errorMessage: null,
        });
      }
    }
  }

  /**
   * onBlur event on input
   */
  handleBlur() {
    if ((this.props.required || this.props.validator) && !this.state.isPristine) {
      this.validate();
    }
  }

  /**
   * This function runs every time the user changes the contents of the textarea.
   * @param {event} event The event
   */
  handleChange(event) {
    // Commit the input's value to state.value.
    this.setState({ value: event.target.value }, () => {
      // React docs suggest this callback should generally go in ComponentDidUpdate,
      // however since both this callback actions update the state, they must
      // go here because changing state in ComponentDidUpdate would cause a
      // recursive loop and blow up the call stack
      if (this.state.value && this.state.isPristine) {
        this.setState({ isPristine: false });
      }
      // if
      if (this.state.hasError || this.state.isValid) {
        this.validate();
      }
    });
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TextArea.defaultProps = {
  id: null,
  label: 'Text Area Label',
  value: '',
  required: false,
  errorMessage: null,
  onBlur: null,
  onChange: null,
};
