import React from 'react'
import './styles'

const ProfilePage = () => {
    return (
        <Container>
            <Bannner>
                <Avatar />
            </Bannner>
            
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Lucas Sampaio</h1>
                <h2>@lucas_sampaio  </h2>

                <p>
                    Data Engineer at <a>@GrupoZAP</a>
                </p>

                <ul>
                    <li>
                        <Location />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <Cake />
                        Nascido(a) em 01 de janeiro de 1900
                    </li>
                </ul>
            </ProfileData>
        </Container>
    )
}

export default ProfilePage