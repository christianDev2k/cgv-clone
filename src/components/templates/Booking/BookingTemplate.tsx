import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
// ~
import { useBooking } from 'hooks';
import styles from './booking.module.scss';
import { useAppDispatch } from 'store';
import { LayDanhSachPhongVeThunk, quanLyDatVeActions } from 'store/quanLyDatVeSlice';
import { DanhSachGheType } from 'types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { PATH } from 'constant';

const cx = classNames.bind(styles);

const BookingTemplate = () => {
    const { danhSachPhongVe, bookedList } = useBooking();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(LayDanhSachPhongVeThunk(id));
    }, [dispatch, id]);

    if (!danhSachPhongVe) return;
    const {
        thongTinPhim: { tenCumRap, tenRap, ngayChieu, gioChieu, hinhAnh, tenPhim },
        danhSachGhe,
    } = danhSachPhongVe;

    const handleBooked = (ghe: DanhSachGheType) => () => {
        if (bookedList.some((item: DanhSachGheType) => item.stt === ghe.stt)) {
            const isDouble = bookedList.filter((c: DanhSachGheType) => c.stt !== ghe.stt);
            dispatch(quanLyDatVeActions.handleBooked(isDouble));
            return;
        }

        if (bookedList.length < 8) {
            dispatch(quanLyDatVeActions.handleBooked([...bookedList, ghe]));
        } else {
            toast.error('Bạn có thể chọn tối đa 8 ghế', {
                closeButton: false,
                hideProgressBar: true,
            });
        }
    };

    const handleCheckout = () => {
        if (bookedList.length) {
            navigate(PATH.checkout);
        } else {
            toast.error('Vui lòng chọn ghế trước khi tiếp tục', {
                closeButton: false,
                hideProgressBar: true,
            });
        }
    };

    let tongGiaVe = 0;
    for (let i = 0; i < bookedList.length; i++) {
        tongGiaVe += bookedList[i].giaVe;
    }

    return (
        <div className="bg-[var(--body-color)] py-[30px]">
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                <div className="border-2 border-[#d4d3c9]">
                    <div>
                        <h1 className="bg-[#231d1c] text-white font-bold text-lg text-center p-1.5">BOOKING ONLINE</h1>
                        <div className="bg-[#fff1ce] p-2.5 text-sm font-bold">
                            <p>
                                {tenCumRap} | {tenRap} | Số ghế ({danhSachGhe.length}/{danhSachGhe.length})
                            </p>
                            <p>
                                {ngayChieu} {gioChieu}
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="font-bold text-center bg-[#bcbdc0] borer-y-2 border-[#d4d3c9] py-1">
                                Người / Ghế
                            </h1>
                            <div className="mt-8 mb-10">
                                <img src="/images/booking/bg-screen.png" alt="" className="w-full" />
                            </div>
                            <div className="overflow-x-scroll sm:overflow-auto">
                                <div className="my-5 flex justify-center flex-wrap w-[500px] mx-auto">
                                    {danhSachGhe.map(item => {
                                        return (
                                            <div
                                                key={item.tenGhe}
                                                className={cx(
                                                    'chair-item',
                                                    `${
                                                        bookedList.some(
                                                            (chair: DanhSachGheType) => chair.tenGhe === item.tenGhe,
                                                        )
                                                            ? 'booked'
                                                            : ''
                                                    }`,
                                                )}
                                                onClick={handleBooked(item)}
                                            >
                                                {item.tenGhe}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('booking-info')}>
                        <div className="md:flex px-32 gap-x-2 justify-between">
                            <div className={cx('direct', 'pre')}></div>
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
                            <div className={cx('direct', 'next')} onClick={handleCheckout}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTemplate;
