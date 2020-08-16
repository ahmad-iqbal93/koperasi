import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Topbar from '../../topbar/Topbar'
import Footer from '../../footer/Footer'
import './Dashboard.scss'


const Dashboard = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
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

export default Dashboard
