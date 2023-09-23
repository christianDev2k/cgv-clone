import { z } from 'zod';

export const UpdateSchema = z.object({
    taiKhoan: z
        .string()
        .nonempty('Vui lòng nhập tài khoản!')
        .regex(/^[a-z0-9_-]+$/, 'Tài khoản bao gồm: a-z, 0-9, _, -.')
        .min(3, 'Tài khoản tối thiểu 3 ký tự!')
        .max(16, 'Tài khoản tối đa 16 ký tự!'),
    matKhau: z.string(),
    email: z.string().nonempty('Vui lòng nhập email').email('Email không hợp lệ!'),
    soDt: z
        .string()
        .nonempty('Vui lòng nhập số điện thoại!')
        .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ!'),
    maNhom: z.string(),
    hoTen: z
        .string()
        .nonempty('Vui lòng nhập họ tên!')
        .regex(/^[a-zA-ZÀ-ỹ\s']+$/, 'Vui lòng nhập họ và tên hợp lệ!'),
});

export type UpdateSchemaType = z.infer<typeof UpdateSchema>;
