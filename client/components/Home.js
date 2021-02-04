import React from 'react'
import styled from 'styled-components'
import Left from './Left'


const HomeContent = styled.div`
    height: 100vh;
    flex: 1;
    display: flex;
`

const Home = () => {
    return (
            <HomeContent>
                <Left></Left>
            </HomeContent>
    )
}

export default Home