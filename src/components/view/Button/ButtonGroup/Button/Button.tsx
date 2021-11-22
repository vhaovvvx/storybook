import { CButton, CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import './Button.scss';

function Button() {
  return (
    <React.Fragment>
      <CContainer>
        <CRow>
          <CCol xs={6} md={6} lg={6}>
            <div className='wrap-heading text-center'>
              <h1>Buttons</h1>
            </div>
            <div className='p-3'>
              <div className='text-left'>Easement</div>
              <p>
                If there are any easements,will they impact the dwelling or
                development plans?
              </p>

              <CButton color='whilte' shape='rounded-pill'>
                Primary
              </CButton>
              <CButton color='secondary' shape='rounded-pill'>
                Secondary
              </CButton>
              <CButton color='success' shape='rounded-pill' >
                Success
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </React.Fragment>
  );
}

export default Button;
