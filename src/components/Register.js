import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormControl from './FormikControl';

export const Register = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is Required')
    })   

    const onSubmit = (values) => {
        console.log('Form Data ', values);
    }

    return (
        <>
            <div>
                <div className="d-block">
                    <h2>Register</h2>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => (
                            <Form>
                                <FormControl 
                                control='input' 
                                type='email'
                                label='Email' 
                                name='email'/>

                                <FormControl
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                                />

                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </>
    )
}