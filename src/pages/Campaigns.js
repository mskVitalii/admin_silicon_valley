import React, { useState } from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormCampaign from '../components/campaigns/FormCampaign'
import { Layout, Button } from 'antd'

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
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с NCahoots Campaigns
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