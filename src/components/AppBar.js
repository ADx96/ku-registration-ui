import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import { Grid, Typography } from '@mui/material'

const TopAppBar = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar
                color="default"
                position="relative"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <img
                            src={'/assets/logo.png'}
                            width={'50px'}
                            height={'auto'}
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            variant="h5"
                            fontWeight={'500'}
                            size="medium"
                            color="black"
                            align="center"
                        >
                            جـــــامــــعــــة الــــــــكـــــــويـــــــــت
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight={'500'}
                            size="medium"
                            color="black"
                            align="center"
                        >
                            كلية الشريعة والدرسات الاسلامية
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}

export default TopAppBar
