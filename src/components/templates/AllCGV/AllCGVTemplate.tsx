import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// ~
import { LayThongTinCumRapThunk, LayThongTinLichChieuThunk } from 'store/quanLyRapSlice';
import { useAppDispatch } from 'store';
import { useCinemas } from 'hooks';
import { DanhSachPhimType, ThongTinCumRapType } from 'types';
import { Button, LoadingUI, ToggleTabs } from 'components';
import { PATH } from 'constant';
import styles from './all-cgv.module.scss';

const cx = classNames.bind(styles);

const AllCGVTemplate = () => {
    const dispatch = useAppDispatch();
    const [cinemaActive, setCinemasActive] = useState<ThongTinCumRapType>(undefined);
    const { listCinemas, listLichChieu, isFetchingListCinemas } = useCinemas();
    const listPhimActive: DanhSachPhimType[] = [];

    if (listCinemas && cinemaActive && listLichChieu) {
        const maRap = cinemaActive?.danhSachRap.map(item => item.maRap);
        const moviesList = listLichChieu[0].lstCumRap.map(item => item.danhSachPhim);

        for (let i = 0; i < maRap.length; i++) {
            const maRapActive = maRap[i];

            for (let j = 0; j < moviesList.length; j++) {
                const movieItem = moviesList[j];
                for (let l = 0; l < movieItem.length; l++) {
                    const listLichChieu = movieItem[l].lstLichChieuTheoPhim;
                    for (let t = 0; t < listLichChieu.length; t++) {
                        const maRap = listLichChieu[t].maRap;

                        if (maRapActive === Number(maRap)) {
                            listPhimActive.push(movieItem[l]);
                            break;
                        }
                    }
                }
            }
        }
    }

    useEffect(() => {
        dispatch(LayThongTinCumRapThunk());
        dispatch(LayThongTinLichChieuThunk());
    }, [dispatch]);

    if (isFetchingListCinemas) return <LoadingUI />;

    return (
        <div className="bg-[var(--body-color)] py-8">
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                {/* CGV CINEMAS  */}
                <div>
                    <div>
                        <img src="/images/all-cgv/cinema-showtimes-favorite-top.png" alt="" className="w-full" />
                    </div>
                    <div className={cx('content')}>
                        <h1 className={cx('title-cgv-cinemas')}>CGV CINEMAS</h1>
                        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-2">
                            {listCinemas?.map(item => (
                                <li
                                    key={item.maCumRap}
                                    className={cx('cinema-name', `${cinemaActive === item ? 'active' : null}`)}
                                    onClick={() => setCinemasActive(item)}
                                >
                                    {item.tenCumRap.slice(6)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src="/images/all-cgv/cinema-showtimes-favorite-bottom.png" alt="" className="w-full" />
                    </div>
                </div>

                {cinemaActive && (
                    <div>
                        {/* IMAGE  */}
                        <div className={cx('title', 'theater')}>
                            <h2>theater</h2>
                        </div>
                        <h5 className="text-center mb-4 text-3xl text-[#636363]">{cinemaActive?.tenCumRap}</h5>
                        <div className="relative">
                            <img src="/images/all-cgv/vhm-1.png" alt="cinemas" className="w-full" />
                            <div className={cx('theater-info')}>
                                <div className="text-xs text-white w-8/12">
                                    <p>{cinemaActive.diaChi}</p>
                                    <div className="my-1">
                                        <span className="font-bold">Fax:</span>
                                        <span>+84 4 6 275 5240</span>
                                    </div>
                                    <div>
                                        <span className="font-bold">Hotline</span>
                                        <span>1900 60170</span>
                                    </div>
                                </div>
                                <div className="w-4/12 pl-5 border-l border-gray-500">
                                    <Link to={PATH.updatingPage}>
                                        <Button type="primary" className="!text-xs !font-bold !block">
                                            XEM BẢN ĐỒ
                                        </Button>
                                    </Link>
                                    <Link to={PATH.updatingPage}>
                                        <Button type="primary" className="!text-xs !font-bold !block mt-4">
                                            LIÊN HỆ CGV
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <ToggleTabs title_1="Lịch chiếu" title_2="Giá vé" />
                        </div>
                        <div>
                            {listPhimActive.slice(0, 10).map((item, index) => {
                                const { tenPhim, hinhAnh, lstLichChieuTheoPhim } = item;
                                return (
                                    <div key={index} className="py-4 border-b border-black">
                                        <h6 className="text-lg uppercase mb-3">{tenPhim}</h6>
                                        <div className="flex items-start">
                                            <div className="w-1/5">
                                                <img
                                                    src={hinhAnh}
                                                    alt=""
                                                    className="w-full h-32 sm:h-40 md:h-52 lg:h-64"
                                                />
                                            </div>
                                            <div className="w-4/5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 pl-2">
                                                {lstLichChieuTheoPhim.map(item => {
                                                    return (
                                                        <Link
                                                            to={`/booking/${item.maLichChieu}`}
                                                            key={item.maLichChieu}
                                                            className="text-center border border-gray-400 p-1 cursor-pointer hover:border-black transition"
                                                        >
                                                            <div className="font-bold">
                                                                {item.ngayChieuGioChieu.slice(0, 10)}
                                                            </div>
                                                            <div>{item.ngayChieuGioChieu.slice(11)}</div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCGVTemplate;
