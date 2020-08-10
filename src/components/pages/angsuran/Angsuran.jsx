import React from 'react'
import './Angsuran.css'
import { Link } from 'react-router-dom'

const Angsuran = () => {
    return (
        <div id='wrapper'>
            <div id='content'>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Angsuran</h1>
                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Bayar Angsuran</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>

                    <div className="row">
                        <div className="card border-left-primary shadow h-100  w-100">
                            <div className="card-body px-4">
                                <div className="row">
                                    <div className="col-sm-8 text1">Masukan nomor pinjaman</div>
                                    <form className="form-inline col-sm-4">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 " placeholder="Tulis nomor pinjaman disini" aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Angsuran
