import React from 'react';

interface TestChildren {
  children: NodeList;
  toggleClick?: any;
}

const TestChildren = ({ toggleClick, ...props }: TestChildren) => {
  console.log(toggleClick);
  const Test4 = () => {
    console.log('clicking');
    toggleClick('true');
  };
  return <div onClick={Test4}>{props.children}</div>;
};

export default TestChildren;
