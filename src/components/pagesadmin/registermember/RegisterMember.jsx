import React from 'react'
import { Link } from 'react-router-dom'
import './Registermember.scss'

const RegisterMember = () => {
    return (
        <div id="wrapper">
            <div id="content" className="contentRegisterMember">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Register Member</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Register Member</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>

                    {/* content */}
                    {/* Collapsable Card Example */}
                    <div className="card shadow mb-4">
                        {/* Card Header - Accordion */}
                        <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                            <h6 className="m-0 font-weight-bold text-primary">Add Data Member</h6>
                        </a>
                        {/* Card Content - Collapse */}
                        <div className="collapse show" id="collapseCardExample">
                            <div className="card-body">
                                <form className="px-5">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">ID</label>
                                        <div className="col-sm-10">
                                            <input type="text" readOnly className="form-control" placeholder="M-0003" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">NIK</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="NIK" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Nama Member</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Nama Member" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Tempat, Tanggal lahir</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" placeholder="Tempat" />
                                        </div>

                                        <div className="input-group col-sm-5">
                                            <input type="text" className="form-control" placeholder="Tanggal" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" style={{
                                                    height: '38px'
                                                }}>
                                                    <i className="fas fa-calendar-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Jenis Kelamin</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih --</option>
                                                <option>Laki - Laki</option>
                                                <option>Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Golongan Darah</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih --</option>
                                                <option>A</option>
                                                <option>AB</option>
                                                <option>B</option>
                                                <option>o</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Agama</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih --</option>
                                                <option>Islam</option>
                                                <option>Protestan</option>
                                                <option>Katolik</option>
                                                <option>Hindu</option>
                                                <option>Budha</option>
                                                <option>Kepercayaan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Pekerjaan</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Pekerjaan" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Alamat</label>
                                        <div className="col-sm-10">
                                            <textarea type="text" className="form-control" placeholder="Alamat" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" placeholder="Masukan Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">No Telepon</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" placeholder="Masukan Nomer Telepon" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>


                    {/* end content */}



                </div>
            </div>
        </div>


    )
}

export default RegisterMember
