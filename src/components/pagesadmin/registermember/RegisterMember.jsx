import React from 'react'
import { Link } from 'react-router-dom'

const RegisterMember = () => {
    return (
        <div id="wrapper">
            <div id="content">
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
                </div>

            </div>

        </div>
    )
}

export default RegisterMember
