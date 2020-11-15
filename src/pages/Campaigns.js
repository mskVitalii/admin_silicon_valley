import React, { useState } from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormCampaign from '../components/campaigns/FormCampaign'
import { Layout, Button } from 'antd'

import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const CampaingsPage = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      setVisible(false);
    };

    return (
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с NCahoots Campaigns
                    <TableNCahootsCampaigns/>
                    <div>
                        <Button
                          type="primary"
                          onClick={() => {
                            setVisible(true);
                          }}
                        >
                          Add a Campaign
                        </Button>
                        <FormCampaign
                          visible={visible}
                          onCreate={onCreate}
                          onCancel={() => {
                            setVisible(false);
                          }}
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

CampaingsPage.propTypes = {}

export default CampaingsPage