import React from 'react'
import { Input } from "../form-fields/Input"
import { RadioInput } from '../form-fields/RadioInput'

export const FormControl = (props) =>{
    const { control, ...rest } = props

    switch (control){
        case 'input' : return <Input {...rest} />
        case 'radio' : return <RadioInput {...rest} />
        default : return null
    }


}

export default FormControl;