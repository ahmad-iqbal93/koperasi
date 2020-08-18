import React from 'react'
import { Link } from 'react-router-dom'

const ReportSimpan = () => {
    return (
        <div id="wrapper">
            <div id="content" style={{ minHeight: '73vh' }}>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Pre <small>View Data Simpanan</small></h1>
                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboardadmin'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Withdraw</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>
                    {/* Content */}
                    <div className="card shadow mb-4">
                        <div className="col-sm-12">
                            <button className="btn btn-warning d-flex">Print All</button>
                            <div id="dataTable_filter" className="dataTables_filter d-flex justify-content-end" style={{ flexDirection: 'row' }}>
                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>Masukan ID Member<input type="search" className="form-control form-control-sm" style={{ display: 'flex', alignItems: 'center', }} placeholder="Masukan Type ID Member" aria-controls="dataTable" />
                                    <button>
                                        <span class="material-icons" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            search
                                        </span>
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* End Content */}
                </div>

            </div>

        </div>
    )
}

export default ReportSimpan