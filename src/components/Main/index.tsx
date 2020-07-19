import React from 'react'
import ProfilePage from '../ProfilePage'
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles'

const Main = () => {
    return (
        <Container>
            <Header>
              <button>
                <BackIcon/>    
              </button>  

              <ProfileInfo>
                  <strong>Lucas Sampaio</strong>
                  <span>0 Tweets</span>
              </ProfileInfo>
            </Header>

            <ProfilePage/>
            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>
            </BottomMenu>
        </Container>
    )
}

export default Main