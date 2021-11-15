import { CCol, CContainer, CRow } from '@coreui/react';
import './InputValidateEmail.scss';
import React from 'react';

// import './InputValidateEmail.scss';

interface PropsInputValidateEmail {
  numberOfWidth: Number;
  type: 'text' | 'password';
  size: number;
  backgroundColor?: string;
}

export const InputValidateEmail = ({
  type,
  size,
  numberOfWidth,
  backgroundColor,
}: PropsInputValidateEmail) => {
  const styled = {
    backgroundColor: backgroundColor,
    maxWidth: `${numberOfWidth}px`,
    width: '100%',
    padding: '1rem',
    borderRadius: 0,
    // border: 'none',
  };
  console.log(styled);
  return (
    <React.Fragment>
      <input type={type} className='input-validate__email' style={styled} />
    </React.Fragment>
  );
};
