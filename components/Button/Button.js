import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.styles.css';

const cx = classNames.bind(styles);

const className = cx({ base: true });

const Button = ({ children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
