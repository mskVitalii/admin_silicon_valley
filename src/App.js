import React, {useState} from "react";
import { Layout } from "antd";
import "./index.scss";

import { Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation     from './components/Navigation.component'

import CampaingsPage  from './pages/Campaigns'
import FinancesTab    from './components/orders/finances/FinancesTab'
import PicturesTab    from './components/orders/pictures/PicturesTab'
import ShoppingTab    from './components/orders/shoppingLists/ShoppingTab'
import WishesTab      from './components/orders/wishes/WishesTab'
import QuizzesPage    from './pages/Quizzes'
import UsersPage      from './pages/Users'
import Login          from '../src/components/auth/Login'
import Register       from '../src/components/auth/Register'
import ForgetPassword from '../src/components/auth/ForgetPassword'
import Avatar         from "antd/lib/avatar/avatar";


const { Content, Sider } = Layout

// Навигация & структура базовой страницы
function App() {

  // const [collapsed, setCollapsed] = useState(false);

  // const onCollapse = collapsed => {
  //   setCollapsed(collapsed);
  // }

  let loggedIn = false;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        }}>
          <Navigation />
          <Avatar style={{
              backgroundColor: "green",
              verticalAlign: "center"
          }}
          size="large" >
          Misha
          </Avatar>
        </Sider>
        <Layout style={{ minHeight: '100vh', marginLeft: '150px', backgroundColor: '#fffffe'}}>
        <Content style={{ margin: '16px 0'}}>
            {/* <hr/> */}
            <Switch>
              <Route path="/campaings" component={CampaingsPage} />
              <Route path="/FinancesTab" component={FinancesTab} />
              <Route path="/PicturesTab" component={PicturesTab} />
              <Route path="/ShoppingTab" component={ShoppingTab} />
              <Route path="/WishesTab" component={WishesTab} />
              <Route path="/quizzes" component={QuizzesPage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgetpassword" component={ForgetPassword} />

              <Route>
                {loggedIn ? <Redirect to="/campaings" /> : <Redirect to="/login" />}
              </Route>
            </Switch>
            {/* <hr/> */}
        </Content>
      </Layout>
    </Router>
    </Layout>)
}

export default App;
