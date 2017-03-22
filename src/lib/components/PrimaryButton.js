import React from 'react';

/**
 * Provides a standard button component.
 */
export default class PrimaryButton extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles button click
   */
  handleClick() {
    this.props.onClick();
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {

    // local vars
    let className = [];

    // disabled
    if (this.props.disabled) {
      // disable button
      className.push('usa-button-disabled');
    }


    // big
    if (this.props.size === 'big') {
      className.push('usa-button-big');
    }

    return (
      <button className={className} disabled={this.props.disabled} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

PrimaryButton.defaultProps = {
  secondaryStyle: '',
  size: '',
  status: '',
};

// size
PrimaryButton.SIZE_BIG = 'big';

// status
PrimaryButton.STATUS_ACTIVE = 'active';
PrimaryButton.STATUS_HOVER = 'hover';

PrimaryButton.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  size: React.PropTypes.oneOf(['', PrimaryButton.SIZE_BIG]),
  children: React.PropTypes.node,
};

PrimaryButton.defaultProps = {
  disabled: false,
  size: '',
};
