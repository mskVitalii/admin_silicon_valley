import React, { useState } from 'react'
import { Layout, Button } from 'antd'

import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormCampaign            from '../components/campaigns/FormCampaign'
import ChartsCampaigns         from '../components/campaigns/ChartsCampaigns'
import ChartsCampaignsFunel    from '../components/campaigns/ChartsCampaignsFunel'


// import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const CampaingsPage = () => {

    const [visible, setVisible] = useState(false);

    const initialData = [
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
              Либо можно сделать статистику здесь
              <div style={{height: '80%', paddingBottom: '1rem', paddingTop: '0.25rem'}}>
                <ChartsCampaigns/>
              </div>
              <div style={{height: '40%', paddingBottom: '1rem', paddingTop: '0.25rem'}}>
                  <ChartsCampaignsFunel/>
              </div>
            </Sider>
            <Layout>
                <Header style={{height: '45vh'}}>
                  <h3 style={{lineHeight: '5vh'}}>Статистика</h3>
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
                    <TableNCahootsCampaigns data={data}/>
                    <div>
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
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

CampaingsPage.propTypes = {}

export default CampaingsPage