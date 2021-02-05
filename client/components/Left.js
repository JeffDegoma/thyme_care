import React from 'react'
import styled from 'styled-components'
import health from '../assets/icons/health.svg'
import {mediaQueries} from '../reusable/global'


const LeftContent = styled.div`
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${props => props.theme.primary.color};
    align-items: center;

    img {
        height: 72%;
    }

    h2 {
        color: #F7CBBF;
        font-size: 36px;
        line-height: 2.9rem;
    }
    .headline {
        width: 50%;
        width: 35rem;
        padding-left: 11px;
    }
    ${mediaQueries('mobileL')`
        display: none;
    `}
`

const Left = () => {
    return (
        <LeftContent>
            <img src={health} alt=""/>
            <div className="headline"><h2>Cancer can be complicated. That’s why we’re here.</h2></div>
        </LeftContent>
    )
}

export default Left