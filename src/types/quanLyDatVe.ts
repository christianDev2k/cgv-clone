type ThongTinPhimType = {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
};

export type DanhSachGheType = {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: string;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: null;
};

export type ListPhongVeType = {
    danhSachGhe: DanhSachGheType[];
    thongTinPhim: ThongTinPhimType;
};

export type DatVeType = {
    maLichChieu: number;
    danhSachVe: {
        maGhe: number;
        giaVe: number;
    }[];
};
