import React, { ReactNode, useState } from 'react';
import { ArrowDown } from '../../../../assets/icons/Icons';
import './ButtonGroup2.scss';

interface ButtonGroup2 {
  children: ReactNode;
  maxWidth: string;
  title: string;
  toggleDrop: () => void;
  className?: string;
}

const ButtonGroup2 = ({
  className,
  toggleDrop,
  maxWidth,
  title,
  ...props
}: ButtonGroup2) => {
  console.log(toggleDrop);
  return (
    <React.Fragment>
      <button
        className={className}
        onClick={toggleDrop}
        style={{
          maxWidth: `${maxWidth}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* <table style={{ display: 'none' }}>asddsa</table> */}
          <span style={{}}>{title}</span>
          <ArrowDown></ArrowDown>
        </div>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default ButtonGroup2;
