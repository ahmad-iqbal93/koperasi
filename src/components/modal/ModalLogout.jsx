import React from 'react'

const ModalLogout = ({ idLogout, ket1, ket2, button }) => {
    return (

        <div className="modal fade" id={idLogout} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{ket1}</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">{ket2}</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Batalkan</button>
                        <a className="btn btn-primary" href="login.html">{button}</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalLogout
