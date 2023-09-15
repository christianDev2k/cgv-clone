import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { PATH } from 'constant';
import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className="bg-[#fdfcf0]">
            <div>
                <div className="mx-auto border-y-2 border-black pt-2.5">
                    <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                        <img src="/images/footer/brand-type-film-footer_ver2.png" alt="" />
                    </div>
                </div>
                <div className="mx-auto border-b-2 border-black py-5">
                    <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                        <div className="grid grid-cols-2  sm:grid-cols-3 gap-y-2 lg:grid-cols-4">
                            <div>
                                <h4 className={cx('footer-title')}>CGV Việt Nam</h4>
                                <ul>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Giới Thiệu</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Tiện Ích Online</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Thẻ Quà Tặng</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Tuyển Dụng</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Liên Hệ Quảng Cáo CGV</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={cx('footer-title')}>Điều khoản sử dụng</h4>
                                <ul>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Điều Khoản Chung</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Điều Khoản Giao Dịch</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Chính Sách Thanh Toán</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Chính Sách Bảo Mật</Link>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <Link to={PATH.updatingPage}>Câu Hỏi Thường Gặp</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={cx('footer-title')}>Kết nối với chúng tôi</h4>
                                <div className="flex mt-1">
                                    <a
                                        href="https://www.facebook.com/cgvcinemavietnam"
                                        className={cx('footer-social', 'facebook')}
                                    ></a>
                                    <a
                                        href="https://www.youtube.com/@CGVVietnam"
                                        className={cx('footer-social', 'youtube')}
                                    ></a>
                                    <a
                                        href="https://www.instagram.com/cgvcinemasvietnam/"
                                        className={cx('footer-social', 'instagram')}
                                    ></a>
                                    <a href="https://zalo.me/1884424922722396289" className={cx('footer-social')}></a>
                                </div>
                                <div className="mt-3">
                                    <img src="/images/footer/cong-thuong.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h4 className={cx('footer-title')}>Chăm sóc khách hàng</h4>
                                <ul>
                                    <li className={cx('footer-item')}>
                                        <p>Hotline: 1900 6017</p>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <p>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
                                    </li>
                                    <li className={cx('footer-item')}>
                                        <p>Email hỗ trợ: hoidap@cgv.vn</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="max-w-screen-lg mx-auto mb-4 px-2 lg:px-0">
                    <div className="flex items-center">
                        <div>
                            <div className={cx('footer-logo')}></div>
                        </div>
                        <div className="grow text-[#636363]">
                            <h4 className="font-bold mb-2">CÔNG TY TNHH CJ CGV VIETNAM</h4>
                            <div className="text-sm">
                                <p>
                                    Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5
                                    ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
                                </p>
                                <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
                                <p>Hotline: 1900 6017</p>
                                <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-end-bg')}></div>
            </div>
        </footer>
    );
};

export default Footer;
