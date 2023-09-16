import { NavLink, Outlet } from 'react-router-dom';
import { PATH } from 'constant';
import './account-layout.scss';

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
    return (
        <div className="py-8 bg-[var(--body-color)]">
            <div className="max-w-screen-lg mx-auto flex w-full px-2 lg:px-0">
                <div className="w-2/6 pr-6">
                    <h3 className="font-bold text-[22px] text-[var(--primary)] mb-2">TÀI KHOẢN CGV</h3>
                    <ul className="account-nav">
                        {navLink.map(item => (
                            <NavLinkAccount label={item.label} path={item.path} />
                        ))}
                    </ul>
                </div>
                <div className="w-4/5">
                    <Outlet />
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

export default AccountLayout;
