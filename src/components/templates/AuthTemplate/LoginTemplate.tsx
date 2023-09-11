import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
// ~
import { Button, Input } from 'components';
import { LoginSchema, LoginSchemaType } from 'schema';
// import { handleError } from 'utils';

import styles from './auth.module.scss';

const cx = classNames.bind(styles);

const LoginTemplate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit: SubmitHandler<LoginSchemaType> = async value => {
        console.log(value);
    };

    return (
        <form className="pr-2" onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('auth-title')}>
                <div className="w-2/5 mx-5">
                    <Link to="/login" className="font-base pb-2 px-4 border-b-4 border-white">
                        ĐĂNG NHẬP
                    </Link>
                </div>
                <div className="w-3/5 mx-5">
                    <Link to="/register" className="font-base text-gray-300 px-4">
                        ĐĂNG KÝ
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <Input
                    label="Tài khoản"
                    id="taiKhoan"
                    placeholder="Tài khoản"
                    register={register}
                    error={errors?.taiKhoan?.message}
                />
                <Input
                    label="Mật khẩu"
                    id="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    register={register}
                    error={errors?.matKhau?.message}
                />
            </div>
            <Button htmlType="submit" auth={true}>
                ĐĂNG NHẬP
            </Button>
        </form>
    );
};

export default LoginTemplate;
