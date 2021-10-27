import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/LoginHomeAudioX.svg" />
                <SignUp>
                    Get In There
                </SignUp>
                <Description>
                    Create your Own World
                </Description>
                <CTALogoTwo src="/images/login-footer.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 78px);
    display:flex;
    align-items:center;
    justify-content:center;
    &:before{
        background-position: top;
        background-size: cover;
        position:absolute;
        no-repeat:fixed;
        z-index:-1;
        top:0;bottom:0;left:0;right:0;
        content:"";
        opacity: 0.7;
        background-image: url("/images/26102.jpg");  
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding:80px 40px;
    width: 90%;
    display:flex;
    flex-direction:column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
    
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

const Description = styled.p`
    font-size: 15px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`

`