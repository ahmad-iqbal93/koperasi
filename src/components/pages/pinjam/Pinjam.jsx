import React from 'react'
import { Link } from 'react-router-dom'
import ModalLogout from '../../modal/ModalLogout'

const Pinjam = () => {
    return (
        <div id='wrapper'>
            <div id='content'>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Pinjam Dana</h1>
                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Pinjam Dana</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    <div className="row">
                        <div className="card border-left-primary shadow h-100  w-100 py-2">
                            <div className="card-body px-5">
                                <form>
                                    {/* Pilih Member */}
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
                                    {/* end Member */}

                                    {/* Jumlah Pinjaman */}
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Jumlah Pinjaman</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Jumlah Pinjaman" />
                                        </div>
                                    </div>
                                    {/* end jumlah Pinjaman */}

                                    {/* Bunga */}
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Bunga Pertahun</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Dalam Persen %" />
                                        </div>
                                    </div>
                                    {/* end Bunga */}

                                    {/* Tenor */}
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Tenor</label>
                                        <div className="col-sm-10">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>-- Pilih Tenor --</option>
                                                <option>6 Bulan</option>
                                                <option>12 Bulan</option>
                                                <option>24 Bulan</option>
                                                <option>36 Bulan</option>
                                                <option>48 Bulan</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Tenor */}

                                    {/* Biaya Administrasi */}
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Biaya Administrasi</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Biaya Administrasi" />
                                        </div>
                                    </div>
                                    {/* biaya Administrasi */}

                                    {/* text area Keterangan */}
                                    <div class="form-group row">
                                        <label className="col-sm-2 col-form-label" htmlFor="exampleFormControlTextarea1">Keterangan</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Keterangan" />
                                        </div>
                                        {/* end text area Keterangan */}
                                    </div>

                                    {/* button save */}
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label"></label>
                                        <div className="col-sm-10">
                                            <Link as='button ' type="submit" className="btn btn-primary" data-toggle="modal" data-target="#Modal">Simpan</Link>
                                        </div>
                                    </div>


                                    {/* end button save */}

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

export default Pinjam
