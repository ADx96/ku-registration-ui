import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    position: 'relative';
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`

const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Intro = () => {
    const navigate = useNavigate()
    return (
        <>
            <BackgroundWrapper src={'/assets/background.jpg'} />
            <ButtonContainer>
                <Button
                    onClick={() => navigate('/verification')}
                    md={{ fontSize: '40px', borderRadius: '5px' }}
                    sx={{ fontSize: '30px' }}
                    size="large"
                    variant="contained"
                >
                    ابدا التسجيل
                </Button>
            </ButtonContainer>
        </>
    )
}

export default Intro
