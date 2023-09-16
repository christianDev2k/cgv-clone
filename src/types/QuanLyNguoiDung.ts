export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    accessToken: string;
};

export type UserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe?: [];
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
