import { apiInstance } from 'constant';
import { Banner, Movie } from 'types/QuanLyPhim';

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});

const quanLyPhim = {
    LayDanhSachPhim: () => api.get<ApiResponse<Movie[]>>('/LayDanhSachPhim'),
    LayDanhSachBanner: () => api.get<ApiResponse<Banner[]>>('/LayDanhSachBanner'),
};

export default quanLyPhim;
