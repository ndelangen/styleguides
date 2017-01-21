import React, { Component, PropTypes } from 'react';

import s from './Button.css';

const clickHandler = (event) => {
  event.preventDefault();
  global.alert('clicked!');
};


/**
 * The only true button.
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * Button label.
     */
    children: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large'])
  }
  static defaultProps = {
    color: '#222',
    size: 'normal'
  }
  static sizes = {
    small: '10px',
    normal: '14px',
    large: '18px'
  }

  render() {
    const styles = {
      color: this.props.color,
      fontSize: Button.sizes[this.props.size]
    };

    return (
      <button className={s.root} style={styles} onClick={clickHandler}>{this.props.children}</button>
    );
  }
}
