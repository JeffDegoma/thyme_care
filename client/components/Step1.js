import React from 'react'
import regeneratorRuntime from "regenerator-runtime"
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'


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

const Step1 = () => {

    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
        // resolver: yupResolver(schema)
    })

    //pass into handleSubmit
    //data is input
    const onSubmit = async(data) => {
        console.log(data)
        await axios.post('http://localhost:3500/api/form/signup', data)
        .then(res => {
            console.log(res.data)
        })

        
    }
    return (
        <>
        <Home></Home>
           <Right>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <Input ref={register({
                })}
                    type="text"
                    name="firstName"
                    label="First Name"
                >
                    <AccountCircle/>
                </Input>
                {/* email */}
                <Input 
                    ref={register({})}
                    label="Email"
                    name="email"
                    type="email"
                >
                    <EmailIcon/>
                </Input>
                {/* password */}
                <Input 
                    ref={register({})}
                    label="Password"
                    name="password"
                    id="filled-password-input"
                    type="password"
                    inputProps = {{ //pass as inputProps
                        endAdornment: (
                        <InputAdornment position="end">
                            <Visibility style={{cursor: 'pointer'}}/>
                        </InputAdornment>
                        ),
                    }}
                >
                    <LockIcon/>
                </Input>
                <Button className="create-account">Create Account</Button>
            </Form>
        </Right>
        </>
    )
}

export default Step1