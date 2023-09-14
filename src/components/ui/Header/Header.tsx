import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
// ~
import Dropdown from './Dropdown';
import { PATH } from 'constant';
import styles from './header.module.scss';
import { useAuth } from 'hooks';
import { useAppDispatch } from 'store';
import { quanLyNguoiDungActions } from 'store/quanLyNguoiDungSlice';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const { userLogin } = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isOpenNavbar, setIsOpenNavbar] = useState<boolean>(false);
    const [isOpenNavUser, setIsOpenNavUser] = useState<boolean>(false);

    const handleLogOut = () => () => {
        dispatch(quanLyNguoiDungActions.logOutUser());
    };

    const phim_menu = [
        {
            key: 1,
            label: <div className={cx('sub-label', 'pointer')}>Phim</div>,
            children: [
                {
                    key: 'dang-chieu',
                    label: (
                        <p
                            className={cx('children', 'pointer')}
                            onClick={() => {
                                navigate(PATH.nowShowing);
                                setIsOpenNavbar(false);
                            }}
                        >
                            Phim đang chiếu
                        </p>
                    ),
                },
                {
                    key: 'sap-chieu',
                    label: (
                        <p
                            className={cx('children', 'pointer')}
                            onClick={() => {
                                navigate(PATH.commingSoon);
                                setIsOpenNavbar(false);
                            }}
                        >
                            Phim sắp chiếu
                        </p>
                    ),
                },
            ],
        },
        {
            key: 2,
            label: <div className={cx('sub-label')}>Rạp CGV</div>,
            children: [
                {
                    key: 'tat-ca-rap',
                    label: <p className={cx('children')}>Tất cả các rạp</p>,
                },
                {
                    key: 'rap-dat-biet',
                    label: <p className={cx('children')}>Rạp đặc biệt</p>,
                },
                {
                    key: 'rap-3d',
                    label: <p className={cx('children')}>Rạp 3D</p>,
                },
            ],
        },
        {
            key: 3,
            label: <div className={cx('sub-label')}>Thành viên</div>,
            children: [
                {
                    key: 'tai-khoan-cgv',
                    label: <p className={cx('children')}>Tài khoản CGV</p>,
                },
                {
                    key: 'quyen-loi',
                    label: <p className={cx('children')}>Quyền lợi</p>,
                },
            ],
        },
        {
            key: 4,
            label: <div className={cx('sub-label')}>Cultureplex</div>,
            children: [
                {
                    key: 'quay-online',
                    label: <p className={cx('children')}>Quầy online</p>,
                },
                {
                    key: 'e-cgv',
                    label: <p className={cx('children')}>E-CGV</p>,
                },
                {
                    key: 'cgv-egift',
                    label: <p className={cx('children')}>CGV EGift</p>,
                },
                {
                    key: 'cgv-rules',
                    label: <p className={cx('children')}>CGV Rules</p>,
                },
            ],
        },
        {
            key: 5,
            label: <div className={cx('sub-label')}>Tuyển dụng</div>,
        },
    ];

    return (
        <div>
            <div className="bg-[#fdfcf0] hidden md:block">
                <div className="max-w-screen-lg mx-auto py-1 px-2 lg:px-0">
                    <ul className="flex justify-end items-center">
                        <li className={cx('topbar-item')}>
                            <img src="/images/header/icon_promotion25.png" alt="Tin mới" />
                            <a href="#" className={cx('topbar-link')}>
                                TIN MỚI & ƯU ĐÃI
                            </a>
                        </li>
                        <li className={cx('topbar-item')}>
                            <img src="/images/header/icon_ticket25.png" alt="Vé của tôi" />
                            <a href="" className={cx('topbar-link')}>
                                VÉ CỦA TÔI
                            </a>
                        </li>
                        {!userLogin ? (
                            <li className={cx('topbar-item')}>
                                <img src="/images/header/icon_login25.png" alt="Login" />
                                <Link to={PATH.login} className={cx('topbar-link')}>
                                    ĐĂNG NHẬP
                                </Link>
                                <span className="mx-1">/</span>
                                <Link to="/register" className={cx('topbar-link')}>
                                    ĐĂNG KÝ
                                </Link>
                            </li>
                        ) : (
                            <li className={cx('topbar-item')}>
                                <i className="fa-regular fa-user text-xl mr-1 text-gray-700"></i>
                                <a href="..." className={cx('topbar-link', 'user-name')}>
                                    XIN CHÀO, {userLogin.hoTen}!
                                </a>
                                <button className={cx('topbar-link')} onClick={handleLogOut()}>
                                    Thoát
                                </button>
                            </li>
                        )}

                        <li className={cx('topbar-item', 'lang-toggle')}>
                            <button className={cx('lang-toggle-btn', 'active')}>VN</button>
                            <button className={cx('lang-toggle-btn')}>EN</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('header-main')}>
                <div className="max-w-screen-lg mx-auto flex items-center lg:justify-between px-2 lg:px-0 h-16 md:h-auto">
                    <Link to="/" className="logo py-9 mx-auto md:mx-0 w-24 md:w-auto">
                        <img src="/logo/cgvlogo.png" alt="" />
                    </Link>

                    {/* Nav PC  */}
                    <ul className="navbar md:flex hidden">
                        <li className={cx('navbar-item')}>
                            <a href="...">PHIM</a>
                            <Dropdown navList={PhimSubTitle} />
                        </li>
                        <li className={cx('navbar-item')}>
                            <a href="...">RẠP CGV</a>
                            <Dropdown navList={RapSubTitle} />
                        </li>

                        <li className={cx('navbar-item')}>
                            <a href="...">THÀNH VIÊN</a>
                            <Dropdown navList={MemberSubTitle} />
                        </li>
                        <li className={cx('navbar-item')}>
                            <a href="...">CULTUREPLEX</a>
                            <Dropdown navList={PlexSubTitle} />
                        </li>
                        <li className={cx('navbar-item', 'carrer')}>
                            <a href="...">TUYỂN DỤNG</a>
                            <Dropdown navList={CarrerSubTitle} />
                        </li>
                    </ul>
                    <div className="lg:flex items-center hidden">
                        <div>
                            <a href="...">
                                <img src="/images/header/kenhcine.gif" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="...">
                                <img src="/images/header/mua-ve_ngay.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nav mobile  */}
            <ul className="md:hidden grid grid-cols-4 text-center border-y border-gray-200 bg-[var(--body-color)]">
                <li
                    className="py-1 cursor-pointer"
                    onClick={() =>
                        setIsOpenNavbar(pre => {
                            setIsOpenNavUser(false);
                            return !pre;
                        })
                    }
                >
                    <div className={cx('nav-icon', 'bar-icon')}></div>
                </li>
                <li className="border-x border-gray-200 py-1 cursor-pointer">
                    <div className={cx('nav-icon', 'ticket-icon')}></div>
                </li>
                <li
                    className="py-1 cursor-pointer"
                    onClick={() =>
                        setIsOpenNavUser(pre => {
                            setIsOpenNavbar(false);
                            return !pre;
                        })
                    }
                >
                    <div className={cx('nav-icon', 'user-icon')}></div>
                </li>
                <li className="border-l border-gray-200 py-1 cursor-pointer">
                    <div className={cx('nav-icon', 'lang-icon')}>EN</div>
                </li>
            </ul>

            {/* Phim menu  */}
            {isOpenNavbar && (
                <div className="block md:hidden">
                    <Menu className={cx('nav-mobile')} selectable={false} mode="inline" items={phim_menu} />
                </div>
            )}

            {/* User menu  */}
            {isOpenNavUser && (
                <div className="block md:hidden">
                    <ul className={cx('nav-mobile')}>
                        <Link to={PATH.login}>
                            <li className={cx('sub-user')}>TÀI KHOẢN</li>{' '}
                        </Link>
                        <Link to={PATH.register}>
                            <li className={cx('sub-user')}>ĐĂNG KÝ</li>{' '}
                        </Link>
                        <Link to={PATH.login}>
                            <li className={cx('sub-user')}>ĐĂNG NHẬP</li>{' '}
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;

const PhimSubTitle = [
    {
        title: 'Phim đang chiếu',
        path: PATH.nowShowing,
    },
    {
        title: 'Phim sắp chiếu',
        path: PATH.commingSoon,
    },
];

const RapSubTitle = [
    {
        title: 'Tất cả các rạp',
    },
    {
        title: 'Rạp đặc biệt',
    },
    {
        title: 'Rạp 3D',
    },
];

const MemberSubTitle = [
    {
        title: 'Tài khoản CGV',
    },
    {
        title: 'Quyền lợi',
    },
];

const PlexSubTitle = [
    {
        title: 'Quầy Online',
    },
    {
        title: 'Thuê rạp & vé nhóm',
    },
    {
        title: 'E-CGV',
    },
    {
        title: 'CGV EGift',
    },
    {
        title: 'CGV Rules',
    },
];

const CarrerSubTitle = [
    {
        title: 'Tuyển dụng',
    },
    {
        title: 'Khối văn phòng',
    },
    {
        title: 'Khối cụm rạp',
    },
];
