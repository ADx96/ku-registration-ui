import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Typography
                fontSize={'20px'}
                size="medium"
                variant="body2"
                color="black"
                align="center"
            >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{ paddingRight: '5px' }}
                    >{`©${new Date().getFullYear()}`}</div>
                    {'حقوق النشر جامعة الكويت للدراسات الإسلامية'}
                </div>
            </Typography>
        </div>
    )
}

export default Footer
