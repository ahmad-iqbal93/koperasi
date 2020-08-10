import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Topbar from '../../topbar/Topbar'
import Footer from '../../footer/Footer'


const Dashboard = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
