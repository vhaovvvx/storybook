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

export { ArrowDown };
