export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    accessToken: string;
};
