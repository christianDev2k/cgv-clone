// import React from 'react'
import classNames from 'classnames/bind';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
// ~
import styles from './header.module.scss';

const cx = classNames.bind(styles);

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a href="..." className="font-bold !text-white text-base">
                Phim Đang Chiếu
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="..." className="font-bold !text-white text-base">
                Phim Sắp Chiếu
            </a>
        ),
    },
];

// const items1: MenuProps['items'] = [
//     {
//         key: '1',
//         label: (
//             <a href="..." className="font-bold !text-white text-base">
//                 Phim Đang Chiếu
//             </a>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <a href="..." className="font-bold !text-white text-base">
//                 Phim Sắp Chiếu
//             </a>
//         ),
//     },
// ];

const dropdownBg = () => ({
    backgroundImage: 'url("./images/header/bg_menu_hover.png")',
    border: '1px solid #fff',
});

const Header = () => {
    return (
        <div>
            <div className="bg-[#fdfcf0]">
                <div className="max-w-screen-lg mx-auto py-1">
                    <ul className="flex justify-end items-center">
                        <li className={cx('topbar-item')}>
                            <img src="./images/header/icon_promotion25.png" alt="Tin mới" />
                            <a href="" className={cx('topbar-link')}>
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
                            <a href="" className={cx('topbar-link')}>
                                ĐĂNG NHẬP
                            </a>
                            <span className="mx-1">/</span>
                            <a href="" className={cx('topbar-link')}>
                                ĐĂNG KÝ
                            </a>
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
                    <a href="..." className="logo py-9">
                        <img src="./logo/cgvlogo.png" alt="" />
                    </a>
                    <ul className="navbar flex">
                        <Dropdown menu={{ items }} overlayStyle={dropdownBg()}>
                            <li className={cx('navbar-item')}>
                                <a href="...">PHIM</a>
                            </li>
                        </Dropdown>

                        {/* <Dropdown menu={{ items1 }} overlayStyle={dropdownBg()}>
                            <li className={cx('navbar-item')}>
                                <a href="...">RẠP CGV</a>
                            </li>
                        </Dropdown> */}
                        
                        <li className={cx('navbar-item')}>
                            <a href="...">RẠP CGV</a>
                        </li>

                        <li className={cx('navbar-item')}>
                            <a href="...">THÀNH VIÊN</a>
                        </li>
                        <li className={cx('navbar-item')}>
                            <a href="...">CULTUREPLEX</a>
                        </li>
                        <li className={cx('navbar-item', 'carrer')}>
                            <a href="...">TUYỂN DỤNG</a>
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
