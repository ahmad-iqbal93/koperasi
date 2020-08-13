import React from 'react'
import { Link } from 'react-router-dom'
import ModalLogout from '../../modal/ModalLogout'
import './Simpan.css'



const simpan = () => {
    return (
        <div id='wrapper'>
            <div id='content'>
                <div className="container-fluid conSimpan">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Simpan dana</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='#'>Transaksi</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Simpan dana</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive  container-fluid mb-4">
                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    {/*nomor-head */}
                                    <div className="row">
                                        <div className="col">
                                            <div className="dataTables_length" id="dataTable_length">
                                                <label>Show entries
                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
                                                        <option value={10}>10</option>
                                                        <option value={25}>25</option>
                                                        <option value={50}>50</option>
                                                        <option value={100}>100</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="dataTable_filter" className="dataTables_filter" style={{
                                                position: 'relative'
                                            }}>
                                                <label style={{
                                                    position: 'absolute',
                                                    right: '0'
                                                }}>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="dataTable" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* table */}
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                <thead>
                                                    <tr>
                                                        <th>No. Simpanan</th>
                                                        <th>ID Member</th>
                                                        <th>Jumlah Simpanan</th>
                                                        <th>Jenis Simpanan</th>
                                                        <th>Tanggal Transaksi</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>S-0000000001</td>
                                                        <td>M-000001</td>
                                                        <td>IDR 200.000,00</td>
                                                        <td>Pokok</td>
                                                        <td>2020-12-30 06:08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S-0000000001</td>
                                                        <td>M-000001</td>
                                                        <td>IDR 200.000,00</td>
                                                        <td>Mudharabah</td>
                                                        <td>2020-12-30 06:08</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* table-footer */}
                            <div className="row p-2">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                        <ul className="pagination" style={{
                                            position: 'absolute',
                                            right: '0'
                                        }}>
                                            <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                                <a href="#" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={3} tabIndex={0} className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={4} tabIndex={0} className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="dataTable" data-dt-idx={5} tabIndex={0} className="page-link">5</a>
                                            </li>
                                            <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={6} tabIndex={0} className="page-link">6</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="dataTable_next">
                                                <a href="#" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end data example */}
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
