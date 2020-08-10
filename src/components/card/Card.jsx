import React, { useState } from 'react'

const Card = () => {
    let [card, setCard] = useState(
        [
            {
                nama: 'Total Hutang',
                jumlah: 'Rp. 12.000.000',
                fa: 'fa fa-shopping-bag'
            },
            {
                nama: 'Total Piutang',
                jumlah: '12.000.000',
                fa: 'fa fa-book'
            }
        ]
    )
    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Raja Koperasi</h1>
            </div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}

                {card.map((e) => {
                    return (
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{e.nama}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{e.jumlah}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`${e.fa} fa-2x text-gray-300`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </div>

    )
}

export default Card
