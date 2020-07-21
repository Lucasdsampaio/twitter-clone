import React from 'react'
import { Container, SearchWrapper, SearchInput, SeachIcon, Body } from './styles'


const SideBar = () =>  {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SeachIcon/>
            </SearchWrapper>

            <Body>
                <p>{'Lorem ipsum dolor sis amet. '.repeat(90)}</p>
            </Body>
        </Container>
    )
}

export default SideBar