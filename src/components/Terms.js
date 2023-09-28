import {
    Box,
    Button,
    FormControlLabel,
    Modal,
    Typography,
    Checkbox,
} from '@mui/material'
import React, { useState } from 'react'
import data from '../data/data.json'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Terms = ({ handleStart }) => {
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}
        >
            <Button
                style={{ fontSize: '20px' }}
                size="medium"
                variant="contained"
                onClick={handleOpen}
            >
                الموافقة علي الشروط
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="keep-mounted-modal-title"
                        variant="h5"
                        component="h2"
                        textAlign={'right'}
                    >
                        نموذج باي فورس مقررات كلية الشريعة والدراسات الإسلامية
                        للطلبة المستمرين للفصل الثاني 2023م
                    </Typography>

                    <Typography
                        component="ol"
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2 }}
                        variant="body1"
                        textAlign={'right'}
                    >
                        {data.TermsAndConditions.map((data, index) => (
                            <li dir="rtl" key={index}>
                                {data}
                            </li>
                        ))}
                    </Typography>
                    <FormControlLabel
                        onChange={handleChange}
                        checked={checked}
                        control={<Checkbox />}
                        label="موافقة على الشروط"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <Button
                        onClick={handleStart}
                        disabled={!checked}
                        variant="contained"
                        size="medium"
                    >
                        التالي
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Terms
