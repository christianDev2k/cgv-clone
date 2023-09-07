import { RouteObject } from 'react-router-dom';
// ~
import { AuthLayout, MainLayout } from 'components';
import { PATH } from 'constant';
import { Home, Login, Register } from 'pages';

const router: RouteObject[] = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.register,
                element: <Register />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: PATH.home,
                element: <Home />,
            },
        ],
    },
];

export default router;
