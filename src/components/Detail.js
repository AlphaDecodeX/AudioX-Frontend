import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://images.pexels.com/photos/7322301/pexels-photo-7322301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </Background>
            <ImageTitle>
                <img src="/images/Name.png" />
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" />
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" />
                        <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        <img src="/images/Add.png" />
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/Like.png" />
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                    Black N White - Aman Chaudry` 2021
                </SubTitle>
                <Description>
                    Looking back, I should have seen it coming. Paige didn’t like that I went so far away to university. But it was going to only be for two years. She'd join me after she did her two years at community college. I thought we could swing that no problem. We were solid. But she hated the distance. She hated not seeing me ev...
                </Description>
            </ImageTitle>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw+5px);
    position: relative;
`

const Background = styled.div`
    posiiton: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    z-index: -1;
    opacity: 0.2;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 30vw;
    min-height: 170px;
    min-width: 200px;
    position: absolute;
    top:50px;
    left:50px;
    img{
        heigh: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    position: relative;
    top:10px;
    left:40px;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right: 22px;

`

const PlayButton = styled.button`
    border-radius: 4px;
    padding: 0 24px;
    cursor: pointer;
    display:flex;
    letter-spacing: 1.8px;
    align-items: center;
    background: rgb(249, 249, 249);
    border:none;
    justify-content: center;
    &:hover{
        background: rgb(198, 198, 198);    
    }
    text-transform: uppercase;
    margin-right:16px;
    `

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    text-transform: uppercase;
    margin-right:16px;
    color:white;
    `

const AddButton = styled.div`
    display:flex;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    cursor:pointer;
    background: rgba(0,0,0);
    img{
        height: 44px;
        width: 44px;
    }
    `

const GroupWatchButton = styled.div`
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
cursor:pointer;
background: rgba(0,0,0);
img{
    height: 44px;
    width: 44px;
}
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    position: absolute;
    top: 150px;left:10px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size:20px;
    position: absolute;
    top: 200px;left:10px;
    max-width: 760px;
`