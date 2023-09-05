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
    TextField,
    FormControl,
    InputLabel,
    Button,
} from '@mui/material'
import { useDataContext } from '../hooks/UseDataHook'
import { Delete } from '@mui/icons-material'

export default function PaymentForm() {
    const { data, setData } = useDataContext()
    const [inputValue, setInputValue] = useState('')
    const [text, setText] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddItem = () => {
        setText((prevItems) => [...prevItems, inputValue])
        setInputValue('')
        setData((prevData) => ({
            ...prevData,
            step2: {
                ...prevData.step2,
                subjects: [...prevData.step2.subjects, inputValue],
            },
        }))
    }

    const handleRemoveItem = (index) => {
        const updatedItems = text.filter((_, i) => i !== index)
        setText(updatedItems)

        setData((prevItems) => ({
            ...prevItems,
            step2: {
                ...prevItems.step2,
                subjects: text,
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
        <div>
            <Typography variant="h6" gutterBottom>
                المقرر
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        onChange={handleInputChange}
                        name="subjects"
                        id="subjects"
                        value={inputValue}
                        label="المقررات المراد التسجيل بها"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
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
                                        onClick={() => handleRemoveItem(index)}
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <Delete />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={data} />
                            </ListItem>
                        </List>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth sx={{ m: 1 }}>
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
                            <MenuItem value={'1'}>
                                تعارض الوقت مع مقررات اخري
                            </MenuItem>
                            <MenuItem value={'2'}>
                                ظروف العمل ( ارفاق من يبن ذلك )
                            </MenuItem>
                            <MenuItem value={'3'}>سبب اخر</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid hidden={data.step2?.reason !== 3} item xs={12}>
                    <TextField
                        required
                        onChange={handleInputData}
                        id="reason"
                        name="reason"
                        label="اذكر السبب "
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
