import React from 'react'
import { Link } from 'react-router-dom'

const PinjamAdmin = () => {
    return (
        <div id="wrapper">
            <div id="content" style={{ minHeight: '73vh' }}>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Form Pinjam Dana</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboardadmin'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Pinjam Dana</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    {/* content */}
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <form className="px-5">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Member</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>-- Pilih Member --</option>
                                            <option>3276101099007 - Joko</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Jumlah Pinjaman</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Masukan Jumlah Pinjaman" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Bunga % Per Tahun</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Dalam Persen %" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Tenor</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>-- Pilih --</option>
                                            <option>6 Bulan</option>
                                            <option>12 Bulan</option>
                                            <option>18 Bulan</option>
                                            <option>24 Bulan</option>
                                            <option>36 Bulan</option>
                                            <option>48 Bulan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Biaya Adminitrasi</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Biaya Adminitrasi" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Keterangan</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" className="form-control" placeholder="Keterangan" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* end content */}
                </div>
            </div>
        </div>

    )
}

export default PinjamAdmin
