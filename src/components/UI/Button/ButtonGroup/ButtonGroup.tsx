import React, { ReactNode, useState } from 'react';
import { ArrowDown } from '../../../../assets/Icon/Icon';
import './ButtonGroup.scss';

interface ButtonGroup {
  children?: ReactNode;
  maxWidth?: string;
  title?: string;
  toggleDrop?: any;
  className?: string;
  name?: string;
}

const ButtonGroup2 = ({
  name,
  className,
  toggleDrop,
  maxWidth,
  title,
  ...props
}: ButtonGroup) => {
  return (
    <React.Fragment>
      <button
        className={className}
        onClick={() => toggleDrop(name)}
        style={{
          maxWidth: `${maxWidth}px`
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{title}</span>
          <ArrowDown></ArrowDown>
        </div>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default ButtonGroup2;
