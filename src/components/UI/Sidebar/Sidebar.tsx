import { useState } from 'react';
import './Sidebar.scss';
import webappLogo from '../../../assets/images/sidebar/webappLogo.png';
import smLogo from '../../../assets/images/sidebar/smLogo.png';
import {
  MenuFoldOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
  HomeFilled,
  VerticalAlignTopOutlined
} from '@ant-design/icons';

interface SidebarProps {
  onClick: () => void;
}

const menu = [
  {
    icons: <MenuFoldOutlined />,
    name: 'dashboard',
    notification: 0
  },
  {
    icons: <HomeOutlined />,
    name: 'My portfolio',
    notification: 0
  },
  {
    icons: <HomeFilled />,
    name: 'Pending properties',
    notification: 0
  },
  {
    icons: <SearchOutlined />,
    name: 'search',
    notification: 0
  },
  {
    icons: <BellOutlined />,
    name: 'Notification',
    notification: 7
  },
  {
    icons: <HeartOutlined />,
    name: 'wishlist',
    notification: 34
  },
  {
    icons: <MessageOutlined />,
    name: 'contact',
    notification: 0
  },
  {
    icons: <UserOutlined />,
    name: 'account',
    notification: 0
  }
];

const Sidebar = (props: SidebarProps) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('dashboard');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle ? 'sidebar-sm' : 'sidebar'}>
      <div className="sidebar-logo">
        <img src={toggle ? smLogo : webappLogo} alt="sidebar-logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          {menu.map((item) => (
            <li
              key={item.name}
              className={active === item.name ? 'active' : ''}
              onClick={() => setActive(item.name)}
            >
              <i>{item.icons}</i>
              <div className="sidebar-menu__items">
                <a href={`##${item.name}`}>{item.name}</a>

                {item.notification !== 0 && (
                  <span
                    className={
                      item.notification >= 10
                        ? 'sidebar-menu__notification-m'
                        : 'sidebar-menu__notification-s'
                    }
                  >
                    {item.notification}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-toggle" onClick={handleToggle}>
        <i className="zmdi zmdi-view-dashboard">
          <VerticalAlignTopOutlined
            style={{ transform: 'rotate(-90deg)', fontSize: '30px' }}
          />
        </i>
        <p>Close</p>
      </div>
    </div>
  );
};

export default Sidebar;
