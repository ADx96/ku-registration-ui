import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import FileUploadButton from './FileUploadButton'
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
        <FormControl onChange={handleInputChange}>
            <Typography
                dir="ltr"
                variant="h5"
                textAlign={'center'}
                gutterBottom
            >
                بيانات الشخصية
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="uniNumber"
                        name="uniNumber"
                        label="الرقم الجامعي"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Name"
                        name="name"
                        label="  اسم  الطالب /الطالبة"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        type="email"
                        name="email"
                        label="البريد الالكتروني الجامعي"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="mobiles"
                        name="mobile"
                        label="النقال"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={4} sm={4}>
                    <TextField
                        required
                        error={data.step1.credits && data.step1.credits > 14}
                        helperText={'عدد الوحدات ييجب ان لا يكون اكثر من ١٤'}
                        type="number"
                        id="credits"
                        name="credits"
                        label="الوحدات"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={8} position={'relative'} sm={8}>
                    <Typography position={'absolute'} variant="h6" top={'50px'}>
                        عدد الوحدات المسجلة في الفصل اقل من 14 وحدة
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth sx={{ m: 1 }}>
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
                            <MenuItem value={'1'}>الأول</MenuItem>
                            <MenuItem value={'2'}>الثاني</MenuItem>
                            <MenuItem value={'3'}>الصيفي</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    <TextField
                        required
                        id="finishedCredits"
                        name="finishedCredits"
                        error={
                            data.step1.finishedCredits &&
                            data.step1.finishedCredits < 80
                        }
                        helperText={'عدد الوحدات ييجب ان تكون ٨٠ وحدة او اكثر '}
                        label="الوحدات المجتازة "
                        type="number"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} position="relative" top={'30px'} sm={6}>
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
                    <FormControl variant="standard" fullWidth sx={{ m: 1 }}>
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
                            <MenuItem value={'10'}>محافظة العاصمة</MenuItem>
                            <MenuItem value={'20'}>محافظة حولي</MenuItem>
                            <MenuItem value={'30'}>محافظة الأحمدي</MenuItem>
                            <MenuItem value={'40'}>محافظة الجهراء</MenuItem>
                            <MenuItem value={'50'}>محافظة الفروانية</MenuItem>
                            <MenuItem value={'60'}>
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
                        label="اقر بصحة جميع البيانات الواردة اعلاة من قبلي وانة في حالة عدم صحتها ، لا ينظر بالطلب"
                    />
                </Grid>
            </Grid>
        </FormControl>
    )
}
