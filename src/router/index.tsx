import { RouteObject } from 'react-router-dom';
// ~
import { CommingSoon, Home, Login, Register } from 'pages';
import { AuthLayout, MainLayout } from 'components';
import { PATH } from 'constant';
import { NowShowing } from 'pages';
import { MovieDetail } from 'pages';

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
            {
                path: PATH.nowShowing,
                element: <NowShowing />,
            },
            {
                path: PATH.commingSoon,
                element: <CommingSoon />,
            },
            {
                path: PATH.movieDetail,
                element: <MovieDetail />,
            },
        ],
    },
];

export default router;
