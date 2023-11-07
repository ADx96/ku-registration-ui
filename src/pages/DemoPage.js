import {
    Box,
    Button,
    Container,
    TextField,
    Alert,
    IconButton,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { useNavigate } from 'react-router-dom'
import WarningIcon from '@mui/icons-material/Warning'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const DemoPage = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [alert, showAlert] = useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        console.log(data)
        e.preventDefault()

        if (
            data.email === 'abdulrazaq.alajeel@ku.edu.kw' &&
            data.password === 'Kuwait2000'
        ) {
            navigate('/registration')
        } else {
            showAlert(true)
        }
    }

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
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
                    <Box
                        component="form"
                        onChange={handleInputChange}
                        onSubmit={handleClick}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            value={data.email}
                            label="البريد الاكتروني الجامعس"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={data.password}
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
            {alert && (
                <Alert
                    sx={{ alignItems: 'flex-start' }}
                    startDecorator={<WarningIcon />}
                    variant="soft"
                    color={'danger'}
                    endDecorator={
                        <IconButton variant="soft" color={'danger'}>
                            <CloseRoundedIcon />
                        </IconButton>
                    }
                >
                    <div>
                        <div>حدث خطآ</div>
                        <Typography level="body-sm" color={'danger'}>
                            البريد او رقم السري غير صحيح
                        </Typography>
                    </div>
                </Alert>
            )}
        </>
    )
}

export default DemoPage
