export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    accessToken: string;
};

export type ThongTinDatVeType = {
    giaVe: number;
    hinhAnh: string;
    maVe: number;
    ngayDat: string;
    tenPhim: string;
    thoiLuongPhim: number;
    danhSachGhe: {
        maCumRap: string;
        maGhe: number;
        maHeThongRap: string;
        maRap: number;
        tenCumRap: string;
        tenGhe: string;
        tenHeThongRap: string;
        tenRap: string;
    }[];
};

export type UserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe?: ThongTinDatVeType[];
    loaiNguoiDung: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    };
};

export type UpdateUser = {
    taiKhoan: string;
    matKhau: string;
    email: string;
    soDt: string;
    maNhom: string;
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    hoTen: string;
};

export type UpdateUserResponse = UpdateUser & {
    soDT?: string;
    loaiNguoiDung: string;
    thongTinDatVe:
        | {
              maPhim: string;
              rap: string;
              soGhe: string;
              thoiGian: string;
          }[]
        | null;
};
