import * as React from 'react';
import{Layout} from 'antd';
import './index.less'
import { NavLink } from 'react-router-dom';
const {Header}=Layout
interface INavHeaderProps {
}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
  return <div className="Navheader">
      <Header style={{background:'#fff',textAlign:'right'}}>欢迎你tom
      <NavLink to={'/logout'}>推出登錄</NavLink>
      </Header>
      <div className="header_bottom">
          <div className="pagetitle">首頁</div>
      </div>
  </div>;
};

export default NavHeader;
