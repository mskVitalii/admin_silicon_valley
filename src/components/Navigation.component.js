import React from "react";
// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { PageHeader, Button } from "antd";

import "./Navigation.component.css";

const Navigation = () => (
  <nav className="page-nav">
    <PageHeader
      className="page-header"
      ghost={true}
      title="NCahoots"
      extra={[
        // <Button key="1">
          <NavLink key="1" activeClassName="active" to="/campaings"><span>NCahoots Campaigns</span></NavLink>,
        // </Button>,
        // <Button key="2">
          <NavLink key="2" activeClassName="active" to="/orders"><span>Orders</span></NavLink>,
        // </Button>,
        // <Button key="3">
          <NavLink key="3" activeClassName="active" to="/quizzes"><span>Quizzes</span></NavLink>,
        // {/* </Button>, */}
        // <Button key="4">
          <NavLink key="4" activeClassName="active" to="/users"><span>Users</span></NavLink>,
        // {/* </Button>, */}
        // <Button key="5">
          <NavLink key="5" activeClassName="active" to="/login"><span>Login</span></NavLink>
        // </Button>,
      ]}
    ></PageHeader>
  </nav>
);

Navigation.propTypes = {};

export default Navigation;
