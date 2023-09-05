import { createContext, useContext, useState } from 'react'

const MyContext = createContext()

export const useDataContext = () => useContext(MyContext)

export const UseDataHookProvider = ({ children }) => {
    const yearRange = `${new Date().getFullYear()} / ${
        new Date().getFullYear() + 1
    } `
    const [data, setData] = useState({
        step1: {
            uniNumber: '',
            name: '',
            email: '',
            mobile: '',
            credits: 0,
            semester: '',
            finishedCredits: 0,
            city: '',
            block: 0,
            street: '',
            house: '',
            image: '',
            acceptEntry: false,
            governor: '',
            fall: yearRange,
        },
        step2: {
            reason: '',
            subjects: [],
        },
    })

    const value = {
        data,
        setData,
    }

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
