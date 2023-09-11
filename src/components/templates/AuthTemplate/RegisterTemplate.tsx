import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
// ~
import { Button, Input } from 'components';
import { RegisterSchema, RegisterSchemaType } from 'schema';
import { quanLyNguoiDungService } from 'services';
import { PATH } from 'constant';
import { handleError } from 'utils';
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
            await quanLyNguoiDungService.register(value);

            toast.success('Đăng ký tài khoản thành công!');
            navigate(PATH.login);
        } catch (err) {
            handleError(err);
        }
    };

    toast.success('Đăng ký tài khoản thành công!');

    toast.success('Đăng ký thành công!');
    return (
        <form className="pr-2" onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('auth-title')}>
                <div className="w-2/5 mx-5">
                    <Link to={PATH.login} className="font-base text-gray-300 px-4">
                        ĐĂNG NHẬP
                    </Link>
                </div>
                <div className="w-3/5 mx-5">
                    <Link to={PATH.register} className="font-base pb-2 px-4 border-b-4 border-white">
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
                <Input
                    label="Mã nhóm"
                    placeholder="Mã nhóm"
                    id="maNhom"
                    error={errors?.maNhom?.message}
                    register={register}
                />
            </div>
            <Button htmlType="submit" auth={true}>
                ĐĂNG KÝ
            </Button>
        </form>
    );
};

export default LoginTemplate;
