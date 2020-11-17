import React from "react";
import { Layout } from "antd";
import "./index.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.component";

import CampaingsPage from "./pages/Campaigns";
import OrdersPage from "./pages/Orders";
import QuizzesPage from "./pages/Quizzes";
import UsersPage from "./pages/Users";

const { Header, Footer, Content } = Layout;

// Навигация & структура базовой страницы
function App() {
  return (
    <Layout>
      <Router>
        <Header>
          <Navigation />
        </Header>
        <Content>
          <div>
            <hr />
            <Switch>
              <Route path="/campaings" component={CampaingsPage} />
              <Route path="/orders" component={OrdersPage} />
              <Route path="/quizzes" component={QuizzesPage} />
              <Route path="/users" component={UsersPage} />
            </Switch>
            <hr />
          </div>
        </Content>
      </Router>
      <Footer>
        <h4>Footer</h4>
      </Footer>
    </Layout>
  );
}

export default App;
