import React from "react";
import { Tabs } from "antd";

import FinancesTab from '../components/orders/finances/FinancesTab'
import ShoppingTab from '../components/orders/shoppingLists/ShoppingTab'
import WishesTab from '../components/orders/wishes/WishesTab'
import PicturesTab from '../components/orders/pictures/PicturesTab'

import "./styles/Orders.scss";

const { TabPane } = Tabs;

const OrdersPage = () => {
  return (
    <div>
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
    </div>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
