import { apiInstance } from 'constant';
import { ListPhongVeType } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE,
});

const quanLyRapServices = {
    LayDanhSachPhongVe: (value: string) =>
        api.get<ApiResponse<ListPhongVeType>>(`/LayDanhSachPhongVe?MaLichChieu=${value}`),
};

export default quanLyRapServices;
