import React from 'react'
import Register from '../components/Register'
import TopAppBar from '../components/AppBar'
import Footer from '../components/Footer'

import { UseDataHookProvider } from '../hooks/UseDataHook'

const RegistrationPage = () => {
    return (
        <>
            <TopAppBar />
            <UseDataHookProvider>
                <Register />
            </UseDataHookProvider>
            <Footer />
        </>
    )
}

export default RegistrationPage
