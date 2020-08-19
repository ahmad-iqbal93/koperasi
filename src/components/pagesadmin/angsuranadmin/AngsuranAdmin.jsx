import React from 'react'
import { Link } from 'react-router-dom'

const AngsuranAdmin = () => {
    return (
        <div id="wrapper">
            <div id="content" style={{ minHeight: '73vh' }}>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Bayar Angsuran</h1>
                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboardadmin'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Angsuran</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    {/* Content */}
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table table-responsive  container-fluid mb-4">
                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    {/*nomor-head */}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="dataTables_length d-flex justify-content-start" id="dataTable_length">
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
                                        <div className="col-sm-9">
                                            <div id="dataTable_filter" className="dataTables_filter d-flex justify-content-end">
                                                <label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="dataTable" />
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
                                                        <th>ID</th>
                                                        <th>Nama</th>
                                                        <th>Jumlah Angsuran</th>
                                                        <th>Sisa Simpanan</th>
                                                        <th>Email</th>
                                                        <th>No. Telp</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>M-0002</td>
                                                        <td>Joko Anwar Habibi</td>
                                                        <td>200.000</td>
                                                        <td>400.000</td>
                                                        <td>test@gmail.com</td>
                                                        <td>089698769876</td>
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
                    {/* End Content */}
                </div>

            </div>

        </div>
    )
}

export default AngsuranAdmin
