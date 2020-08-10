import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-start">
                        <div className="copyright text-left my-auto">
                            <span>Copyright © 2016 <Link to="https://www.rajaputramedia.com/">raja KOPERASI.</Link>   All rights reserved</span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <div className="copyright text-right my-auto">
                            <span>Version 2.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
