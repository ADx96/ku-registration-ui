import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {
    Select,
    MenuItem,
    List,
    ListItemText,
    IconButton,
    ListItem,
    ThemeProvider,
    TextField,
    FormControl,
    InputLabel,
    Button,
    Radio,
    FormControlLabel,
    FormLabel,
    RadioGroup,
} from '@mui/material'
import { useDataContext } from '../hooks/UseDataHook'
import { Delete } from '@mui/icons-material'
import { RTL, theme } from './Rtl'

export default function PaymentForm() {
    const { data, setData } = useDataContext()
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')

    const [text, setText] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleInputValue2 = (e) => {
        setInputValue2(e.target.value)
    }

    const handleAddItem = () => {
        if (inputValue && inputValue2) {
            const newItem = { inputValue, inputValue2 }
            setText((prevItems) => [...prevItems, newItem])
            setInputValue('')
            setInputValue2('')
            setData((prevData) => ({
                ...prevData,
                step2: {
                    ...prevData.step2,
                    subjects: [...prevData.step2.subjects, newItem],
                },
            }))
        }
    }

    const handleRemoveItem = (index) => {
        const updatedItems = text.filter((_, i) => i !== index)
        setText(updatedItems)

        setData((prevItems) => ({
            ...prevItems,
            step2: {
                ...prevItems.step2,
                subjects: updatedItems,
            },
        }))
    }

    const handleInputData = (e) => {
        const { name, value } = e.target

        setData((prevItems) => ({
            ...prevItems,
            step2: {
                ...prevItems.step2,
                [name]: value,
            },
        }))
    }

    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <FormControl dir="rtl">
                    <Typography
                        dir="ltr"
                        style={{ marginBottom: '20px' }}
                        variant="h5"
                        textAlign={'center'}
                        gutterBottom
                    >
                        المقرر
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    هل تسمح بتسجيلك بشعبة مختلفة لنفس المقرر
                                    الذي تريده؟
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    value={data.step2.allowOther}
                                    onChange={handleInputData}
                                    name="allowOther"
                                >
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label="نعم، أسمح إذا الشعبة التي أريدها لا يمكن التسجيل فيها مطلقاس"
                                    />
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio />}
                                        label="لا، حتى وان ترتب على ذلك عدم اكتمال جدولي"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontWeight={'600'} variant="h6">
                                رقم المقرر والشعبة بالأولوية الأولى الذي ترغب
                                بالتسجيل فيه
                            </Typography>
                            <Typography
                                mt={'20px'}
                                color="black"
                                variant="body2"
                            >
                                يرجى إدخال رقم المقرر المتكون من 7 ارقام + رقم
                                الشعبة مثل ما هو مسجل في السيستم كمثال 093011051
                                ويجب إدخال الرقم باللغة الإنجليزية،
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                onChange={handleInputChange}
                                id="subjects"
                                value={inputValue}
                                label="المقررات المراد التسجيل بها"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                onChange={handleInputValue2}
                                id="subjects"
                                value={inputValue2}
                                label="رقم المقررات "
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={handleAddItem}
                                variant="contained"
                                sx={{ mt: 3, ml: 1 }}
                            >
                                اضافة
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                sx={{ mt: 4, mb: 2 }}
                                variant="h6"
                                component="div"
                            >
                                المقررات المضافة
                            </Typography>
                            {text?.map((data, index) => (
                                <List key={index}>
                                    <ListItem
                                        secondaryAction={
                                            <IconButton
                                                onClick={() =>
                                                    handleRemoveItem(index)
                                                }
                                                edge="end"
                                                aria-label="delete"
                                            >
                                                <Delete />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemText
                                            secondary={'المقرر'}
                                            primary={data.inputValue}
                                        />
                                        <ListItemText
                                            secondary={'رقم المقرر '}
                                            primary={data.inputValue2}
                                        />
                                    </ListItem>
                                </List>
                            ))}
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl
                                variant="standard"
                                fullWidth
                                sx={{ m: 1 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    سبب الرغبة بالتسجيل
                                </InputLabel>
                                <Select
                                    id="demo-simple-select-standard"
                                    name="reason"
                                    fullWidth
                                    value={data.step2.reason}
                                    onChange={handleInputData}
                                    label="سبب الرغبة بالتسجيل"
                                    variant="standard"
                                >
                                    <MenuItem value={1}>
                                        تعارض الوقت مع مقررات اخري
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        ظروف العمل ( ارفاق من يبن ذلك )
                                    </MenuItem>
                                    <MenuItem value={3}>سبب اخر</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid hidden={data.step2?.reason !== 3} item xs={12}>
                            <TextField
                                required
                                onChange={handleInputData}
                                id="reason"
                                name="OtherReason"
                                label="اذكر السبب "
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </FormControl>
            </ThemeProvider>
        </RTL>
    )
}
