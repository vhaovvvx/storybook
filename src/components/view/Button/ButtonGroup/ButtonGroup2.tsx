import React, { ReactNode, useState } from 'react';
import { ArrowDown } from '../../../../assets/icons/Icons';

interface ButtonGroup2 {
  children: any;
  maxWidth: string;
  title: string;
}

const ButtonGroup2 = ({ maxWidth, title, ...props }: ButtonGroup2) => {
  const [defaultOpen, setDefaultOpen] = useState(false);

  console.log(defaultOpen);
  const isOpen = () => {
    setDefaultOpen(!defaultOpen);

    if (defaultOpen) {
      console.log('co vao');
      setDefaultOpen(!defaultOpen);
    }
  };
  return (
    <React.Fragment>
      <button
        onClick={isOpen}
        style={{
          background: 'none',
          border: '1px solid transparent',
          borderRadius: '10%',
          width: '100%',
          maxWidth: `${maxWidth}px`,
          padding: '10px',
          position: 'absolute',
          right: '0',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{}}>{title}</span>
          <ArrowDown></ArrowDown>
        </div>

        <div
          style={defaultOpen ? { display: 'block' } : { display: 'none' }}
          //   onClick={() => console.log('click trung ne')}
        >
          {props.children}
        </div>
      </button>
    </React.Fragment>
  );
};

export default ButtonGroup2;
