import React, { onClick } from "react";
// import PropTypes from 'prop-types';
import Avatar from "antd/lib/avatar/avatar";
import { NavLink } from "react-router-dom";
import {
  PieChartOutlined,
  OrderedListOutlined,
  QuestionOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons';

import { PageHeader, Button, Menu } from "antd";
import "./Table.component.scss";

const { SubMenu } = Menu;

// Menu of navigation in sidebar.
const Navigation = () => (
  <nav className="page-nav">
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />} >
        <NavLink key="1" activeClassName="active" to="/campaings">
          <span>Campaigns</span>
        </NavLink>
      </Menu.Item>

      {/* Submenu for pages with 2 and more tabs */}
      <SubMenu key="2" icon={<OrderedListOutlined />} title="Orders">
        <Menu.Item key="2">
          <NavLink key="2" activeClassName="active" to="/FinancesTab">
            <span>Finances</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink key="3" activeClassName="active" to="/PicturesTab">
            <span>Pictures</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink key="4" activeClassName="active" to="/ShoppingTab">
            <span>Shopping List</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink key="5" activeClassName="active" to="/WishesTab">
            <span>Wishes</span>
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="6" icon={<QuestionOutlined />}>
        <NavLink key="6" activeClassName="active" to="/quizzes">
          <span>Quizzes</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="7" icon={<UsergroupAddOutlined />}>
        <NavLink key="7" activeClassName="active" to="/users">
          <span>Users</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="8" icon={<UserOutlined />}>
        <NavLink key="8" activeClassName="active" to="/login">
          <span>Login</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </nav>
);

Navigation.propTypes = {};

export default Navigation;
