import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormControl } from './FormikControl';

export const LoginForm = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required')
    })

    const onSubmit = (values) => {
        console.log('Form Data', values)
    }

    return (
        <>
            <h2>Login</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            <FormControl control='input' type='email' name='email' label='Email' />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}