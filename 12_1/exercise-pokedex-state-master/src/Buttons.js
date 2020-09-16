import React from 'react';

class Buttons extends React.Component {
  render() {
    if (this.props.disabled) {
      return (
        <button type="button" className={this.props.buttonClass + ' disabled'} disabled>
          <i className={this.props.iconClass}></i>
        </button>
      )
    } else {
      return (
        <button type="button" className={this.props.buttonClass} onClick={this.props.callback}>
          <i className={this.props.iconClass}></i>
        </button>
      );
    }
  }
}

export default Buttons;