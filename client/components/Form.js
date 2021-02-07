import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

//Components
import {mediaQueries} from '../reusable/global'
import Input from './Input'
import Button from '../reusable/Button'

//MaterialUI
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-content: center;
    height: 54vh;
    justify-content: space-evenly;
    width: 58%;
    margin-top: 1rem;
    ${mediaQueries('mobileL')`
        height: 100%;
        width: 80%;
    `}
    button {
        width: 20rem;
        ${mediaQueries('mobileM')`
            height: 4rem;
            width: 20rem;
            font-size: 20px;
            border-radius: 35px;
            margin: 2rem auto 1rem;
        `}
        ${mediaQueries('mobileS')`
            height: 4rem;
            width: 15rem;
            font-size: 20px;
            border-radius: 35px;
            margin: 2rem auto 1rem;
        `}

     
        margin: 0 auto;
        height: 14%;
        border-radius: 30px;
        color: ${props => props.theme.secondary.color};
        font-size: 26px;
        font-weight: bold;
    }
   
`
 
const Form = ({children, ...props}) => {
    const {} = useForm({
        mode: 'blur'
    })

    return (
        <>
            <FormContent {...props}>
                {children}
                <Button variant="primary" className="create-account">Create Account</Button>
            </FormContent>
        </>
    )
}

export default Form