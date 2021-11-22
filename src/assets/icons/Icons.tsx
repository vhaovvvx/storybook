import './Icons.scss';

const ArrowDown = () => {
  // const { size } = props;
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 8 4'
      className='arrow-down'
      style={{ verticalAlign: 'middle' }}
      //   fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M4 4L8 0H0L4 4Z' fill='#596481' />
    </svg>
  );
};

const UploadFileIcon = () => {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      className='uploadfile-icon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <g>
        <g>
          <polygon points='445.217,378.435 445.217,445.217 66.783,445.217 66.783,378.435 0,378.435 0,512 512,512 512,378.435 		' />
        </g>
      </g>
      <g>
        <g>
          <polygon points='256,0 121.322,134.678 210.922,134.678 210.922,373.848 301.078,373.848 301.078,134.678 390.678,134.678 		' />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export { ArrowDown, UploadFileIcon };
