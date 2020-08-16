import React, { useState } from 'react'
import './Card.scss'

const Card = () => {
    let [card, setCard] = useState(
        [
            {
                nama: 'Total Hutang',
                jumlah: 'Rp. 12.000.000',
                fa: 'fa fa-shopping-bag',
                side: "primary"
            },
            {
                nama: 'Total Piutang',
                jumlah: '60.000.000',
                fa: 'fa fa-book',
                side: 'success'
            },
            {
                nama: 'Total Kredit',
                jumlah: '10.000.000',
                fa: 'fa fa-credit-card',
                side: 'warning'
            },
            {
                nama: 'Total Debit',
                jumlah: '10.000.000',
                fa: 'fa fa-credit-card',
                side: 'danger'
            }
        ]
    )
    return (
        <div className="container-fluid cardContainter">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Raja Koperasi</h1>
            </div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}

                {card.map((e) => {
                    return (
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${e.side} shadow h-100 py-2 cardDashboard`}>
                                <div className="card-body cardRow">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{e.nama}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{e.jumlah}</div>
                                        </div>
                                        <div className="col-auto cardImg">
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
