import  React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {Menu} from 'antd'
import './index.less'
import menuList,{menuItem} from './menuConfig';
const {SubMenu} =Menu
interface INavLeftProps {
}

const NavLeft: React.FunctionComponent<INavLeftProps> = (props) => {
  useEffect(()=>{

  },[])
  //函数组件的 componentDidMount
  let renderMenu=(data:Array<menuItem>)=>{
    return data.map((item,index)=>{
      if(item.children){
        //有子菜单
        return <SubMenu title={item.title} key={item.key}>
          {renderMenu(item.children)}
        </SubMenu>
      }else{
        return <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      }
    })
  }
  return <div className="NavLeft">
    <div className="Icon">
      <img src="./asset/logo-ant.svg" alt="" />
      <h1>TS 单车</h1>
    </div>
    <Menu theme='dark'>
      {renderMenu(menuList)}
    </Menu>
  </div>;
};

export default NavLeft;
