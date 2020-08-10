import React from 'react'
import { Link } from 'react-router-dom'
import ModalLogout from '../modal/ModalLogout'

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars" />
            </button>

            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw" />
                    </Link>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt='avatar' />
                        <span className="ml-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                    </Link>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />Profile</Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />Settings</Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />Activity Log</Link>
                        <div className="dropdown-divider" />

                        <Link className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />Logout</Link>
                    </div>
                </li>
            </ul>

            <ModalLogout idLogout="logoutModal"
                ket1="Apakah anda yakin?"
                ket2="Pilih tombol Keluar dibawah jika anda yakin ingin keluar."
                button="Keluar"
            />
        </nav>

    )
}

export default Topbar
