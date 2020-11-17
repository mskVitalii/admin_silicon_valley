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
        <Button key="1">
          <NavLink activeClassName="active" to="/campaings">NCahoots Campaigns </NavLink>
        </Button>,
        <Button key="2">
          <NavLink activeClassName="active" to="/orders">Orders </NavLink>
        </Button>,
        <Button key="3">
          <NavLink activeClassName="active" to="/quizzes">Quizzes </NavLink>
        </Button>,
        <Button key="4">
          <NavLink activeClassName="active" to="/users">Users </NavLink>
        </Button>,
        <Button key="5">
          <NavLink activeClassName="active" to="/login">Login </NavLink>
        </Button>,
      ]}
    ></PageHeader>
  </nav>
);

Navigation.propTypes = {};

export default Navigation;
