import React from 'react'
import styled from 'styled-components'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

function Profile() {
    return (
        <Container>
            <Box>
                <UserImg src="/images/profile-pic.jpg" />
                <SubscriptionsIcon />
                <span>38.2K</span>
                <FavoriteIcon />
                <span>10M</span>
                <PublishIcon />
                <span>Upload</span>
                <SignUp>
                    Dashboard
                </SignUp>
            </Box>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    position: absolute;
    left: 40%;
    top: 20%;
    width:20%;
    padding: 10px;
    height: 50%;
    border: 2px solid gray;
    border-radius: 5px;
`

const Box = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    gap: 10px;
    align-items: center;
`

const UserImg = styled.img`
    width : 90px;
    height : 90px;
    border-radius : 50%;
    cursor: pointer;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight:bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size:18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom:12px;
    &:hover{
        background: #0483ee
    }
`