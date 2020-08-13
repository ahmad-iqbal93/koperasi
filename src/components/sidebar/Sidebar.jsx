import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark
         accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon">
                    <i className="fa fa-building" />
                </div>
                <div className="sidebar-brand-text mx-3">Raja Koperasi</div>
            </Link>

            {/* Heading */}
            <div className="sidebar-heading">
                MAIN NAVIGATION
            </div>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></NavLink>
            </li>

            {/* Nav Item - Profile */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/profile">
                    <i className="fa fa-user" />
                    <span>Profile</span></NavLink>
            </li>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <NavLink className="nav-link active collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Transaksi</span>
                </NavLink>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink className="collapse-item" to="/simpan">Simpan</NavLink>
                        <NavLink className="collapse-item" to="/pinjam">Pinjam</NavLink>
                        <NavLink className="collapse-item" to="/withdraw">Withdraw</NavLink>
                        <NavLink className="collapse-item" to="/angsuran">Angsuran</NavLink>
                        <NavLink className="collapse-item" to="/mudharabah">Mudharabah</NavLink>
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

export default Sidebar
