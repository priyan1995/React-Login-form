import React from 'react'
import { Input } from "../form-fields/Input"

export const FormControl = (props) =>{
    const { control, ...rest } = props

    switch (control){
        case 'input' : return <Input {...rest} />
        default : return null
    }


}

export default FormControl;