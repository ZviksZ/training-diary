import React, {useState}    from 'react'
import {NavLink}            from 'react-router-dom'
import {Menu, Icon, Button} from 'antd';

/*const {SubMenu} = Menu;*/

export const LeftSidebar = () => {
   const [collapsed, setCollapsed] = useState(false)
   const toggleCollapsed = () => {
      setCollapsed(!collapsed)
   };

   return (
      <div style={{width: 240}} className="left-sidebar">
         <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
         </Button>
         <Menu            
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
         >
            <Menu.Item key="1">
               <NavLink to="/add" activeClassName='activeMenuLink'>
                  <Icon type="smile"/>
                  <span>Add form</span>
               </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
               <NavLink to="/timer" activeClassName='activeMenuLink'>
                  <Icon type="schedule"/>
                  <span>Timer</span>
               </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
               <NavLink to="/list" activeClassName='activeMenuLink'>
                  <Icon type="schedule"/>
                  <span>Workouts</span>
               </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
               <NavLink to="/active" activeClassName='activeMenuLink'>
                  <Icon type="rocket"/>
                  <span>Active training</span>
               </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
               <NavLink to="/history" activeClassName='activeMenuLink'>
                  <Icon type="clock-circle"/>
                  <span>Your history</span>
               </NavLink>
            </Menu.Item>
            <Menu.Item key="6">
               <NavLink to="/settings" activeClassName='activeMenuLink'>
                  <Icon type="setting" theme="filled"/>
                  <span>Settings</span>
               </NavLink>
            </Menu.Item>
            {/* <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span>Option 3</span>
               </Menu.Item>
               <SubMenu
                  key="sub1"
                  title={
                     <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
                  }
               >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
               </SubMenu>
               <SubMenu
                  key="sub2"
                  title={
                     <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
                  }
               >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                     <Menu.Item key="11">Option 11</Menu.Item>
                     <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
               </SubMenu>*/}
         </Menu>
      </div>
   );
  
}
