import React from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import { Layout } from 'antd'

import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const OrdersPage = () => {
    return (
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с заказами
                    <TableNCahootsCampaigns/>
                </Content>
            </Layout>
        </Layout>
    )
}

OrdersPage.propTypes = {}

export default OrdersPage