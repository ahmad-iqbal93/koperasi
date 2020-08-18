import React from 'react'
import SidebarAdmin from '.././sidebaradmin/SidebarAdmin'
import Topbar from '../../topbar/Topbar'
import Footer from '../../footer/Footer'
import '../../pages/dashboard/Dashboard.scss'


const DashboardAdmin = ({ children }) => {
    return (
        <div id="wrapper">
            <SidebarAdmin />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content contentDashboard">
                    <Topbar />
                    {children}
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default DashboardAdmin
