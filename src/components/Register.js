import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormControl from './FormikControl';

export const Register = () => {

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: ''
    }

    const modesOfCont = [
        { key: 'Email', value: 'emailtype' },
        { key: 'Telephone', value: 'telephoneype' }

    ]

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password Should Matched').required('Confirm the password')

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
                                    name='email' />

                                <FormControl
                                    control='input'
                                    type='password'
                                    label='Password'
                                    name='password'
                                />


                                <FormControl
                                    control='input'
                                    type='password'
                                    label='Confirm Password'
                                    name='confirmPassword'
                                />

                                <FormControl
                                    control='radio'
                                    label='Mode of Contact'
                                    name='modeOfContact'
                                    options={modesOfCont}
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