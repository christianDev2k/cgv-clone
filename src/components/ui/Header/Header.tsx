import classNames from 'classnames/bind';
// ~
import styles from './header.module.scss';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div>
            <div className="bg-[#fdfcf0]">
                <div className="max-w-screen-lg mx-auto py-1">
                    <ul className="flex justify-end items-center">
                        <li className={cx('topbar-item')}>
                            <img src="./images/header/icon_promotion25.png" alt="Tin mới" />
                            <a href="#" className={cx('topbar-link')}>
                                TIN MỚI & ƯU ĐÃI
                            </a>
                        </li>
                        <li className={cx('topbar-item')}>
                            <img src="./images/header/icon_ticket25.png" alt="Vé của tôi" />
                            <a href="" className={cx('topbar-link')}>
                                VÉ CỦA TÔI
                            </a>
                        </li>
                        <li className={cx('topbar-item')}>
                            <img src="./images/header/icon_login25.png" alt="Login" />
                            <Link to="/login" className={cx('topbar-link')}>
                                ĐĂNG NHẬP
                            </Link>
                            <span className="mx-1">/</span>
                            <Link to="/register" className={cx('topbar-link')}>
                                ĐĂNG KÝ
                            </Link>
                        </li>
                        <li className={cx('topbar-item', 'lang-toggle')}>
                            <button className={cx('lang-toggle-btn', 'active')}>VN</button>
                            <button className={cx('lang-toggle-btn')}>EN</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('header-main')}>
                <div className="max-w-screen-lg mx-auto flex items-center justify-between">
                    <Link to="/" className="logo py-9">
                        <img src="./logo/cgvlogo.png" alt="" />
                    </Link>
                    <ul className="navbar flex">
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
                    <div className="flex items-center">
                        <div>
                            <a href="...">
                                <img src="./images/header/kenhcine.gif" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="...">
                                <img src="./images/header/mua-ve_ngay.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

const PhimSubTitle = [
    {
        title: 'Phim sắp chiếu',
    },
    {
        title: 'Phim đang chiếu',
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
