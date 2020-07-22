import React from 'react'
import StickBox from 'react-sticky-box'
import { Container, SearchWrapper, SearchInput, SeachIcon, Body } from './styles'
import List from '../List'
import FollowSugestion from '../FollowSugestion'
import News from '../News'

const SideBar = () =>  {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SeachIcon/>
            </SearchWrapper>

            <StickBox>
            <Body>
                <List 
                    title="Talvez voçê curta"
                    elements={[
                        <FollowSugestion 
                            name="Luiz"
                            nickname="@luiz"
                        />,
                        <FollowSugestion 
                        name="Fernando"
                        nickname="@fernando"
                        />,
                        <FollowSugestion 
                            name="maria"
                            nickname="@maria"
                        />
                    ]}
                />
                <List 
                    title="Talvez voçê curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez voçê curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez voçê curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
            </Body>
            </StickBox>
        </Container>
    )
}

export default SideBar