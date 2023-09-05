import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddressForm from './AddressFrom'

import PaymentForm from './PaymentForm'
import Review from './Review.js'
import { useDataContext } from '../hooks/UseDataHook'
import CircleSuccess from './icons/CircleSuccess'
import '../styles/SuccessCheck.css'
import { Instance } from '../api/Instance'

const steps = ['بيانات الطالب', 'المقرر', 'تاكيد الطلب']

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />
        case 1:
            return <PaymentForm />
        case 2:
            return <Review />
        default:
            throw new Error('Unknown step')
    }
}

export default function Register() {
    const { data } = useDataContext()

    const [activeStep, setActiveStep] = React.useState(0)
    const [orderNum, setOrderNum] = React.useState('')

    const areObjectPropertiesNotEmptyStrings = (obj) =>
        Object.values(obj).every((value) => {
            if (typeof value === 'string') {
                return value.trim() !== ''
            }
            return true
        })

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const CheckStepOne = () =>
        areObjectPropertiesNotEmptyStrings(data.step1) &&
        +data.step1.finishedCredits >= 80 &&
        +data.step1.credits < 14 &&
        data.step1.acceptEntry === true

    const CheckStepTwo = () =>
        data.step2.reason && data.step2.subjects.length >= 1

    const generateRandomOrderNumber = () => {
        const min = 1000000
        const max = 9999999
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        setOrderNum(`${randomNumber}#`)
        return `${randomNumber}`
    }

    const postDataAdress = async (submitData) => {
        try {
            const { data } = await Instance.post(
                '/registration-adresses',
                submitData
            )
            return data.data.id
        } catch (error) {
            console.error('Error:', error)
            // Handle the error here
        }
    }

    const postDataSubject = async (submitData) => {
        try {
            const { data } = await Instance.post(
                '/registration-subjects',
                submitData
            )
            return data.data.id
        } catch (error) {
            console.error('Error:', error)
            // Handle the error here
        }
    }

    const postDataRegistration = async (submitData) => {
        try {
            const { data } = await Instance.post('/registrations', submitData)
            return data
        } catch (error) {
            console.error('Error:', error)
            // Handle the error here
        }
    }

    const uploadFile = async (submitData) => {
        const formData = new FormData()
        formData.append('files', submitData)
        try {
            const { data } = await Instance.post('/upload', formData)
            return data[0].id
        } catch (error) {
            console.error('Error:', error)
            // Handle the error here
        }
    }

    const adressData = {
        data: {
            city: data.step1.city,
            block: data.step1.block,
            street: data.step1.street,
            house: data.step1.house,
            governor: data.step1.governor,
        },
    }

    const subjectData = {
        data: {
            credits: data.step1.credits,
            semester: data.step1.semester,
            finishedCredits: data.step1.finishedCredits,
            reason: data.step2.fall,
            subjects: data.step2.subjects,
            fall: data.step1.fall,
        },
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const orderNumber = generateRandomOrderNumber()
        try {
            const AdressId = await postDataAdress(adressData)
            const SubjectId = await postDataSubject(subjectData)
            const imageId = await uploadFile(data.step1.image)

            const finalData = {
                data: {
                    orderNumber: orderNumber,
                    UniId: data.step1.uniNumber,
                    name: data.step1.name,
                    email: data.step1.email,
                    mobile: data.step1.mobile,
                    image: imageId,
                    registrationAdress: AdressId,
                    registrationSubject: SubjectId,
                },
            }

            if (AdressId && SubjectId && imageId && orderNumber) {
                await postDataRegistration(finalData)
                handleNext()
            }
        } catch (err) {
            console.error(err)
        }
    }

    const isFormComplete = async (e) => {
        e.preventDefault()
        if (CheckStepOne()) {
            return handleNext()
        }

        if (CheckStepTwo()) {
            return handleNext()
        }
    }

    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        التسجيل
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <div style={{ direction: 'rtl' }}>
                            <Typography
                                fontWeight={'600'}
                                variant="h5"
                                gutterBottom
                            >
                                شكرا لطلبك
                            </Typography>
                            <Typography variant="h5">
                                {`رقم طلبك هو ${orderNum} 
                        لقد أرسلنا تأكيد طلبك عبر البريد الإلكتروني، وسوف نرسل لك تحديثًا عند طلبك `}
                            </Typography>
                            <CircleSuccess />
                        </div>
                    ) : (
                        <form>
                            {getStepContent(activeStep)}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBack}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        الرجوع
                                    </Button>
                                )}
                                {activeStep === 2 && (
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                        disabled={
                                            (!CheckStepOne() &&
                                                activeStep === 0) ||
                                            (!CheckStepTwo() &&
                                                activeStep === 1)
                                        }
                                        type="submit"
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        اعتماد الطلب'
                                    </Button>
                                )}

                                {activeStep !== 2 && (
                                    <Button
                                        variant="contained"
                                        onClick={isFormComplete}
                                        disabled={
                                            (!CheckStepOne() &&
                                                activeStep === 0) ||
                                            (!CheckStepTwo() &&
                                                activeStep === 1)
                                        }
                                        type="submit"
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        التالي
                                    </Button>
                                )}
                            </Box>
                        </form>
                    )}
                </Paper>
            </Container>
        </React.Fragment>
    )
}
