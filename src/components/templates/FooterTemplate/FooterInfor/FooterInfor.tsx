// import React from 'react'
import classNames from 'classnames/bind';
import styles from './footer-infor.module.scss';

const cx = classNames.bind(styles);

const FooterInfor = () => {
    return (
        <div className="pt-4">
            <div className="max-w-screen-lg mx-auto mb-4">
                <div className="flex items-center">
                    <div className={cx('footer-logo')}></div>
                    <div className="grow">
                        <h4 className="font-bold mb-2">CÔNG TY TNHH CJ CGV VIETNAM</h4>
                        <div className="text-[13px]">
                            <p>
                                Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày
                                14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
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
    );
};

export default FooterInfor;
