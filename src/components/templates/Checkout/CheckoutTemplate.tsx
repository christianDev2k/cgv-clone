import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { UndoOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
// ~
import { PATH } from 'constant';
import { useBooking } from 'hooks';
import styles from './checkout.module.scss';
import { BookingInfo } from 'components';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from 'store';
import { DatVeThunk } from 'store/quanLyDatVeSlice';
import { DanhSachGheType } from 'types';

const cx = classNames.bind(styles);

const CheckoutTemplate = () => {
    const { bookedList, danhSachPhongVe, bookingStatus } = useBooking();
    const [value, setValue] = useState<number>(1);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    if (!danhSachPhongVe) return <Navigate to={PATH.allCGV} />;
    const {
        thongTinPhim: { tenCumRap, tenRap, ngayChieu, gioChieu, hinhAnh, tenPhim, maLichChieu },
    } = danhSachPhongVe;

    let tongGiaVe = 0;
    for (let i = 0; i < bookedList.length; i++) {
        tongGiaVe += bookedList[i].giaVe;
    }

    const handlePre = () => {
        navigate(`/booking/${id}`);
    };

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const handleBooking = () => {
        const ticketList = {
            maLichChieu: Number(maLichChieu),
            danhSachVe: bookedList.map((ticket: DanhSachGheType) => ({
                maGhe: Number(ticket.maGhe),
                giaVe: Number(ticket.giaVe),
            })),
        };
        dispatch(DatVeThunk(ticketList))
            .unwrap()
            .then(() => {
                alert('Đặt vé thành công');
                navigate('/');
                window.location.reload();
            })
            .catch(() => {
                toast.error(bookingStatus, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 1000,
                });
            });
    };

    if (!bookedList.length) return <Navigate to={PATH.allCGV} />;
    return (
        <div className="bg-[var(--body-color)]">
            <div className="max-w-screen-lg mx-auto py-[30px]">
                <h1 className="bg-[#231d1c] text-white font-bold text-lg text-center p-1.5">THANH TOÁN</h1>
                <div className="my-[30px] flex gap-5">
                    <div className="w-8/12">
                        <div className="text-sm">
                            <div className={cx('step-title')}>
                                <h4>
                                    Bước 1: <span>GIẢM GIÁ</span>
                                </h4>
                                <div className="flex items-center font-bold text-sm">
                                    <UndoOutlined />
                                    <p className="ml-1">Đặt lại</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2.5 mb-3.5">
                                Hiện tại tính năng thanh toán bằng Voucher, Coupon, Điểm trên Website đang bảo trì, để
                                sử dụng vui lòng tải/cập nhật ứng dụng CGV mới nhất để tiếp tục.
                            </p>
                            <p className="bg-[#fff1ce] px-4 py-1.5">Đối tác</p>
                            <p className="bg-[#fff1ce] px-4 py-1.5 mt-1.5">Mã khuyến mãi</p>
                        </div>
                        <div className="mt-5">
                            <div className={cx('step-title')}>
                                <h4>
                                    Bước 2: <span>HÌNH THỨC THANH TOÁN</span>
                                </h4>
                            </div>
                            <div className="bg-[#fff1ce] mt-1.5 px-4">
                                <Radio.Group onChange={onChange} value={value}>
                                    <Space direction="vertical">
                                        {checkoutMethod.map(radio => (
                                            <Radio key={radio.value} value={radio.value} className="py-0.5">
                                                <div className="flex items-center">
                                                    <img src={radio.imgPath} alt={radio.title} className="w-10 mr-2" />
                                                    <span className="font-bold">{radio.title}</span>
                                                </div>
                                            </Radio>
                                        ))}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="text-sm">
                            <div className={cx('checkout-table')}>
                                <h4 className={cx('row')}>Tổng cộng</h4>
                                <div className={cx('row')}>
                                    <div className=" grid grid-cols-4 font-normal">
                                        <div className="">STD</div>
                                        <div className="col-span-2">{tongGiaVe.toLocaleString('vi-VN')},00 đ</div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className={cx('row', 'total')}>{tongGiaVe.toLocaleString('vi-VN')},00 đ</div>
                            </div>

                            <div className={cx('checkout-table')}>
                                <h4 className={cx('row')}>Khuyến mãi</h4>
                                <div className={cx('row', 'total')}>0,00 đ</div>
                            </div>

                            <div className={cx('checkout-table')}>
                                <h4 className={cx('row', 'subtotal')}>Tổng số tiền thanh toán</h4>
                                <div className={cx('row', 'total')}>{tongGiaVe.toLocaleString('vi-VN')},00 đ</div>
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
                    checkout
                    callbackPre={handlePre}
                    callbackNext={handleBooking}
                />
            </div>
        </div>
    );
};

const checkoutMethod = [
    {
        value: 1,
        imgPath: '/images/booking/atm_icon.png',
        title: 'ATM Card (Thẻ nội địa)',
    },
    {
        value: 2,
        imgPath: '/images/booking/visa-mastercard-icon.png',
        title: 'Thẻ quốc tế (Visa, Master, Amex, JCB)<',
    },
    {
        value: 3,
        imgPath: '/images/booking/icon-HOT-96x96.png',
        title: 'ATM Card (Thẻ nội địa)',
    },
    {
        value: 4,
        imgPath: '/images/booking/atm_icon.png',
        title: 'ZaloPay: Bạn Mới vé 14k - Bạn Thân vé 84K',
    },
];

export default CheckoutTemplate;
