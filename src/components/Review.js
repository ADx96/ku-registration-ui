import * as React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import { useDataContext } from '../hooks/UseDataHook'
import { ThemeProvider } from '@mui/material'
import { RTL, theme } from './Rtl'

export default function Review() {
    const { data } = useDataContext()

    const Step1UserDetails = [
        {
            name: 'اسم  الطالب /الطالبة',
            value: data.step1.name,
        },
        {
            name: 'الرقم الجامعي',
            value: data.step1.uniNumber,
        },
        {
            name: 'البريد الالكتروني الجامعي',
            value: data.step1.email,
        },
        {
            name: 'النقال',
            value: data.step1.mobile,
        },
    ]

    const Step1UserAddress = [
        {
            name: 'المحافظة',
            value: data.step1.governor,
        },
        {
            name: 'المنطقة',
            value: data.step1.city,
        },
        {
            name: 'القطعة',
            value: data.step1.block,
        },
        {
            name: 'الشارع',
            value: data.step1.street,
        },
    ]

    const Step2UserCourse = [
        {
            name: 'عدد الوحدات',
            value: data.step1.credits,
        },
        {
            name: 'للعام الدراسي ',
            value: data.step1.fall,
        },
        {
            name: 'الوحدات المجتازة',
            value: data.step1.finishedCredits,
        },
        {
            name: 'سبب الرغبة بالتسجيل',
            value: data.step2.reason,
        },
    ]

    console.log(data.step2.subjects)

    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <Typography
                    fontWeight={'700'}
                    textAlign={'center'}
                    variant="h6"
                    gutterBottom
                >
                    مراجعة الطلب
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={5}>
                        <Typography
                            fontWeight={'700'}
                            variant="h6"
                            gutterBottom
                            sx={{ mt: 2 }}
                        >
                            عنوان السكن
                        </Typography>
                        {Step1UserAddress.map((data, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={6}>
                                    <Typography fontSize="16px" gutterBottom>
                                        {data.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {data.value}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <List disablePadding>
                            {Step1UserDetails.map((data, index) => (
                                <ListItem key={index} sx={{ py: 1, px: 0 }}>
                                    <ListItemText
                                        primary={data.name}
                                        secondary={data.value}
                                    />
                                </ListItem>
                            ))}
                            <ListItem sx={{ py: 2, px: 0 }}>
                                <img
                                    width="60px"
                                    height="auto"
                                    src={
                                        data.step1?.image &&
                                        URL.createObjectURL(data.step1?.image)
                                    }
                                    alt="id"
                                />
                                <ListItemText primary="تحميل صورة البطاقة المدنية المدنية" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item container direction="column" xs={12}>
                        <Typography
                            fontWeight={'700'}
                            variant="h5"
                            textAlign={'center'}
                            gutterBottom
                            sx={{ mt: 2, mb: 5 }}
                        >
                            المقرر
                        </Typography>
                        <Grid container>
                            {Step2UserCourse.map((data, index) => (
                                <React.Fragment key={index}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>
                                            {data.value}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            fontSize="16px"
                                            fontWeight={'700'}
                                            gutterBottom
                                        >
                                            {data.name}
                                        </Typography>
                                    </Grid>
                                </React.Fragment>
                            ))}

                            <Grid marginTop={'10px'} item xs={12}>
                                <Typography
                                    fontSize="16px"
                                    fontWeight={'700'}
                                    textAlign={'end'}
                                    gutterBottom
                                    mb={'20px'}
                                >
                                    {'المقررات المراد التسجيل بها'}
                                </Typography>
                                <List>
                                    {data.step2.subjects.map((subj, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={`${index + 1}. ${
                                                    subj.inputValue
                                                }`}
                                                secondary={subj.inputValue2}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </RTL>
    )
}
