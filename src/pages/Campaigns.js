import React from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import { Layout } from 'antd'

import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const CampaingsPage = () => {
    return (
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с NCahoots Campaigns
                    <TableNCahootsCampaigns/>
                </Content>
            </Layout>
        </Layout>
    )
}

CampaingsPage.propTypes = {}

export default CampaingsPage