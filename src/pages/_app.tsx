import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app'
import { lightTheme } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={ lightTheme }>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
