import React from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import { Layout } from 'antd'

import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const UsersPage = () => {
    console.log('UsersPage')

    return (
    <div>
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с пользователями
                    <TableNCahootsCampaigns/>
                </Content>
            </Layout>
        </Layout>

    </div>
)}

UsersPage.propTypes = {}

export default UsersPage