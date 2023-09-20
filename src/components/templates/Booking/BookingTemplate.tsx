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
import { BookingInfo, LoadingUI } from 'components';

const cx = classNames.bind(styles);

const BookingTemplate = () => {
    const { danhSachPhongVe, bookedList, isFetchingPhongVe } = useBooking();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(LayDanhSachPhongVeThunk(id));
    }, [dispatch, id]);
    
    if (isFetchingPhongVe) return <LoadingUI />;
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
            navigate(`/checkout/${id}`);
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

                    <BookingInfo
                        bookedList={bookedList}
                        gioChieu={gioChieu}
                        hinhAnh={hinhAnh}
                        ngayChieu={ngayChieu}
                        tenCumRap={tenCumRap}
                        tenPhim={tenPhim}
                        tenRap={tenRap}
                        tongGiaVe={tongGiaVe}
                        callbackNext={handleCheckout}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingTemplate;
