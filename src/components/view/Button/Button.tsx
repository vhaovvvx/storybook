import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';

// import './InputValidateEmail.scss';

interface PropsInputValidateEmail {
  type: 'text' | 'password';
}

export const InputValidateEmail = ({ type }: PropsInputValidateEmail) => {
  return (
    <CContainer>
      <CRow>
        <CCol>
          <input type={type} value='asdasd' className='mt-6' />
        </CCol>
      </CRow>
    </CContainer>
  );
};
