import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/member/pages/login/Login';
import Register from './components/member/pages/register/Register';
import Dashboard from './components/member/pages/dashboard/Dashboard';
import Mudharabah from './components/member/pages/mudharabah/Mudharabah';
import Card from './components/member/card/Card';
import Simpan from './components/member/pages/simpan/Simpan';
import Pinjam from './components/member/pages/pinjam/Pinjam';
import Withdraw from './components/member/pages/withdraw/Withdraw';
import Angsuran from './components/member/pages/angsuran/Angsuran';
import Profile from './components/member/pages/profile/Profile';
import Forgot from './components/member/pages/forgot/Forgot';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/profile'>
          <Dashboard>
            <Profile />
          </Dashboard>
        </Route>

        <Route path='/angsuran'>
          <Dashboard>
            <Angsuran />
          </Dashboard>
        </Route>

        <Route path='/withdraw'>
          <Dashboard>
            <Withdraw />
          </Dashboard>
        </Route>
        <Route path='/pinjam'>
          <Dashboard>
            <Pinjam />
          </Dashboard>
        </Route>
        <Route path='/simpan'>
          <Dashboard>
            <Simpan />
          </Dashboard>
        </Route>
        <Route path='/mudharabah'>
          <Dashboard>
            <Mudharabah />
          </Dashboard>
        </Route>
        <Route path='/dashboard'>
          <Dashboard>
            <Card />
          </Dashboard>
        </Route>
        <Route path='/forgot'>
          <Forgot />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
