import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormControl from './FormikControl';

export const Register = () => {

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const modesOfCont = [
        { key: 'Email', value: 'emailtype' },
        { key: 'Telephone', value: 'telephoneype' }

    ]

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password Should Matched').required('Confirm the password'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephoneype',
            then: Yup.string().required('Please add phone number')
        })

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

                                <FormControl 
                                control='input'
                                type='text'
                                label='Phone'
                                name='phone'
                                />

                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </>
    )
}