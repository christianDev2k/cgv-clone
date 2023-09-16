import { RouteObject } from 'react-router-dom';
// ~
import {
    CommingSoon,
    Home,
    Login,
    Register,
    NowShowing,
    MovieDetail,
    UpdatingPage,
    Account,
    AccountDetail,
} from 'pages';
import { AccountLayout, AuthLayout, MainLayout } from 'components';
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
            {
                path: PATH.customer,
                element: <AccountLayout />,
                children: [
                    {
                        path: PATH.account,
                        element: <Account />,
                    },
                    {
                        path: PATH.accountDetail,
                        element: <AccountDetail />,
                    },
                    {
                        path: PATH.memberCard,
                        element: <UpdatingPage />,
                    },
                    {
                        path: PATH.point,
                        element: <UpdatingPage />,
                    },
                    {
                        path: PATH.gift,
                        element: <UpdatingPage />,
                    },
                    {
                        path: PATH.voucher,
                        element: <UpdatingPage />,
                    },
                    {
                        path: PATH.coupon,
                        element: <UpdatingPage />,
                    },
                    {
                        path: PATH.history,
                        element: <UpdatingPage />,
                    },
                ],
            },
        ],
    },
];

export default router;
