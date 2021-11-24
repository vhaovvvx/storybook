import { useState } from 'react';
import './SelectBox.scss';
import {
  HomeOutlined,
  EnvironmentOutlined,
  CaretDownOutlined
} from '@ant-design/icons';

const SelectBox = () => {
  const [toggle, setToggle] = useState(false);
  const selected = {
    icon: <HomeOutlined style={{ fontSize: '30px' }} />,
    text: 'Properties'
  };

  const unSelected = {
    icon: <EnvironmentOutlined style={{ fontSize: '30px' }} />,
    text: 'Markets'
  };

  const [active, setActive] = useState(selected);
  const [inActive, setInActive] = useState(unSelected);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setActive(inActive);
    setInActive(active);
    setToggle(false);
  };

  return (
    <div className="dropdown-group">
      <div
        className={toggle ? 'dropdown-select' : 'dropdown'}
        onClick={handleToggle}
      >
        <div className="selected active">
          <input name="select_value" type="hidden" id="selectedValue" />
          <div className="s-wrap">
            <i>{active.icon}</i>
            <span>{active.text}</span>
          </div>
          <i id="toggle">
            <CaretDownOutlined />
          </i>
        </div>
        <div className="in-selected" onClick={handleClose}>
          <div className="is-wrap">
            <i>{inActive.icon}</i>
            <span>{inActive.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
