import { useState } from 'react';
import { HeartOutlined, HeartFilled, CheckOutlined } from '@ant-design/icons';
import './Favorite.scss';

const Favorite = () => {
  const [hover, setHover] = useState(true);
  const [select, setSelect] = useState(false);

  const handleHover = () => {
    if (select) {
      setHover(false);
    } else {
      setHover(!hover);
    }
  };

  const handleSelect = () => {
    setSelect(!select);
    setHover(false);
  };

  return (
    <span className="favorite">
      <i>
        {hover ? (
          <HeartOutlined onMouseOver={handleHover} />
        ) : (
          <HeartFilled
            onMouseLeave={handleHover}
            onClick={handleSelect}
            className="checked"
          />
        )}
        {select && (
          <CheckOutlined className="checked-icon" onClick={handleSelect} />
        )}
      </i>
    </span>
  );
};

export default Favorite;
