import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark
         accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    <i className="fa fa-building" />
                </div>
                <div className="sidebar-brand-text mx-3">Raja Koperasi</div>
            </a>

            {/* Heading */}
            <div className="sidebar-heading">
                MAIN NAVIGATION
            </div>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Transaksi</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/simpan">Simpan</Link>
                        <Link className="collapse-item" to="/pinjam">Pinjam</Link>
                        <Link className="collapse-item" to="/withdraw">Withdraw</Link>
                        <Link className="collapse-item" to="/angsuran">Angsuran</Link>
                    </div>
                </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench" />
                    <span>Bagi Hasil</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/mudharabah">Mudharabah</Link>
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
