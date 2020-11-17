import React, {useState} from 'react'
import { Layout, Button, Tabs } from 'antd'

import TableNCahootsCampaigns   from '../components/campaigns/TableCampaigns'
import FormUsers                from '../components/users/FormUser'


// import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout
const { TabPane } = Tabs;


const UsersPage = () => {

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

    return (
    <Tabs defaultActiveKey="1" size={'large'} style={{ marginBottom: 32 }}>
      <TabPane tab="Customers" key="1">
        <TableNCahootsCampaigns/>
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </Button>
            <FormUsers
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
      </TabPane>
      <TabPane tab="Admins" key="2">
      <h3>Пользователи с правами редактирования и удаления данных</h3>
      <TableNCahootsCampaigns/>
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </Button>
            <FormUsers
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
      </TabPane>
    </Tabs>
)}

UsersPage.propTypes = {}

export default UsersPage