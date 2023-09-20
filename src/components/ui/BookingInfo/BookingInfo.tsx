import { DanhSachGheType } from 'types';
import classNames from 'classnames/bind';
import styles from './booking-info.module.scss';

const cx = classNames.bind(styles);

type BookingInfoProps = {
    hinhAnh: string;
    tenPhim: string;
    tenCumRap: string;
    gioChieu: string;
    ngayChieu: string;
    tenRap: string;
    bookedList: DanhSachGheType[];
    tongGiaVe: number;
    checkout?: boolean;
    callbackNext?: () => void;
    callbackPre?: () => void;
};

const BookingInfo = ({
    hinhAnh,
    tenPhim,
    tenCumRap,
    gioChieu,
    ngayChieu,
    tenRap,
    bookedList,
    tongGiaVe,
    checkout = false,
    callbackNext,
    callbackPre,
}: BookingInfoProps) => {
    return (
        <div className={cx('booking-info')}>
            <div className="md:flex px-32 gap-x-2 justify-between">
                <div className={cx('direct', 'pre')} onClick={callbackPre}></div>
                <div className="md:flex gap-x-2">
                    <img src={hinhAnh} alt="hinh anh phim" className="w-20" />
                    <h6 className="uppercase">{tenPhim}</h6>
                </div>
                <div className="mt-2 md:mt-0">
                    <div className="flex">
                        <p className="w-28">Rạp</p>
                        <p className="font-bold">{tenCumRap}</p>
                    </div>
                    <div className="flex">
                        <p className="w-28">Suất chiếu</p>
                        <p className="font-bold">
                            {gioChieu},{ngayChieu}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="w-28">Phòng chiếu</p>
                        <p className="font-bold">{tenRap}</p>
                    </div>
                    <div className="flex">
                        <p className="w-28">Ghế</p>
                        <p className="font-bold">
                            {bookedList.map((item: DanhSachGheType) => (
                                <span key={item.stt}>{item.tenGhe} </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="mt-2 md:mt-0">
                    <div className="flex">
                        <p className="w-16">Vé</p>
                        <p className="font-bold">{tongGiaVe.toLocaleString('vi-VN')}đ</p>
                    </div>
                    <div className="flex">
                        <p className="w-16">Combo</p>
                        <p className="font-bold">0,00đ</p>
                    </div>
                    <div className="flex">
                        <p className="w-16">Tổng</p>
                        <p className="font-bold">{tongGiaVe.toLocaleString('vi-VN')}đ</p>
                    </div>
                </div>
                <div className={cx('direct', 'next', `${checkout ? 'checkout' : ''}`)} onClick={callbackNext}></div>
            </div>
        </div>
    );
};

export default BookingInfo;
