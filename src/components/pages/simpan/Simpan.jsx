import React from 'react'
import { Link } from 'react-router-dom'
import ModalLogout from '../../modal/ModalLogout'
import './Simpan.css'



const simpan = () => {
    return (
        <div id='wrapper'>
            <div id='content'>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Simpan dana</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Simpan dana</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    <div className="row">
                        <div className="card border-left-primary shadow h-100  w-100 py-2">
                            <div className="card-body px-5">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Member</label>
                                        <div className="col-sm-10">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih Member --</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Jumlah Simpanan</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Jumlah Simpanan" />
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Jenis Simpanan</label>
                                        <div className="col-sm-10">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih Simpanan --</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                                <option>12030150777 - Lian Amelia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label"></label>
                                        <div className="col-sm-10">
                                            <Link as='button' type="submit" className="btn btn-primary"
                                                data-toggle="modal" data-target="#Modal"
                                            >Simpan</Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal save */}
            <ModalLogout idLogout="Modal"
                ket1="Apakah anda yakin?"
                ket2="Pilih tombol Simpan dibawah jika anda yakin ingin menyimpannya."
                button="Simpan" />
            {/* end modal save */}
        </div>




    )
}

export default simpan
