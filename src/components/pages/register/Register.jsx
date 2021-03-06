import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    return (

        <div className="container-fluid bg-gradient-dark h-100" style={{
            height: '100vh !important',
            width: '100vw !important',
            display: 'flex',
            padding: '33.5px 0',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight : '100vh',
        }}>
            <div className="card o-hidden border-0 shadow-lg my-5 col-lg-10">
                <div className="card-body p-0">

                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bgRegister"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Buat Akun Baru!</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                        </div>
                                    </div>
                                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>


                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Lupa Password?</a>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/login">Sudah punya akun? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
