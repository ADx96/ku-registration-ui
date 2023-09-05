import { BrowserRouter } from 'react-router-dom'
import '../src/styles/global.css'
import Router from './configs/router'

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

export default App
