import { apiInstance } from 'constant';
import { Banner, Movie } from 'types/QuanLyPhim';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});

const quanLyPhimService = {
    LayDanhSachPhim: (query = '') => api.get<ApiResponse<Movie[]>>(`/LayDanhSachPhim${query}`),
    LayDanhSachBanner: () => api.get<ApiResponse<Banner[]>>('/LayDanhSachBanner'),
    LayThongTinPhim: (id: string) => api.get<ApiResponse<Movie>>(`/LayThongTinPhim?MaPhim=${id}`),
};

export default quanLyPhimService;
