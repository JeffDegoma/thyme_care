import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../reusable/global'
import Step1 from './Step1'
import Button from '../reusable/Button'
import altSignup from '../assets/icons/altSignup.svg'


const RightContent = styled.div`
    display: flex;
    ${mediaQueries('mobileL')`
        flex: 0 0 100%;
    `}
    flex: 1;
    background: ${props => props.theme.secondary.color};
    flex-direction: column;
    a {
        padding-left: 12px;
    }
    `
    
    const Top = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        height: 12rem;
        justify-content: space-evenly;
        background: ${props => props.theme.secondary.color};
        // padding: 0 10% 0 10%;
        ${mediaQueries('mobileL')`
            // height: 70vh;

        `}


        h1 {
            color: ${props => props.theme.primary.color};
            font-size: ${props => props.theme.default.h1};
            font-weight: 300;
            ${mediaQueries('mobileL')`
                font-size: 54px;
            `}
        }
    
        h3 {
            color: ${props => props.theme.primary.color};
            font-size: ${props => props.theme.default.h3};
            font-weight: 200;
            ${mediaQueries('mobileL')`
                font-size: 20px;
            `}
        }
        // p, a {
        //     color: #454545;
        // }
        // button {
        //     ${mediaQueries('mobileL')`
        //         width: 10rem;
        //         font-size: 10px;
        //     `}
            
        //     background: #D7E8F4;
        //     font-size: 14px;
        //     border-radius: 30px;
        // }

        // .alt-signup {
        //     position: relative;
        //     img {
        //         width: 7%;
        //         top: 29%;
        //         position: absolute;
        //         left: 5%;
        //     }
        // }
    
`


const or = '__________' + '\xa0\xa0\xa0\ or \xa0\xa0\xa0\xa0' + '__________';

const Right = ({children}) => {
    return (

        <RightContent>
            <Top>
                <h1>Thyme Care</h1>
                <h3>Let's Create your Account</h3>
                {/* <div className="alt-signup">
                <img src={altSignup} alt=""/>
                <Button width="large" height="large"><a href="">Sign up with Google</a></Button>
                </div>            
                <p>{or}</p> */}
            </Top>
            {children}
          
        </RightContent>
    )
}

export default Right