import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useState, useEffect } from 'react'

const Register = () => {

    let [userInput, setUserInput] = useState({
        userName: '',
        email: '',
        password: '',
        password2: '',
    })

    let [disabled, setDisabled] = useState(false)

    let handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3005/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userInput.userName,
                email: userInput.email,
                password: userInput.password,
            })
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.accessToken) {
                    // apabila berhasil
                    alert('Registrasi Berhasil..')
                    // lempar ke page login
                    window.location.href = "/"

                } else {
                    // jika tidak berhasil
                    alert(data)
                }
            })
    }

    useEffect(() => {

        // console.log('data di update');
        if (userInput.password === userInput.password2 && userInput.password.length >= 6) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [userInput])


    return (

        <div className="container-fluid bg-gradient-dark" style={{
            width: '100vw !important',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
                                <form className="user" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-12 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="User Name" onChange={(e) => {
                                                setUserInput({
                                                    ...userInput,
                                                    userName: e.target.value
                                                })
                                                console.log(userInput);
                                            }} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" onChange={(e) => {
                                            setUserInput({
                                                ...userInput,
                                                email: e.target.value
                                            })
                                            console.log(userInput);
                                        }} />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" onChange={(e) => {
                                                setUserInput({
                                                    ...userInput,
                                                    password: e.target.value
                                                })
                                                console.log(userInput);

                                            }} />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" onChange={(e) => {
                                                setUserInput({
                                                    ...userInput,
                                                    password2: e.target.value
                                                })
                                                console.log(userInput);

                                            }} />
                                        </div>
                                    </div>
                                    <button type='submit' className="btn btn-primary btn-user btn-block" disabled={disabled}>
                                        Register Account
                                    </button>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link as='a' className="small" to="/forgot">Lupa Password?</Link>
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
