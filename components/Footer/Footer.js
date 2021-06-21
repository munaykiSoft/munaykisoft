import React, { useState } from 'react';
import { FormGroup } from '../components/FormGroup';
import { InputGroup } from '../components/InputGroup';
import { TextareaGroup } from '../components/TextareaGroup';
import { Button } from '../components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { contactApi } from '../../api/contact';

export const Footer = () => {
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            setLoading(true);
            const response = await contactApi(values);
            resetForm({});
            setLoading(false);
        },
    });

    const { handleSubmit, handleChange, errors } = formik;
    const { name, city, mobile, email, description } = formik.values;

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
                <form onSubmit={handleSubmit}>
                    <FormGroup horizontal>
                        <InputGroup 
                            name="name"
                            value = { name || '' } 
                            label="¿Cómo te llamas? *" 
                            type="text" 
                            color="text-white" 
                            bold 
                            onChange={handleChange} 
                            // errorText={errors.name} 
                            error={ errors.name }
                        />
                        <InputGroup 
                            name="city" 
                            value = { city || '' } 
                            label="¿En qué ciudad vives? *" 
                            type="text" 
                            color="text-white" 
                            bold 
                            onChange={handleChange} 
                            // errorText={errors.city} 
                            error={ errors.city }
                        />
                    </FormGroup>
                    <FormGroup horizontal>
                        <InputGroup 
                            name="email" 
                            value = { email || '' } 
                            label="¿Cuál es tu correo electrónico? *" 
                            type="text" 
                            color="text-white" 
                            bold 
                            onChange={handleChange}
                            error = { errors.email} 
                        />
                        <InputGroup 
                            name="mobile" 
                            value = { mobile || '' } 
                            label="¿A qué número te podemos llamar? *" 
                            type="text" 
                            color="text-white" 
                            bold 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextareaGroup 
                            name="description"
                            value = { description || '' }  
                            label="¿Cuéntanos cuál es tu necesidad? *" 
                            color="text-white" 
                            bold 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>

                        {
                            loading ? (
                                // <h1>Enviando</h1>
                                <Button text="Enviando" type="primary" disabled />
                            ):(
                                <Button text="Enviar mensaje" type="primary" submit />
                            )
                        }
                        {/* <Button text="eror mensaje" type="danger" /> */}
                        {/* <Button text="Enviar mensaje" type="secondary" /> */}
                    </FormGroup>
                </form>
            </div>

        </footer>
    )
}

const initialValues = () => {
    return {
        name: '',
        city: '',
        email: '',
        mobile: '',
        description: ''
    }
}

const validationSchema = () => {
    return {
        name: Yup.string().required(true),
        city: Yup.string().required(true),
        email: Yup.string().email(true).required(true)
        // city: Yup.string().required('Ciudad es obligatorio')
    }
}

