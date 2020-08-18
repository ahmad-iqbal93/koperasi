import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
import Mudharabah from './components/pages/mudharabah/Mudharabah';
import Card from './components/card/Card';
import Simpan from './components/pages/simpan/Simpan';
import Pinjam from './components/pages/pinjam/Pinjam';
import Withdraw from './components/pages/withdraw/Withdraw';
import Angsuran from './components/pages/angsuran/Angsuran';
import Profile from './components/pages/profile/Profile';
import Forgot from './components/pages/forgot/Forgot';
import RegisterMember from './components/pagesadmin/registermember/RegisterMember';
import DataUsers from './components/pagesadmin/datausers/DataUsers';
import DataMembers from './components/pagesadmin/datamembers/DataMembers';
import DashboardAdmin from './components/pagesadmin/dashboardadmin/DashboardAdmin';
import SimpanAdmin from './components/pagesadmin/simpanadmin/SimpanAdmin';
import PinjamAdmin from './components/pagesadmin/pinjamadmin/PinjamAdmin';
import WithdrawAdmin from './components/pagesadmin/withdrawadmin/WithdrawAdmin';
import AngsuranAdmin from './components/pagesadmin/angsuranadmin/AngsuranAdmin';
import MudharabahAdmin from './components/pagesadmin/mudharabahadmin/MudharabahAdmin';
import ReportSimpan from './components/pagesadmin/reportsimpan/ReportSimpan';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/reportsimpan'>
          <DashboardAdmin>
            <ReportSimpan />
          </DashboardAdmin>
        </Route>
        <Route path='/datamembers'>
          <DashboardAdmin>
            <DataMembers />
          </DashboardAdmin>
        </Route>
        <Route path='/datausers'>
          <DashboardAdmin>
            <DataUsers />
          </DashboardAdmin>
        </Route>
        <Route path='/registermember'>
          <DashboardAdmin>
            <RegisterMember />
          </DashboardAdmin>
        </Route>

        <Route path='/profile'>
          <Dashboard>
            <Profile />
          </Dashboard>
        </Route>
        <Route path='/angsuranadmin'>
          <DashboardAdmin>
            <AngsuranAdmin />
          </DashboardAdmin>
        </Route>
        <Route path='/angsuran'>
          <Dashboard>
            <Angsuran />
          </Dashboard>
        </Route>
        <Route path='/withdrawadmin'>
          <DashboardAdmin>
            <WithdrawAdmin />
          </DashboardAdmin>
        </Route>
        <Route path='/withdraw'>
          <Dashboard>
            <Withdraw />
          </Dashboard>
        </Route>
        <Route path='/pinjamadmin'>
          <DashboardAdmin>
            <PinjamAdmin />
          </DashboardAdmin>
        </Route>
        <Route path='/pinjam'>
          <Dashboard>
            <Pinjam />
          </Dashboard>
        </Route>
        <Route path='/simpanadmin'>
          <DashboardAdmin>
            <SimpanAdmin />
          </DashboardAdmin>
        </Route>
        <Route path='/simpan'>
          <Dashboard>
            <Simpan />
          </Dashboard>
        </Route>
        <Route path='/mudharabahadmin'>
          <DashboardAdmin>
            <MudharabahAdmin />
          </DashboardAdmin>
        </Route>
        <Route path='/mudharabah'>
          <Dashboard>
            <Mudharabah />
          </Dashboard>
        </Route>
        <Route path='/dashboardadmin'>
          <DashboardAdmin>
            <Card />
          </DashboardAdmin>
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
