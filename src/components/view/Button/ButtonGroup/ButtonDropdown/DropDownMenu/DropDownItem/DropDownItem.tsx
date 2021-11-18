import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDownItem.scss';
// import { CheckMark } from '../../font-icons/icons/Icon';
// import { VnFlag, ElFlag, GerFlag } from '../../font-icons/icons/Flags';

interface DropdownItemP {
  data?: any;
  changeItem: Function;
}

const DropdownItem = ({ data, changeItem, ...props }: DropdownItemP) => {
  const [clicked, setClicked] = useState(-1);
  //   const flag = [VnFlag, ElFlag, GerFlag];

  const getItem = (item: any, index: any) => {
    setClicked(index);
    changeItem(item, index);
  };

  return (
    <React.Fragment>
      {data
        ? data.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={
                  index === clicked ? 'dropdown-items active' : 'dropdown-items'
                }
                onClick={() => getItem(item, index)}
              >
                <p>{item}</p>
                <span style={{ position: 'absolute', right: '12px' }}>
                  {index === clicked ? <div>askdoaskod</div> : null}
                </span>
              </div>
            );
          })
        : null}
    </React.Fragment>
  );
};

export default DropdownItem;
