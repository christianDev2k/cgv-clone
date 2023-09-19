import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { PATH } from 'constant';
import { Collapse } from 'components';
import './account-layout.scss';
import { useAuth } from 'hooks';

const NavLinkAccount: React.FC<{ label: string; path: string }> = ({ label, path }) => {
    return (
        <NavLink to={path}>
            <li className="account-label">
                <p className="label">{label}</p>
            </li>
        </NavLink>
    );
};

const AccountLayout = () => {
    const { accessToken } = useAuth();

    if (!accessToken) return <Navigate to={PATH.login} />;
    return (
        <div className="pb-4 md:py-8 bg-[var(--body-color)]">
            <div className="max-w-screen-lg mx-auto w-full px-2 lg:px-0">
                {/* Nav mobile  */}
                <div className="block md:hidden">
                    <Collapse className="!rounded-none overflow-hidden" items={collapse} />
                </div>
                <div className="flex">
                    {/* Nav PC  */}
                    <div className="hidden md:block w-2/6 pr-6">
                        <h3 className="font-bold text-[20px] lg:text-[22px] text-[var(--primary)] mb-2">
                            TÀI KHOẢN CGV
                        </h3>
                        <ul className="account-nav">
                            {navLink.map(item => (
                                <NavLinkAccount key={item.label} label={item.label} path={item.path} />
                            ))}
                        </ul>
                    </div>

                    {/* Outlet  */}
                    <div className="w-full md:w-4/5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

const navLink = [
    {
        label: 'THÔNG TIN CHUNG',
        path: PATH.account,
    },
    {
        label: 'CHI TIẾT TÀI KHOẢN',
        path: PATH.accountDetail,
    },
    {
        label: 'THẺ THÀNH VIÊN',
        path: PATH.memberCard,
    },
    {
        label: 'ĐIỂM THƯỞNG',
        path: PATH.point,
    },
    {
        label: 'THẺ QUÀ TẶNG',
        path: PATH.gift,
    },
    {
        label: 'VOUCHER',
        path: PATH.voucher,
    },
    {
        label: 'COUPON',
        path: PATH.coupon,
    },
    {
        label: 'LỊCH SỬ GIAO DỊCH',
        path: PATH.history,
    },
];

const collapse = [
    {
        key: '1',
        label: <div className="text-[var(--primary)] py-2 px-6">TÀI KHOẢN CGV</div>,
        children: (
            <ul className="pb-1">
                {navLink.map(item => (
                    <Link key={item.label} to={item.path}>
                        <li className="mx-4 py-[5px] border-b border-[#ccc] text-xs text-[var(--text-secondary)] mt-2 hover:text-[var(--primary)] transition">
                            {item.label}
                        </li>
                    </Link>
                ))}
            </ul>
        ),
    },
];

export default AccountLayout;
