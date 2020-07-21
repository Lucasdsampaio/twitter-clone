import React from 'react'
import Button from '../Button'
import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, BottomSide, Avatar, ProfileData, ExitIcon } from './styles'

const MenuBar = () => {
    return (
        <Container>
            <Topside>
                <Logo/>

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>
            
                <MenuButton>
                    <BellIcon />
                    <span>Nofiticações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Menssagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favorito</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button outline={false} >
                    <span>Tweetar</span>
                </Button>
            </Topside>

            <BottomSide>
                <Avatar/>
                <ProfileData>
                    <strong>Lucas Sampaio</strong>
                    <span>@lucas_sampaio</span>
                </ProfileData>
                <ExitIcon/>
            </BottomSide>
        </Container>
    )
}

export default MenuBar
