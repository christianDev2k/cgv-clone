import { BuyTicketButton } from 'components';
import { PATH } from 'constant';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import { ThongTinDatVeType } from 'types';

const HistoryBookingTemplate = () => {
    const {
        userInfo: { thongTinDatVe },
    } = useAuth();

    return (
        <div>
            {/* Title  */}
            <h3 className="bg-[#222] text-[22px] text-white text-center">LỊCH SỬ GIAO DỊCH</h3>

            {thongTinDatVe.length ? (
                <ul className="mt-3">
                    {thongTinDatVe.map((item: ThongTinDatVeType) => (
                        <li key={item.maVe} className="p-2 border border-black mb-2">
                            <p className="flex">
                                <span className="w-20">Mã vé:</span> <span className="font-bold">{item.maVe}</span>
                            </p>
                            <h6 className="flex">
                                <span className="w-20"> Tên phim: </span>
                                <span className="uppercase font-bold">{item.tenPhim}</span>
                            </h6>
                            <div className="flex">
                                <span className="w-20">Rạp: </span>
                                <span className="font-bold">
                                    {item.danhSachGhe[0].tenHeThongRap} - {item.danhSachGhe[0].tenRap}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="w-20">Ghế: </span>
                                <div className="flex flex-wrap">
                                    {item.danhSachGhe.map((ghe, index) => {
                                        return (
                                            <div key={index} className="mr-1 font-bold">
                                                {ghe.tenGhe}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex">
                                <span className="w-20">Thời gian: </span>
                                <span className="font-bold">
                                    {item.ngayDat.slice(0, 10)} - {item.ngayDat.slice(11, 19)}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <p className="mt-3">Bạn chưa có giao dịch (đơn hàng) nào.</p>
                    <Link to={PATH.allCGV} className="block mt-2">
                        <BuyTicketButton />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HistoryBookingTemplate;
