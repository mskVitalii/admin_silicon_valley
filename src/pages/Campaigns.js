import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'

import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormCampaign            from '../components/campaigns/FormCampaign'
import ChartsCampaigns         from '../components/campaigns/ChartsCampaigns'
import ChartsCampaignsFunel    from '../components/campaigns/ChartsCampaignsFunel'


const { Header, Sider, Content } = Layout


const CampaingsPage = () => {

    const [visible, setVisible] = useState(false);

    let initialData = [
      {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
      }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
      }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
      }, {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
      },
    ];
    for (let i = 5; i <= 8; i++) {
      initialData.push({
        key: `${i}`,
        name: ['John Brown', 'Jim Green', 'Joe Black', 'Jim Red'][Math.floor(Math.random() * 4)],
        age: 20 + Math.floor(Math.random() * 30),
        address: ['London No. 2 Lake Park', 'Sidney No. 1 Lake Park', 'London No. 1 Lake Park', 'New York No. 1 Lake Park'][Math.floor(Math.random() * 4)],
    })
    }

    const [data, setData] = useState(initialData);

    const onCreate = (values) => {
      setData(data.concat({
          name: values.name,
          age: values.age,
          address: values.address
        }));
      setVisible(false);
    };

    // TODO: useCallback resolve probelms...

    // const onCreate = useCallback(
    //   (values) => {
    //     setData(data.concat({
    //         name: values.name,
    //         age: values.age,
    //         address: values.address
    //       }));
    //     setVisible(false);
    //   },
    //   [data],
    // )

    return (
      <Layout>
        <Sider style={{height: '100%'}}>
          <h2 style={{color: 'white', textAlign: 'center'}}>Статистика</h2>
          <div style={{height: '80%', paddingBottom: '1rem', paddingTop: '0.25rem'}}>
            <ChartsCampaigns/>
          </div>
          <div style={{height: '40%', paddingBottom: '1rem', paddingTop: '0.25rem'}}>
              <ChartsCampaignsFunel/>
          </div>
        </Sider>
        <Layout>
          <Header style={{height: '45vh'}}>
            <h3 style={{lineHeight: '5vh'}}>Статистика [Или самая важная статистика]</h3>
            <div style={{display: 'flex'}}>
              <div style={{height: '35vh', width: '50%', marginRight: 'auto'}}>
                <ChartsCampaigns/>
              </div>
              <div style={{height: '35vh', width: '50%', float: "right"}}>
                <ChartsCampaignsFunel/>
              </div>
            </div>
          </Header>
          <Content>
            <h3>Таблица c NCahoots Campaigns</h3>
            <TableNCahootsCampaigns data={data}/>
            <Button
              type="default"
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
          </Content>
        </Layout>
      </Layout>
    )
}

CampaingsPage.propTypes = {}

export default CampaingsPage