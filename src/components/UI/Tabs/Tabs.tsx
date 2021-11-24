import React, { useState } from 'react';
import './Tabs.scss';

interface TabsProps {
  mw: string;
  lists: {
    icon: Element;
    name: string;
  }[];
  onClick?: () => void;
}

const Tabs = (props: TabsProps) => {
  const [active, setActive] = useState(0);
  const { mw, lists } = props;
  const itemW = 100 / lists.length;

  const handleActive = (data: number) => {
    setActive(data);
  };

  return (
    <div className="tabs" style={{ maxWidth: mw }}>
      {lists.map((item, index) => (
        <div
          style={{ width: `${itemW}%` }}
          className={active === index ? 'tabs-item active' : 'tabs-item'}
          onClick={() => handleActive(index)}
          key={index}
        >
          <i>{item.icon}</i>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
