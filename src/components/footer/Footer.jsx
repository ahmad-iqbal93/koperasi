import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="sticky-footer shadow bg-white foot">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-sm-8 d-flex align-items-center justify-content-start my-1">
                        <div className="copyright text-left my-auto">
                            <span>Copyright © 2016 <Link to="https://www.rajaputramedia.com/">raja KOPERASI.</Link>   All rights reserved</span>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-1 d-flex align-items-center ml-auto my-1">
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
