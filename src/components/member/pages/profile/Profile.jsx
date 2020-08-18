import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.scss'

const Profile = () => {
    const [cardProfile, setCardProfile] = useState([
        {
            cardNav: 'Birth Day',
            icon: 'fa fa-map-marker',
            ket: 'Cilacap, 2-10-1986'
        },
        {
            cardNav: 'Register',
            icon: 'fa fa-lock',
            ket: '20-8-2017 08:00:58'
        }

    ])
    return (
        <div id='wrapper'>
            <div id='content'>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Profile</h1>

                        {/* breadcrumb */}
                        <ol className="breadcrumb mb-0 text-gray-800">
                            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                        {/* end breadcrumb */}
                    </div>

                    {/* Content */}

                    <div className="content">
                        <div className="row d-sm-flex">
                            {/* col-3 */}
                            <div className="col-xl-3 col-lg-5">
                                {/* card-1 */}
                                <div className="card card-responsive shadow card1 mb-3">

                                    <div className="boxProfile">
                                        <img src="https://picsum.photos/seed/200/300/" alt="Photo Member" />
                                        <h3 className="card-title m-3">Valerina Luna</h3>
                                        <p className="card-text">Photography</p>
                                    </div>

                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item d-flex w-100 justify-content-between">
                                            <i class="fa fa-phone"></i> <a class="pull-right">085714057686</a>
                                        </li>
                                        <li class="list-group-item d-flex w-100 justify-content-between">
                                            <i class="fa fa-envelope"></i> <a class="pull-right">sofyana@gmail.com</a>
                                        </li>

                                    </ul>

                                </div>
                                {/* end card-1 */}

                                {/* card-2 */}
                                {cardProfile.map((e) => {
                                    return (
                                        < div className="card card-responsive shadow card2 p-3 mb-3" >

                                            <h4 className="card-title">{e.cardNav}</h4>
                                            <div className="contentUserCard2">
                                                <i className={e.icon} />
                                                <p className="card-title text-right textCard2">
                                                    {e.ket}</p>
                                            </div>

                                        </div>

                                    )
                                })}
                                {/* end card-2 */}
                            </div>
                            {/* end col-3 */}


                            {/* col-9 */}
                            <div className="col-xl-9 col-lg-7">

                                {/* head Nav-tabs */}
                                <ul className="nav nav-tabs shadow" id="myTab" role="tablist">
                                    <li className="nav-item waves-effect waves-light">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item waves-effect waves-light">
                                        <a className="nav-link" id="simpanan-tab" data-toggle="tab" href="#simpanan" role="tab" aria-controls="profile" aria-selected="false">Simpanan</a>
                                    </li>
                                </ul>
                                {/* end head nav-tab */}
                                {/* content nav-tab */}
                                <div class="tab-content shadow" id="myTabContent">
                                    {/* content nav-tab proflie*/}
                                    <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="home-tab">
                                        <form className="topForm">
                                            {/* NIK */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">NIK</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="NIK Member" />
                                                </div>
                                            </div>
                                            {/* end NIK */}

                                            {/* Nama */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Nama</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Nama Member" />
                                                </div>
                                            </div>
                                            {/* end Nama */}

                                            {/* Lahir */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Tempat Lahir</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Tempat Lahir Member" />
                                                </div>
                                            </div>
                                            {/* end Lahir */}


                                            {/* Tenggal Lahir */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Tanggal Lahir</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Tanggal Lahir Member" />
                                                </div>
                                            </div>
                                            {/* end Tenggal Lahir */}


                                            {/* Jenis Kelamin */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Jenis Kelamin</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Jenis Kelamin" />
                                                </div>
                                            </div>
                                            {/* end Jenis Kelamin */}

                                            {/* Agama */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Agama</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Agama" />
                                                </div>
                                            </div>
                                            {/* end Agama */}

                                            {/* Golongan Darah */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Golongan Darah</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="Golongan Darah" />
                                                </div>
                                            </div>
                                            {/* end Golongan Darah */}

                                            {/* Alamat */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlTextarea1">Alamat</label>
                                                <div className="col-sm-9">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Alamat" />
                                                </div>
                                            </div>
                                            {/* end Alamat */}
                                        </form>
                                    </div>
                                    {/* end content nav-tab proflie*/}


                                    {/* content nav-tab simpanan*/}
                                    <div class="tab-pane fade" id="simpanan" role="tabpanel" aria-labelledby="contact-tab">
                                        <form className="topForm">
                                            {/* Pokok */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Pokok</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 9.000.000" />
                                                </div>
                                            </div>
                                            {/* end Pokok */}

                                            {/* Mudharabah */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Mudharabah</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 9.500.000" />
                                                </div>
                                            </div>
                                            {/* end Mudharabah */}

                                            {/* Qurban */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Qurban</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 2.000.000" />
                                                </div>
                                            </div>
                                            {/* end Qurban */}

                                            {/* Qurban */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Qurban</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 2.000.000" />
                                                </div>
                                            </div>
                                            {/* end Qurban */}

                                            {/* Umrah */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Umrah</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 2.000.000" />
                                                </div>
                                            </div>
                                            {/* end Umrah */}

                                            {/* Haji */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Haji</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 2.000.000" />
                                                </div>
                                            </div>
                                            {/* end Haji */}

                                            {/* Ijah */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Ijah</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="IDR 2.000.000" />
                                                </div>
                                            </div>
                                            {/* end Ijah */}
                                        </form>
                                    </div>
                                    {/* end content nav-tab simpanan*/}

                                </div>
                                {/* end content nav-tab */}
                            </div>
                            {/* ENd col-9 */}
                        </div>
                    </div>
                    {/* End content */}
                </div>
            </div>
        </div >
    )
}

export default Profile
