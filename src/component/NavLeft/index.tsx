import  React,{useEffect} from 'react';
import {Menu} from 'antd'
import menuList from './menuConfig';
const {SubMenu} =Menu
interface INavLeftProps {
}

const NavLeft: React.FunctionComponent<INavLeftProps> = (props) => {
  useEffect(()=>{

  },[])
  //函数组件的 componentDidMount
  return <div className="NavLeft">
    NavLeft
  </div>;
};

export default NavLeft;
