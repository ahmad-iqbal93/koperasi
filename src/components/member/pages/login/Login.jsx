import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {

    let [userInput, setUserInput] = useState({
        email: '',
        password: '',
        userName: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3005/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        })

            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    // untuk melihat data token di browser/application/session storage
                    sessionStorage.setItem('isLogin', data.accessToken)
                    // console.log(data);
                    alert('welcome')
                    // lempar ke page login
                    window.location.href = "/dashboard"
                } else {
                    alert('Periksa kembali')
                }
            })
    }

    useEffect(() => {
        console.log(userInput);
    }, [userInput])



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
                                <div className="col-lg-6 d-none d-lg-block loginImages"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Silahkan Login!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                    onChange={(e) => {
                                                        setUserInput({
                                                            ...userInput,
                                                            email: e.target.value,
                                                            userName: e.target.value
                                                        })
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                                                    onChange={(e) => {
                                                        setUserInput({
                                                            ...userInput,
                                                            password: e.target.value
                                                        })
                                                    }}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" for="customCheck">Ingat Saya</label>
                                                </div>
                                            </div>
                                            <button type='submit' className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
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

export default Login
