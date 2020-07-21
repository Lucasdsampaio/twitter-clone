import React from 'react'
import { Container,
        Retweeted,
        RocketseanIcon,
        Body,
        Avatar,
        Content,
        Header,
        Dot,
        Description,
        ImageContent,
        Icons,
        Status,
        CommentIcon,
        RetweetIcon,
        LikeIcon }from './styles'

const Tweet = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseanIcon/>
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar/>
                <Content>
                    <Header>
                        <strong>Rocketsean</strong>
                        <span>@rocketseat</span>

                        <Dot />
                        <time>27 de jun</time>
                    </Header>

                    <Description>Foguete não da ré </Description>
                    <ImageContent/>

                    <Icons>
                        <Status>
                            <CommentIcon/>
                            18
                        </Status>
                        <Status>
                            <RetweetIcon/>
                            20
                        </Status>
                        <Status>
                            <LikeIcon/>
                            999
                        </Status>
                    </Icons>
                </Content>

            </Body>
        </Container>
    )
}

export default Tweet