import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { PageHeader, Button } from 'antd';

const Navigation = () => (
    <nav>
        <div className="site-page-header-ghost-wrapper">
        <PageHeader
            ghost={true}
            title="NCahoots"
            extra={[
            <Button key="1"><NavLink to="/campaings">NCahoots Campaigns </NavLink></Button>,
            <Button key="2"><NavLink to="/orders">Orders                </NavLink></Button>,
            <Button key="3"><NavLink to="/quizzes">Quizzes              </NavLink></Button>,
            <Button key="4"><NavLink to="/users">Users                  </NavLink></Button>,
            <Button key="5" type="primary"><NavLink to="/login">Login   </NavLink></Button>
            ]}
            >
        </PageHeader>
        </div>            
    </nav>
);

Navigation.propTypes = {};


export default Navigation;
