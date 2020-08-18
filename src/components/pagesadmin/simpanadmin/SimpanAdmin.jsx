import React from 'react'
import { Link } from 'react-router-dom'
const SimpanAdmin = () => {
    return (
        <div id="wrapper">
            <div id="content" style={{ minHeight: '73vh' }}>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Form Simpan Dana</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboardadmin'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Simpan Dana</li>
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
                                    <label className="col-sm-2 col-form-label">Jumlah Simpanan</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Masukan Jumlah Simpan" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Jenis Simpanan</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>-- Pilih --</option>
                                            <option>Pokok</option>
                                            <option>Mudarabah</option>
                                            <option>Qurban</option>
                                            <option>Umrah</option>
                                            <option>Haji</option>
                                            <option>Ijah</option>
                                        </select>
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

export default SimpanAdmin
