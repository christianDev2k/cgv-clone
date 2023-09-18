import classNames from 'classnames/bind';
import styles from './booking.module.scss';
import { useBooking } from 'hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { LayDanhSachPhongVeThunk } from 'store/quanLyDatVeSlice';

const cx = classNames.bind(styles);

const BookingTemplate = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { danhSachPhongVe } = useBooking();

    useEffect(() => {
        dispatch(LayDanhSachPhongVeThunk(id));
    }, [dispatch, id]);

    if (!danhSachPhongVe) return;

    const {
        thongTinPhim: { tenCumRap, tenRap, ngayChieu, gioChieu },
        danhSachGhe,
    } = danhSachPhongVe;

    console.log(danhSachGhe);
    return (
        <div className="bg-[var(--body-color)] py-[30px]">
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                <div className="border-2 border-[#d4d3c9]">
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
                        <div>
                            <h1 className="font-bold text-center bg-[#bcbdc0] borer-y-2 border-[#d4d3c9] py-1">
                                Người / Ghế
                            </h1>
                            <div className="mt-8 mb-10">
                                <img src="/images/booking/bg-screen.png" alt="" className="w-full" />
                            </div>
                            <div className="overflow-x-scroll">
                                <div className="my-5 flex justify-center flex-wrap w-[500px] mx-auto">
                                    {danhSachGhe.map(item => {
                                        return (
                                            <div key={item.stt} className={cx('chair-item')}>
                                                {item.tenGhe}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="flex text-white bg-black py-8 text-sm gap-4">{/* Kết quả  */}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTemplate;
