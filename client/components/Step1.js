import React from 'react'
import regeneratorRuntime from "regenerator-runtime"
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

//Components
import {mediaQueries} from '../reusable/global'
import FlexDiv from '../reusable/Flex';
import altSignup from '../assets/icons/altSignup.svg'
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


const AltSignup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    p, a {
        color: #454545;
        margin-top: 2rem;
    }
    button {
        ${mediaQueries('mobileL')`
            width: 12rem;
            font-size: 10px;
        `}
        
        background: #D7E8F4;
        font-size: 14px;
        border-radius: 30px;
    }

    img {
        ${mediaQueries('mobileL')`
            left: 16%;
        `}
        width: 7%;
        top: 10%;
        position: absolute;
        left: 5%;
    }
    
`
const or = '__________' + '\xa0\xa0\xa0\ or \xa0\xa0\xa0\xa0' + '__________';

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`

//yup to validate inputs
const schema = yup.object().shape({
    fullName: yup
        .string()
        .required('Your full name is required.'),
    email: yup
        .string()
        .required('An email is required.'),
    password: yup
        .string()
        .required('A password is required.')
})

const Step1 = () => {

    //react router dom
    const history = useHistory()
    //react hook form
    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })


    
    //pass into handleSubmit
    //data is user input
    const onSubmit = async(data) => {
        await axios.post('http://localhost:3500/api/form/signup', data) // change back to -> /api/form/signup
        .then(res => {
            if(res.data['server-errors']){
                res.data['server-errors'].forEach(error => {
                   console.log(error.message)
                })
            }
            history.push('/step2') //go to next step
        })
    }
    return (
        <>
        <Home></Home>
           <Right>
               <FlexDiv justifyCenter>
                <AltSignup className="alt-signup">
                        <img src={altSignup} alt=""/>
                        <Button width="large" height="large"><a href="">Sign up with Google</a></Button>
                        <p>{or}</p>
                    </AltSignup>
                </FlexDiv>            
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <Input ref={register({
                })}
                    type="text"
                    name="fullName"
                    label="Full Name"
                    errors={!! errors.fullName}
                    helperText={errors?.fullName?.message}
                >
                    <AccountCircle/>
                </Input>
                {/* email */}
                <Input 
                    ref={register({})}
                    label="Email"
                    name="email"
                    type="email"
                    errors={!! errors.email}
                    helperText={errors?.email?.message}
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
                    errors={!! errors.password}
                    helperText={errors?.password?.message} //chain yup schema
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
            </Form>
            <Bottom>
                <a href="">Already have an account?</a>
            </Bottom>
        </Right>
        </>
    )
}

export default Step1