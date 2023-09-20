import { apiInstance } from 'constant';
import { DatVeType, ListPhongVeType } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE,
});

const quanLyRapServices = {
    LayDanhSachPhongVe: (value: string) =>
        api.get<ApiResponse<ListPhongVeType>>(`/LayDanhSachPhongVe?MaLichChieu=${value}`),
    DatVe: (value: DatVeType) => api.post<ApiResponse<string>>('/DatVe', value),
};

export default quanLyRapServices;
