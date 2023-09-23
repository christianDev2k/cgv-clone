import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// ~
import { Button, Input } from 'components';
import { useAuth } from 'hooks';
import { UpdateSchema, UpdateSchemaType } from 'schema';
import { useAppDispatch } from 'store';
import { UpdateAccountThunk } from 'store/quanLyNguoiDungSlice';
import { UpdateUser } from 'types';
import { handleSuccess } from 'utils';

const AccountDetailTemplate = () => {
    const { userLogin: user, isUpdatingUser } = useAuth();
    const dispatch = useAppDispatch();

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<UpdateSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(UpdateSchema),
    });

    useEffect(() => {
        reset({
            ...user,
            soDt: user?.soDT,
        });
    }, [reset, user]);

    const onSubmit: SubmitHandler<UpdateSchemaType> = value => {
        const { taiKhoan, matKhau, email, soDt, maNhom, hoTen } = value;

        const updateData: UpdateUser = {
            taiKhoan,
            matKhau,
            email,
            soDt,
            maNhom,
            maLoaiNguoiDung: 'KhachHang',
            hoTen,
        };

        dispatch(UpdateAccountThunk(updateData))
            .unwrap()
            .then(() => handleSuccess('Cập nhật thành công!'));
    };

    return (
        <div>
            <h3 className="bg-[#222] text-[22px] text-white text-center">THAY ĐỔI THÔNG TIN</h3>

            <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5">
                    <Input label="Tài khoản:" id="taiKhoan" register={register} disabled />
                    <Input label="Tên:" id="hoTen" error={errors.hoTen?.message} register={register} />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-2">
                    <Input label="Số điện thoại:" id="soDt" error={errors.soDt?.message} register={register} />
                    <Input label="Email:" id="email" error={errors.email?.message} register={register} />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-2">
                    <Input label="Mật khẩu:" id="matKhau" type="password" register={register} hidden />
                    <Input label="Mã nhóm:" id="maNhom" hidden register={register} />
                </div>
                <div className="text-center mt-4">
                    <Button htmlType="submit" type="primary" loading={isUpdatingUser}>
                        Lưu lại
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AccountDetailTemplate;
