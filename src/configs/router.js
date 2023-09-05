import { Navigate, useRoutes } from 'react-router-dom'
import IntroPage from '../pages/IntroPage'
import RegistrationPage from '../pages/RegistrationPage'

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <IntroPage />,
        },
        {
            path: '/registration',
            element: <RegistrationPage />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ])

    return routes
}

export default Router
