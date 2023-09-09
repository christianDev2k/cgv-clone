import classNames from 'classnames/bind';
import styles from './auth.module.scss';
// ~
import { Button } from 'components';

const cx = classNames.bind(styles);

const LoginTemplate = () => {
    return (
        <form className="pr-2">
            <div className={cx('auth-title')}>
                <div className="w-2/5 mx-5">
                    <span className="font-base pb-2 px-4 border-b-4 border-white">ĐĂNG NHẬP</span>
                </div>
                <div className="w-3/5 mx-5">
                    <span className="font-base text-gray-300 px-4">ĐĂNG KÝ</span>
                </div>
            </div>
            <div className="p-4">
                <div>
                    <label htmlFor="taiKhoan" className="block font-semibold text-slate-600">
                        Email hoặc số điện thoại
                    </label>
                    <input
                        type="text"
                        id="taiKhoan"
                        name="taiKhoan"
                        className={cx('form-control')}
                        placeholder="Email hoặc số điện thoại"
                    />
                </div>
                <div>
                    <label htmlFor="taiKhoan" className="block font-semibold text-slate-600">
                        Mật khẩu
                    </label>
                    <input
                        type="text"
                        id="taiKhoan"
                        name="taiKhoan"
                        className={cx('form-control')}
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
            <Button auth>ĐĂNG NHẬP</Button>
        </form>
    );
};

export default LoginTemplate;
