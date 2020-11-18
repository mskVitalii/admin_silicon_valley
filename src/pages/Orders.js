import React                    from "react";
import { Tabs }         from "antd";
import FinancesTab              from '../components/orders/finances/FinancesTab'
import ShoppingTab              from '../components/orders/shoppingLists/ShoppingTab'
import WishesTab                from '../components/orders/wishes/WishesTab'
import PicturesTab              from '../components/orders/pictures/PicturesTab'
import "./styles/Orders.css";

const { TabPane } = Tabs;

const OrdersPage = () => {
  return (
    // <Layout className="layout-main">
    //   <Layout className="layout-chart">
    //     <Content>
    //       <h2>Статистика</h2>
    //       <StatisticChart />
    //     </Content>
    //   </Layout>
    //   <Layout className="layout-table">
    //     <Header>Таблица с NCahoots Campaigns</Header>
    //     <Content>
    //       <TableNCahootsCampaigns />
    //     </Content>
    //   </Layout>
    // </Layout>

    <Tabs defaultActiveKey="1" size={"large"} style={{ marginBottom: 32 }}>
      <TabPane tab="Finances" key="1">
        <FinancesTab />
      </TabPane>
      <TabPane tab="Shopping Lists" key="2">
        <ShoppingTab />
      </TabPane>
      <TabPane tab="Wishes" key="3">
        <WishesTab />
      </TabPane>
      <TabPane tab="Pictures" key="4">
        <PicturesTab />
      </TabPane>
    </Tabs>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
