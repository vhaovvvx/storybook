import React from 'react';
import PropTypes from 'prop-types';

interface ButtonDropdownP {
  toggle: any;
  isOpen: any;
  dataStyle: any;
  children: any;
}

const ButtonDropdown = ({
  toggle,
  isOpen,
  dataStyle,
  ...props
}: ButtonDropdownP) => {
  return (
    <React.Fragment>
      <div
        className='button-dropdown'
        onClick={toggle}
        style={{
          position: 'relative',
          width: `${dataStyle}px`,
          height: '40px',
        }}
      >
        {isOpen ? props.children : props.children}
        {/* {isOpen ? props.children : props.children[0]} */}
      </div>
    </React.Fragment>
  );
};

export default ButtonDropdown;
