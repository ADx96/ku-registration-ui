import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { useNavigate } from 'react-router-dom'

const DemoPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/registration')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    يرجى اتمام عملية التحقق قبل التسجيل
                </Typography>
                <Box component="form" onSubmit={handleClick} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="البريد الاكتروني الجامعس"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="الرقم السري"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        الدخول
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default DemoPage
