import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark
         accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboardadmin">
                <div className="sidebar-brand-icon">
                    <i className="fa fa-building" />
                </div>
                <div className="sidebar-brand-text mx-3">Asada Koperasi</div>
            </Link>

            {/* Heading */}
            <div className="sidebar-heading">
                MAIN ADMIN NAVIGATION
            </div>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/dashboardadmin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></NavLink>
            </li>


            {/* Nav Item - Register Member */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/registermember">
                    <i className="fa fa-user" />
                    <span>Register Member</span></NavLink>
            </li>

            {/* Nav Item - Users And Members */}
            <li className="nav-item">
                <NavLink className="nav-link active collapsed" to="#" data-toggle="collapse" data-target="#collapseUsers" aria-expanded="true" aria-controls="collapseUsers">
                    <i className="fas fa-fw fa-users" />
                    <span>Users And Members</span>
                </NavLink>
                <div id="collapseUsers" className="collapse" aria-labelledby="headingUsers" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink className="collapse-item" to="/datausers">Data Users</NavLink>
                        <NavLink className="collapse-item" to="/datamembers">Data Members</NavLink>
                    </div>
                </div>
            </li>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <NavLink className="nav-link active collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Transaksi</span>
                </NavLink>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink className="collapse-item" to="/simpanadmin">Simpan</NavLink>
                        <NavLink className="collapse-item" to="/pinjamadmin">Pinjam</NavLink>
                        <NavLink className="collapse-item" to="/withdrawadmin">Withdraw</NavLink>
                        <NavLink className="collapse-item" to="/angsuranadmin">Angsuran</NavLink>
                        <NavLink className="collapse-item" to="/mudharabahadmin">Mudharabah</NavLink>
                    </div>
                </div>
            </li>

            {/* Nav Item - Report */}
            <li className="nav-item">
                <NavLink className="nav-link active collapsed" to="#" data-toggle="collapse" data-target="#collapseReport" aria-expanded="true" aria-controls="collapseReport">
                    <i className="fas fa-fw fa-print" />
                    <span>Report</span>
                </NavLink>
                <div id="collapseReport" className="collapse" aria-labelledby="headingReport" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink className="collapse-item" to="/">Simpan</NavLink>
                        <NavLink className="collapse-item" to="/">Pinjam</NavLink>
                        <NavLink className="collapse-item" to="/">Withdraw</NavLink>
                        <NavLink className="collapse-item" to="/">Angsuran</NavLink>
                        <NavLink className="collapse-item" to="/">Bagi Hasil</NavLink>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>

    )
}

export default SidebarAdmin
