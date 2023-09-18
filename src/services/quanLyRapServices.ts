import { apiInstance } from 'constant';
import { ThongTinCumRapType, ThongTinLichChieuType } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP,
});

const quanLyRapServices = {
    LayThongTinCumRap: (value: string = 'cgv') =>
        api.get<ApiResponse<ThongTinCumRapType[]>>(`/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`),
    LayThongTinLichChieu: (rap: string = 'cgv', nhom: string = 'GP01') =>
        api.get<ApiResponse<ThongTinLichChieuType[]>>(
            `LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=${nhom}`,
        ),
};

export default quanLyRapServices;
