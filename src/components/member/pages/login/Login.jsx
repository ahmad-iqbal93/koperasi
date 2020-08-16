import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const login = () => {

    // let [userInput, setUserInput] = useState({
    //     userName: '',
    //     email: '',
    //     password: ''
    // })


    return (
        <div className="container-fluid bg-gradient-dark" style={{
            height: '100vh'
        }}>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9 my-4">
                    <div className="card o-hidden border-0 shadow-lg my-5 ">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block loginImages"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Silahkan Login!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" for="customCheck">Ingat Saya</label>
                                                </div>
                                            </div>
                                            <Link to="/login" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </Link>
                                            <hr />
                                        </form>
                                        <div className="text-center">
                                            <Link as='a' className="small" to="/forgot">Lupa Password?</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link as='a' className="small" to="/register">Buat Akun!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default login
