import { apiInstance } from 'constant';
import { LoginSchemaType, RegisterSchemaType } from 'schema';
import { UserLogin } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG,
});

const quanLyNguoiDungService = {
    login: (value: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', value),
    register: (value: RegisterSchemaType) => api.post('/DangKy', value),
};

export default quanLyNguoiDungService;
