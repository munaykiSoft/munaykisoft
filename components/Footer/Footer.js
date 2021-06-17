import React from 'react';
import { FormGroup } from '../components/FormGroup';
import { InputGroup } from '../components/InputGroup';
import { TextareaGroup } from '../components/TextareaGroup';
import { Button } from '../components/Button';


export const Footer = () => {
    return (
        <footer className="bg-quarter-500 py-6">
            <div>
                <h2 className="text-terciary text-center">Cuentanos</h2>
                <p className="text-terciary text-center">Los campos marcados 
                    <span className="text-red-600"> * </span> son 
                    <span className="text-primary"> obligatorios </span>
                </p>
            </div>


            <div className="row m-4 p-4 bg-quarter-300">
                <FormGroup horizontal>
                    <InputGroup label="¿Cómo te llamas? *" type="text" color="text-white" bold/>
                    <InputGroup label="¿En qué ciudad vives? *" type="text" color="text-white" bold/>
                </FormGroup>
                <FormGroup horizontal>
                    <InputGroup label="¿Cuál es tu correo electrónico? *" type="text" color="text-white" bold/>
                    <InputGroup label="¿A qué número te podemos llamar? *" type="text" color="text-white" bold/>
                </FormGroup>
                <FormGroup>
                    <TextareaGroup label="¿Cuéntanos cuál es tu necesidad? *" color="text-white" bold/>
                </FormGroup>
                <FormGroup>
                    <Button text="Enviar mensaje" type="primary"/>
                </FormGroup>
            </div>

        </footer>
    )
}

