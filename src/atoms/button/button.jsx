import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export class ButtonComponent extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    const {
      onClick,
      disabled,
      loading
    } = this.props;

    if (disabled || loading) {
      event.preventDefault();
      return;
    }

    if (onClick) onClick();
  }

  render () {
    const {
      text,
      block,
      loading,
      disabled,
      type,
      variant,
      icon: Icon
    } = this.props;
    return (
      <Button
        variant={variant}
        type={type}
        disabled={disabled || loading}
        block={block}
        onClick={this.handleClick}
      >
        {Icon && <Icon />}
        {loading ? 'Loading…' : text.toUpperCase()}
      </Button>);
  }
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['submit', 'button']),
  icon: PropTypes.func
};

ButtonComponent.defaultProps = {
  disabled: false,
  block: false,
  variant: 'secondary',
  type: 'button',
  icon: null,
  onClick: null
};

export default ButtonComponent;
