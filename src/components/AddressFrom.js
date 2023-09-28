import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import {
    Select,
    ThemeProvider,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material'
import FileUploadButton from './FileUploadButton'
import { RTL, theme } from './Rtl'
import { useDataContext } from '../hooks/UseDataHook'

export default function AddressFrom() {
    const { data, setData } = useDataContext()

    const [imagePrev, setImagePrev] = useState('')

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target
        if (files && files.length > 0) {
            const file = files[0]
            const imageUrl = URL.createObjectURL(file)
            setImagePrev(imageUrl)
        }

        setData((prevData) => {
            if (type === 'checkbox') {
                return {
                    ...prevData,
                    step1: {
                        ...prevData.step1,
                        [name]: checked,
                    },
                }
            } else if (type === 'file') {
                if (files && files.length > 0) {
                    const file = files[0]
                    return {
                        ...prevData,
                        step1: {
                            ...prevData.step1,
                            image: file,
                        },
                    }
                }
            } else {
                return {
                    ...prevData,
                    step1: {
                        ...prevData.step1,
                        [name]: value,
                    },
                }
            }
        })
    }

    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <FormControl dir="rtl" onChange={handleInputChange}>
                    <Typography
                        dir="ltr"
                        variant="h5"
                        textAlign={'center'}
                        gutterBottom
                    >
                        بيانات الشخصية
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                اسم الطالب الثلاثي ( وفق البطاقة المدنية)
                            </Typography>
                            <TextField
                                required
                                id="Name"
                                name="name"
                                label="اسم الطالب الثلاثي"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                الرقم الجامعي (ادخال الرقم بشكل صحيح ويكون
                                الادخال بالأرقام الانجليزية)
                            </Typography>
                            <TextField
                                required
                                id="uniNumber"
                                name="uniNumber"
                                label=" الرقم الجامعي"
                                helperText="الرجاء إدخال رقم أكبر من 2000000000"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                (رقم فعال وتأكد من ادخال الرقم بشكل صحيح ويكون
                                الادخال بالأرقام الانجليزية) رقم الهاتف النقال
                                اختياري وليس إلزاميا
                            </Typography>
                            <TextField
                                required
                                type="number"
                                id="mobiles"
                                helperText="الرجاء إدخال رقم أكبر من 10000000"
                                name="mobile"
                                label="النقال "
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                البريد الالكتروني
                            </Typography>
                            <TextField
                                required
                                id="email"
                                type="email"
                                name="email"
                                label=" البريد الالكتروني الجامعي"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                الوحدات المجتازة
                            </Typography>
                            <TextField
                                required
                                id="finishedCredits"
                                name="finishedCredits"
                                helperText="يجب أن تكون القيمة رقما"
                                label="عدد الوحدات المجتازة "
                                type="number"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                للفصل
                            </Typography>
                            <FormControl
                                variant="standard"
                                fullWidth
                                sx={{ m: 1 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    للفصل القادم
                                </InputLabel>
                                <Select
                                    onChange={handleInputChange}
                                    labelId="demo-simple-select-standard-label"
                                    id="semester"
                                    name="semester"
                                    value={data.step1.semester}
                                    fullWidth
                                >
                                    <MenuItem value={1}>الأول</MenuItem>
                                    <MenuItem value={2}>الثاني</MenuItem>
                                    <MenuItem value={3}>الصيفي</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            العام الدراسي
                            <TextField
                                required
                                id="fall"
                                value={data.step1.fall}
                                name="fall"
                                readOnly
                                label="للعام الدراسي "
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography color="black" variant="body2">
                                عدد الوحدات التي ترغب بتسجيلها
                            </Typography>
                            <TextField
                                required
                                type="number"
                                id="credits"
                                name="credits"
                                label="عدد الوحدات"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            position="relative"
                            top={'30px'}
                            sm={6}
                        >
                            <FileUploadButton />
                        </Grid>
                        <Grid item xs={12} textAlign={'right'} top={'10px'}>
                            {data.step1?.image && (
                                <img
                                    style={{ marginRight: '20px' }}
                                    height={'auto'}
                                    width={'50px'}
                                    src={imagePrev}
                                    alt="Selected"
                                />
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                marginTop="20px "
                                variant="h5"
                                textAlign={'center'}
                            >
                                عنوان السكن
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                variant="standard"
                                fullWidth
                                sx={{ m: 1 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    المحافظة
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="governor"
                                    onChange={handleInputChange}
                                    name="governor"
                                    fullWidth
                                    value={data.step1?.governor}
                                    label="المحافظة"
                                >
                                    <MenuItem value={1}>
                                        محافظة العاصمة
                                    </MenuItem>
                                    <MenuItem value={2}>محافظة حولي</MenuItem>
                                    <MenuItem value={3}>
                                        محافظة الأحمدي
                                    </MenuItem>
                                    <MenuItem value={4}>
                                        محافظة الجهراء
                                    </MenuItem>
                                    <MenuItem value={5}>
                                        محافظة الفروانية
                                    </MenuItem>
                                    <MenuItem value={6}>
                                        محافظة مبارك الكبير
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="المنطقة"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="block"
                                name="block"
                                label="القطعة"
                                type="number"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="street"
                                name="street"
                                label="الشارع"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="house"
                                name="house"
                                type="number"
                                label="منزل"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        required
                                        id="acceptEntry"
                                        name="acceptEntry"
                                        checked={data.step1.acceptEntry}
                                        color="secondary"
                                    />
                                }
                                label="اقر بصحة جميع البيانات المرفقة من قبل و أنه في حال عدم صحة البيانات فإنه يترتب عليه عدم النظر في الطلب"
                            />
                        </Grid>
                    </Grid>
                </FormControl>
            </ThemeProvider>
        </RTL>
    )
}
