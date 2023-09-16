import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
// ~
import { Button, Input } from 'components';
import { RegisterSchema, RegisterSchemaType } from 'schema';
import { quanLyNguoiDungService } from 'services';
import { PATH } from 'constant';
import { handleError, handleSuccess } from 'utils';

import styles from './auth.module.scss';

const cx = classNames.bind(styles);

const LoginTemplate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(RegisterSchema),
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<RegisterSchemaType> = async value => {
        try {
            console.log(value);
            await quanLyNguoiDungService.register({ ...value, maNhom: 'GP00' });

            handleSuccess('Đăng ký thành công!');
            navigate(PATH.login);
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <form className="pr-2" onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('auth-title')}>
                <div className="w-1/2 sm:w-3/5 sm:mx-5">
                    <Link to={PATH.login} className="text-xs sm:text-sm text-gray-300 px-2 sm:px-4">
                        ĐĂNG NHẬP
                    </Link>
                </div>
                <div className="w-1/2 sm:w-2/5 sm:mx-5">
                    <Link to={PATH.register} className="text-xs sm:text-sm pb-2 px-2 sm:px-4 border-b-4 border-white">
                        ĐĂNG KÝ
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <Input
                    label="Tài khoản"
                    placeholder="Tài khoản"
                    id="taiKhoan"
                    error={errors?.taiKhoan?.message}
                    register={register}
                />
                <Input
                    label="Mật khẩu"
                    type="password"
                    placeholder="Mật khẩu"
                    id="matKhau"
                    error={errors?.matKhau?.message}
                    register={register}
                />
                <Input
                    label="Họ tên"
                    placeholder="Họ tên"
                    id="hoTen"
                    error={errors?.hoTen?.message}
                    register={register}
                />
                <Input
                    label="Email"
                    placeholder="Email"
                    id="email"
                    error={errors?.email?.message}
                    register={register}
                />
                <Input
                    label="Số điện thoại"
                    placeholder="Số điện thoại"
                    id="soDt"
                    error={errors?.soDt?.message}
                    register={register}
                />
                <Input label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" register={register} hidden />
            </div>
            <Button htmlType="submit" className={cx('auth-btn')}>
                ĐĂNG KÝ
            </Button>
        </form>
    );
};

export default LoginTemplate;
