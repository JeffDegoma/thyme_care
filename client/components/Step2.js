import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'


//Components
import {mediaQueries} from '../reusable/global'
import Form from './Form'
import Home from './Home'
import Right from './Right'
import Input from './Input'
import Button from '../reusable/Button'

//MaterialUI
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const Step2 = () => {

    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
        // resolver: yupResolver(schema)
    })
    return (
        <>
        <Home></Home>
            <Right>
            <div><h1>Step 2</h1></div>
            </Right>
        </>
    )
}

export default Step2