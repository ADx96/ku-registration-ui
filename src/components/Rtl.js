import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { createTheme } from '@mui/material'

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})

export const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
})

export function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
}
