import React, { useState } from 'react';
import './RadioCheck.scss';

interface BtnRadioP {
  disabled?: Boolean;
  //   getData?: string[];
  check?: boolean;
  children?: any;
  valueOptions?: number;
  clickHandle?: Function | undefined;
}

const RadioCheck = ({
  disabled,
  check,
  valueOptions,
  clickHandle,
  ...props
}: BtnRadioP) => {
  const [dataForm, setDataForm] = useState('');

  const testChange = (e: any) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const name = e.target.name;
    if (checked) {
      if (clickHandle) {
        clickHandle(valueOptions);
      }
    }
    // if (getData) {
    //   getData({ [name]: value });
    // }
  };

  return (
    <label className={`container radio ${disabled ? 'disabled' : ''}`}>
      <label htmlFor={props.children || dataForm} style={{ cursor: 'pointer' }}>
        {props.children}
      </label>
      <input
        type='radio'
        name='selected'
        // checked={true}
        value={props.children}
        id={props.children || dataForm}
        className='disabled'
        onChange={testChange}
        defaultChecked={check}
      />
      <label
        className='checkmark radio'
        htmlFor={props.children || dataForm}
      ></label>
    </label>
  );
};

export default RadioCheck;
