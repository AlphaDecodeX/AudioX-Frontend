import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
function Viewers() {
    let history = useHistory();
    const redirect = () => {
        history.push({
            pathname: "/detail"
        }
        );
    }
    return (
        <Container>
            <Wrap>
                <img src="/images/fiction.png" onClick={redirect} />
            </Wrap>
            <Wrap>
                <img src="/images/Business.png" />
            </Wrap>
            <Wrap>
                <img src="/images/Technology.png" />
            </Wrap>
            <Wrap>
                <img src="/images/Romance.png" />
            </Wrap>
            <Wrap>
                <img src="/images/History.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
border: 3px solid rgba(249, 249, 249, 0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8)
}
`