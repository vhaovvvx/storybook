import React from 'react';
import { UploadFileIcon } from '../../../../assets/icons/Icons';
import UploadFile from '../../../../assets/image/upload-svgrepo-com.svg';
import './UploadFile.scss';

interface PUploadfile {}

const UploadFile2 = ({ ...props }: PUploadfile) => {
  return (
    <React.Fragment>
      <label htmlFor='uploadfile' className='uploadfile'>
        <input type='file' id='uploadfile' hidden />
        <UploadFileIcon />

        <label
          htmlFor='uploadfile'
          style={{
            paddingLeft: '10px',
          }}
        >
          Drag Your document here or{' '}
          <u style={{ color: 'blue', textDecoration: 'line' }}>
            browse your computer
          </u>
        </label>
      </label>
    </React.Fragment>
  );
};

export default UploadFile2;
