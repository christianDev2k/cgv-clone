import { RouteObject } from 'react-router-dom';
// ~
import { CommingSoon, Home, Login, Register, NowShowing, MovieDetail, UpdatingPage } from 'pages';
import { AuthLayout, MainLayout } from 'components';
import { PATH } from 'constant';

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
            {
                path: PATH.updatingPage,
                element: <UpdatingPage />,
            },
        ],
    },
];

export default router;
