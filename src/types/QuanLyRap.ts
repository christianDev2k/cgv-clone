export type ThongTinCumRapType = {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: {
        maRap: number;
        tenRap: string;
    }[];
};

export type LichChieuPhimType = {
    maLichChieu: number;
    maRap: string;
    tenRap: string;
    ngayChieuGioChieu: string;
    giaVe: number;
};

export type DanhSachPhimType = {
    lstLichChieuTheoPhim: LichChieuPhimType[];
    maPhim: number;
    tenPhim: string;
    hinhAnh: string;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
};

export type ThongTinLichChieuType = {
    lstCumRap: {
        danhSachPhim: DanhSachPhimType[];
    }[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    mahom: string;
};
