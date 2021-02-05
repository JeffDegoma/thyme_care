import React from 'react'
import regeneratorRuntime from "regenerator-runtime"
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axios from 'axios'



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

const Step1 = () => {
    const history = useHistory()

    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
        // resolver: yupResolver(schema)
    })


    //react hook form
    //pass into handleSubmit
    //data is input
    const onSubmit = async(data) => {
        await axios.post('/api/form/signup', data)
        .then(res => {
            console.log(res.data)
            history.push('/step2')
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
            </Form>
        </Right>
        </>
    )
}

export default Step1
