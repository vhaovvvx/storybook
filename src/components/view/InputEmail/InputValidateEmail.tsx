import { CCol, CContainer, CRow } from '@coreui/react';
import './InputValidateEmail.scss';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

// import './InputValidateEmail.scss';

interface PropsInputValidateEmail {
  numberOfWidth: Number;
  type: 'text' | 'password';
  size: number;
  backgroundColor?: string;
  getRandomNumber: // Function;
  React.ChangeEventHandler<HTMLInputElement>;
  clickHandler: () => void;
  // React.MouseEventHandler<HTMLDivElement>
}

export const InputValidateEmail = ({
  type,
  size,
  numberOfWidth,
  backgroundColor,
  getRandomNumber,
  clickHandler,
  ...agrs
}: PropsInputValidateEmail) => {
  const styled = {
    backgroundColor: backgroundColor,
    maxWidth: `${numberOfWidth}px`,
    width: '100%',
    padding: '1rem',
    borderRadius: 0,
    // border: 'none',
  };
  const [value, setValue] = useState('');

  const Test = (v: any) => {
    console.log(v.target.value);
    let obj2 = {
      name: 'anhdeptrai',
      type: 'vo dich',
    };

    setValue(v.target.value);
    action('onChange')(v.target.value);
    action('asdasdasdasdasd')(obj2);
  };

  return (
    <React.Fragment>
      <input
        type={type}
        value={value}
        className='input-validate__email'
        onChange={Test}
        style={styled}
        {...agrs}
      />
      <div onClick={clickHandler} className='btn'>
        asdasdas
      </div>
    </React.Fragment>
  );
};
