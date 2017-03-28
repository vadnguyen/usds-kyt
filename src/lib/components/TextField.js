import React, { Component, PropTypes } from 'react';
import classnames from '../helpers/classnames';
import makeId from '../helpers/makeId';
import InputLabel from './InputLabel';
import styles from '../styles/TextField.scss';

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - label: Sets the text for the input's label
 *
 * Optional props:
 * - id: sets the id attribute for the input and the <label for... attribute
 * - type: string, defaults to 'text'. Sets the input type
 * - value: string. If present pre-populates the input with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - validators: array of Validator objects. If present, field get error state onBlur if the value does not match the given test
 * - enableSpellCheck: true or false, defaults to false. If true, enables browser autocorrection while typing
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - isValid: bool. If true, sets isValid state - i.e. green border
 * - allowedChars: Validator object. If present, user can only type characters that match the given test
 */
export default class TextField extends Component {
  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   * Set initial state
   * Value: value of the input.
   * isPristine: tracks if user has typed in the input
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

        <input
          id={this.id}
          name={this.props.id}
          type={this.props.type}
          value={this.state.value}
          className={style}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          spellCheck={this.props.enableSpellCheck}
        />
      </div>
    );
  }

  /**
   * Checks input value against required status and passed validators
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
    } else if (this.props.validator) {
      const parsed = this.props.validator(this.state.value);

      if (parsed.isValid) {
        this.setState({
          hasError: false,
          isValid: true,
        });

        if (parsed.reformat) {
          this.setState({
            value: parsed.formatted,
          });
        }
      } else {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: parsed.error,
        });
      }
    } else {
      // must be required field with a value, so no error
      this.setState({
        hasError: false,
        errorMessage: null,
      });
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
   * This function runs every time the user changes the contents of the input.
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

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'search',
    'url',
    'date',
    'month',
    'tel',
    'week',
    'number',
  ]),
  isValid: PropTypes.bool,
  value: PropTypes.string,
  required: PropTypes.bool,
  validator: PropTypes.func,
  enableSpellCheck: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  id: null,
  value: '',
  isValid: false,
  type: 'text',
  enableSpellCheck: false,
  required: false,
  errorMessage: null,
  onBlur: null,
  onChange: null,
  validator: null,
};
