import React from 'react';
import './Button.scss';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  numberOfWidth: Number;

  colorBorder: string;

  checked: true | false;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  checked = false,
  colorBorder,
  numberOfWidth,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const styled = {
    // backgroundColor: backgroundColor,
    width: '100%',
    padding: '8px 20px',
    borderRadius: '18px',
    maxWidth: `${numberOfWidth}px`,
    minWidth: '80px',
    border: '1px solid `${colorBorder}`',
  };

  const handleClickedBtn = () => {
    backgroundColor = '#283977';
  };
  return (
    <button
      type='button'
      className={`btn-custom__normal ${checked ? 'checked' : 'unchecked'}`}
      style={styled}
    >
      {label}
    </button>
  );
};
