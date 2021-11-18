import React from 'react';
// import { defaultProps } from 'react-recaptcha';
import './DropDownMenu.scss';

interface maxWidthData {
  maxWidthData?: string;
  children?: any;
}

function DropdownMenu({ maxWidthData, ...props }: maxWidthData) {
  return (
    <React.Fragment>
      <div
        className='dropDownMenu-items'
        style={{
          position: 'relative',
          //   zIndex: '100',
          maxWidth: `${maxWidthData}px`,
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default DropdownMenu;
