import React, { useState } from 'react';
import { ArrowDown } from '../../../../assets/icons/Icons';
import ButtonDropdown from './ButtonDropdown/ButtonDropDown';
import DropdownItem from './ButtonDropdown/DropDownMenu/DropDownItem/DropDownItem';
import DropdownMenu from './ButtonDropdown/DropDownMenu/DropDownMenu';
import DropdownToggle from './ButtonDropdown/DropDownToggle/DropdownToggle';

interface ButtonGroupP {
  // flag?:,
  title?: string;
  sizeIcon?: string;
  dataClick?: any;
  maxWidth?: string;
  children?: any;
  //    border
}

const ButtonGroup = ({
  title,
  sizeIcon,
  dataClick,
  maxWidth,
  ...props
}: ButtonGroupP) => {
  console.log('title2', title);
  const [titleButton, setTitleButton] = useState(title);
  //   const [flagg, setFlag] = useState(flag);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const changeItem = (item: any, index: number) => {
    setTitleButton(item);
    // setFlag(flag);
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} dataStyle={maxWidth}>
      <DropdownToggle>
        {/* {flagg} */}
        {title}
        <div className='icon-dropdown'>
          <ArrowDown />
          {/* <ArrowDown size={sizeIcon}></ArrowDown> */}
        </div>
      </DropdownToggle>
      <div
        style={
          dropdownOpen
            ? { display: 'block', background: '#fff' }
            : { display: 'none', background: '#fff' }
        }
      >
        <DropdownMenu
        // MaxWidthData={maxWidth}
        >
          {props.children}
          {dataClick ? (
            <DropdownItem
              data={dataClick}
              changeItem={changeItem}
            ></DropdownItem>
          ) : null}
        </DropdownMenu>
      </div>
    </ButtonDropdown>
  );
};

export default ButtonGroup;
