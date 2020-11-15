import React from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import { Layout } from 'antd'

import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const QuizzesPage = () => {
    console.log('QuizzesPage')
    return (
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с опросами
                    <TableNCahootsCampaigns/>
                </Content>
            </Layout>
        </Layout>
    )
}

QuizzesPage.propTypes = {}

export default QuizzesPage