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
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is Required')
    })

    const onSubmit = (values) => {
        console.log('Form Data', values)
    }

    return (
        <>

            <div>
                <div className="d-block">
                    <h2>Login</h2>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => (
                            <Form>
                                <FormControl control='input' type='email' name='email' label='Email' />
                                <FormControl control='input' type='password' name='password' label='Password' />
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </>
    )
}