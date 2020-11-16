import React from 'react'
import { Layout } from 'antd'
import './index.css'

import { Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation     from './components/Navigation.component'

import CampaingsPage  from './pages/Campaigns'
import OrdersPage     from './pages/Orders'
import QuizzesPage    from './pages/Quizzes'
import UsersPage      from './pages/Users'
import Login          from '../src/components/auth/Login'
import Register       from '../src/components/auth/Register'
import ForgetPassword from '../src/components/auth/ForgetPassword'


const { Header, Content } = Layout

// Навигация & структура базовой страницы
function App() {

  let loggedIn = true;

  return (
  <Layout>
    <Router>
      <Header><Navigation/></Header>
      <Content>
        <div >
          <hr/>
          <Switch>
            <Route path="/campaings" component={CampaingsPage} />
            <Route path="/orders"    component={OrdersPage} />
            <Route path="/quizzes"   component={QuizzesPage} />
            <Route path="/users"     component={UsersPage} />
            <Route path="/login"     component={Login} />
            <Route path="/register"  component={Register} />
            <Route path="/forgetpassword"   component={ForgetPassword} />

            <Route>
              {loggedIn ? <Redirect to="/campaings" /> : <Redirect to="/login" /> }
            </Route>
          </Switch>
          <hr/>
          </div>
      </Content>
    </Router>
  </Layout>)
}

export default App
