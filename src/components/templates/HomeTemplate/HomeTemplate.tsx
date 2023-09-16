import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { CarouselRef } from 'antd/es/carousel';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import 'swiper/css';
// ~
import { FilmSlide, ToggleTabs } from 'components';
import { useAppDispatch } from 'store';
import { getBannerListThunk, getMovieListThunk } from 'store/quanLyPhimSlice';
import { useMovie } from 'hooks';
import { PATH } from 'constant';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

const HomeTemplate = () => {
    const ref = useRef<CarouselRef>(null);
    const dispatch = useAppDispatch();
    const { bannerList, movieList } = useMovie();

    useEffect(() => {
        dispatch(getMovieListThunk());
        dispatch(getBannerListThunk());
    }, [dispatch]);

    return (
        <div className="pb-8 bg-[#fdfcf0]">
            <>
                <div className="max-w-screen-lg mx-auto pt-8 pb-4 hidden lg:block">
                    <ul className="flex">
                        {homeSection.map((item, index) => (
                            <li key={index} className={cx('home-sect-item')}>
                                <Link to={item?.path} className={cx('home-sect-link', item.class)}></Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-2 mt-2 border-y border-black"></div>
                </div>

                {/* Carousel  */}
                <div className={cx('carousel')}>
                    <div className="max-w-screen-lg mx-auto relative">
                        <Carousel ref={ref} autoplay dots style={{ border: '1px solid #fff' }}>
                            {bannerList?.map(item => (
                                <div key={item.maBanner}>
                                    <img src={item.hinhAnh} alt="" className="w-full h-72 sm:h-[450px]" />
                                </div>
                            ))}
                        </Carousel>
                        <button
                            onClick={() => {
                                ref.current?.prev();
                            }}
                            className={cx('carousel-arr', 'pre')}
                        ></button>
                        <button
                            onClick={() => {
                                ref.current?.next();
                            }}
                            className={cx('carousel-arr', 'next')}
                        ></button>
                    </div>
                </div>
            </>

            {/* Content  */}
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                {/* Movie section  */}
                <div className={cx('title', 'movie')}>
                    <h2>movie selection</h2>
                </div>
                <div>
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        spaceBetween={5}
                    >
                        {movieList?.slice(0, 10)?.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <FilmSlide movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Event section  */}
                <div className="border-b-[3px] border-black pb-8 px-2 lg:px-0">
                    <div className={cx('title', 'event')}>
                        <h2>event</h2>
                    </div>

                    <ToggleTabs title_1="Thành viên CGV" title_2="Tin Mới &amp; Ưu Đãi" />

                    <ul className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-4 mt-4">
                        {EventImgs.map((item, index) => (
                            <li key={index} className="grow px-1">
                                <div>
                                    <img src={item.path} alt="" className="w-full" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Poster  */}
                <div className="border-b-[3px] border-black pb-4 mt-4 sm:mt-8">
                    <div className="border-[3px] border-black w-2/3 md:w-1/2 p-1">
                        <img src="/images/home/u22_072023_496x267.png" alt="" className="hover:opacity-75 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const homeSection = [
    {
        class: 'heater',
        path: PATH.updatingPage,
    },
    {
        class: 'now-sh',
        path: PATH.nowShowing,
    },
    {
        class: 'special',
        path: PATH.updatingPage,
    },
    {
        class: 'event',
        path: PATH.updatingPage,
    },
    {
        class: 'contact',
        path: PATH.updatingPage,
    },
    {
        class: 'discount',
        path: PATH.updatingPage,
    },
    {
        class: 'register',
        path: PATH.register,
    },
];

const EventImgs = [
    {
        path: '/images/home/2023_happy_wed-02.png',
    },
    {
        path: '/images/home/240x201-uu.jpg',
    },
    {
        path: '/images/home/birthday_popcorn_box_240x201.png',
    },
    {
        path: '/images/home/u22_2023_special_cinemas_240x201_1.png',
    },
];

export default HomeTemplate;
