import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalLogout from '../modal/ModalLogout'
import './Topbar.scss'

const Topbar = () => {
    let [userName, setUserName] = useState([
        {
            nama: 'Valerie Luna',
            nik: 1203015013,
            avatar: 'https://picsum.photos/seed/200/300/'
        },
    ])
    return (
        <nav className="navbar navbar-expand navbar-light bg-light topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars" />
            </button>
            {/* Topbar Navbar */}
            {/* Nav Item - User Information */}
            <ul className="navbar-nav ml-auto">
                {userName.map((e) => {
                    return (
                        <li className="nav-item dropdown no-arrow" >
                            <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="img-profile rounded-circle" src={e.avatar} alt='avatar' />
                                <span className="ml-2 d-none d-lg-inline text-gray-600 small">{e.nama}</span>
                            </Link>
                            {/* Dropdown - User Information */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                <div className="user-header">
                                    <img className="img-profile" src={e.avatar} alt='avatar' />
                                </div>
                                <div className="user-name">
                                    <h4>{e.nama}</h4>
                                    <h6>NIK : {e.nik}</h6>
                                </div>

                                <div className="dropdown-divider" />
                                <div className="row">
                                    <div className="col-6">
                                        <Link className="btn">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />Settings</Link>
                                    </div>

                                    <div className="col-6">
                                        <Link className="btn" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />Logout</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
                {/*End Nav Item - User Information */}

            </ul>



            {/* modal logout */}
            <div className="modal fade" id='logoutModal' tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Apakah anda yakin?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Pilih tombol Keluar dibawah jika anda yakin ingin keluar.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Batalkan</button>
                            <button className="btn btn-primary" onClick={() => {
                                sessionStorage.removeItem('isLogin')
                                window.location.href = '/'
                            }}
                            >Keluar</button>
                        </div>
                    </div>
                </div>

            </div>
        </nav >

    )
}

export default Topbar
