import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
    return (
        <div className="container-fluid bg-gradient-dark" style={{
            height: '100vh'
        }}>
            <div className="row justify-content-center" style={{
                width: '100vw !important',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className="col-xl-10 col-lg-12 col-md-9 my-4">
                    <div className="card o-hidden border-0 shadow-lg my-5 ">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block" style={{
                                    height: '75vh',
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1562524189-47c98a906452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80)'
                                }} />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Lupa passwordmu?</h1>
                                            <p className="mb-4">Kami mengerti, banyak hal terjadi. Cukup masukkan alamat email Anda di bawah ini dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda!</p>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Masukan alamat E-mail..." />
                                            </div>
                                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                                Reset Password
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link as='a' className="small" to="/register">Buat akun</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link as='a' className="small" to='/login'>Sudah punya akun? Login!</Link>
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

export default Forgot
