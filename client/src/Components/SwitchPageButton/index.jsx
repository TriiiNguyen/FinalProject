import React from 'react';
// import ReactDOM from 'react-dom'
import "./style.css";
const STYLES = [
  'button--primary--solid',
  'button--warning--solid',
  'button--danger--solid',
  'button--success--solid',
  'button--primary--outline',
  'button--warning--outline',
  'button--danger--outline',
  'button--success--outline',
];

const SIZES = [
  'button--large',
  'button--medium'
];





export const SwitchButton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>SWITCH
    </button>
  );
}

