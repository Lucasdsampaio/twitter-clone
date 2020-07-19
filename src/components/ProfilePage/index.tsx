import React from 'react'
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'
import Feed from '../Feed'

const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            
            <ProfileData>
                <EditButton outline >Editar perfil</EditButton>

                <h1>Lucas Sampaio</h1>
                <h2>@lucas_sampaio  </h2>

                <p>
                    Data Engineer at <a>@GrupoZAP</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 01 de janeiro de 1900
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>0 </strong>
                    </span>
                    <span>
                        <strong>0 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed/>
        </Container>
    )
}

export default ProfilePage