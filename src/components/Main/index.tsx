import React from 'react'
import ProfilePage from '../ProfilePage'
import { Container, Header, BackIcon, ProfileInfo, ProfilePage, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles'

const Main = () => {
    return (
        <Container>
            <Header>
              <button>
                <BackIcon/>    
              </button>  

              <ProfileInfo>
                  <span>Lucas Sampaio</span>
                  <span>0 Tweets</span>
              </ProfileInfo>
            </Header>

            {/* <ProfilePage/> */}
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