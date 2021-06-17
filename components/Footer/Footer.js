import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-quarter-500 py-6">
            <div>
                <h2 className="text-terciary text-center">Cuentanos</h2>
                <p className="text-terciary text-center">Los campos marcados <span className="text-red-600"> * </span> son <span className="text-primary"> obligatorios </span></p>
            </div>

            <div className="row m-4 py-4 bg-quarter-300">
                <div >
                    <div className="col flex-wrap mx-4 py-2">
                        <label className="text-terciary"> Como te llamas? <span className="text-red-600">*</span></label>
                        <input></input>
                    </div>
                    <div className="col flex-wrap mx-4 py-2">
                        <label className="text-terciary"> En que ciudad vives? <span className="text-red-600">*</span></label>
                        <input></input>
                    </div>
                </div>

                <div>
                    <div className="col flex-wrap mx-4 py-2">
                        <label className="text-terciary"> Cual es tu correo electronico? <span className="text-red-600">*</span></label>
                        <input ></input>
                    </div>
                    <div className="col flex-wrap mx-4 py-2">
                        <label className="text-terciary"> Cuentanos cual es tu necesidad? <span className="text-red-600">*</span></label>
                        <input></input>
                    </div>
                </div>
            </div>

        </footer>        
    )
}

