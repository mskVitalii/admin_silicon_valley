import React, {useState} from 'react'
import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormQuizzes from '../components/quizzes/FormQuizzes'
import { Layout, Button } from 'antd'

// import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout


const QuizzesPage = () => {
    console.log('QuizzesPage')

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
        <Layout>
            <Sider>Либо можно сделать статистику здесь</Sider>
            <Layout>
                <Header>Статистика</Header>
                <Content>
                    таблица с опросами
                    <TableNCahootsCampaigns/>
                    <div>
                        <Button
                          type="default"
                          onClick={() => {
                            setVisible(true);
                          }}
                        >
                          Add Quiz
                        </Button>
                        <FormQuizzes
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

QuizzesPage.propTypes = {}

export default QuizzesPage