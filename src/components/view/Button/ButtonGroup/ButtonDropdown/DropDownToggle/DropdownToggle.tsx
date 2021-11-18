import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownToggle.scss';

interface DropdownToggleP {
  color?: string;
  border?: any;
  children?: any;
}

const DropdownToggle = ({ color, border, ...props }: DropdownToggleP) => {
  const [clicked, setClicked] = useState(false);
  const checkClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const languageDropDown = {
    border: border,
  };

  return (
    <React.Fragment>
      <button
        className='dropdown-toggle'
        onClick={() => checkClick()}
        style={
          //   clicked
          // ? { border: '1px solid #DBE0E6' }
          // : { backgroundColor: 'none' },
          languageDropDown
        }
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default DropdownToggle;
