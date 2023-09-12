import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
// ~
import { FilmSlide } from 'components';
import styles from './home.module.scss';
import { useAppDispatch } from 'store';
import { getBannerListThunk, getMovieListThunk } from 'store/quanLyPhimSlice';
import { useMovie } from 'hooks';

const cx = classNames.bind(styles);

const HomeTemplate = () => {
    const ref = useRef<CarouselRef>(null);
    const dispatch = useAppDispatch();
    const { bannerList, movieList } = useMovie();

    useEffect(() => {
        dispatch(getMovieListThunk());
        dispatch(getBannerListThunk());
    }, [dispatch]);

    console.log(movieList);

    return (
        <div className="py-8 bg-[#fdfcf0]">
            {/* Carousel  */}
            <div>
                <div className="max-w-screen-lg mx-auto">
                    <ul className="flex">
                        {homeSection.map((item, index) => (
                            <li key={index} className={cx('home-sect-item')}>
                                <a href="..." className={cx('home-sect-link', item.class)}></a>
                            </li>
                        ))}
                    </ul>
                    <div className="h-2 mt-2 border-y border-black"></div>
                </div>
                <div className={cx('carousel')}>
                    <div className="max-w-screen-lg mx-auto relative">
                        <Carousel ref={ref} autoplay dots style={{ border: '1px solid #fff' }}>
                            {bannerList?.map(item => (
                                <div key={item.maBanner}>
                                    <img src={item.hinhAnh} alt="" className="w-full h-[450px]" />
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
            </div>

            {/* Content  */}
            <div className="max-w-screen-lg mx-auto">
                {/* Movie section  */}
                <div>
                    <div className={cx('title', 'movie')}>
                        <h2>movie selection</h2>
                    </div>
                    <div>
                        <Swiper slidesPerView={4} spaceBetween={5}>
                            {movieList?.map((movie, index) => (
                                <SwiperSlide key={index}>
                                    <FilmSlide tenPhim={movie.tenPhim} hinhAnh={movie.hinhAnh} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Event section  */}
                <div className="border-b-[3px] border-black pb-8">
                    <div className={cx('title', 'event')}>
                        <h2>event</h2>
                    </div>
                    <div className="flex justify-center">
                        <ul className={cx('toogle-tabs')}>
                            <li className="flex items-center">
                                <img src="/images/home/ico_finger.png" alt="" className="w-9 h-3.5" />
                                <a href="..." className="ml-3">
                                    Thành Viên CGV
                                </a>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/home/bg_tebmenu-line.gif" alt="" className="px-3 h-4" />
                                <a href="...">Tin Mới &amp; Ưu Đãi</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex mt-4">
                        {EventImgs.map((item, index) => (
                            <li key={index} className="grow px-1">
                                <a href="">
                                    <img src={item.path} alt="" className="w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Poster  */}
                <div className="border-b-[3px] border-black pb-4 mt-8">
                    <a href="" className="block">
                        <div className="border-[3px] border-black w-1/2 p-1">
                            <img src="/images/home/u22_072023_496x267.png" alt="" className="hover:opacity-75 w-full" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

const homeSection = [
    {
        class: 'heater',
    },
    {
        class: 'now-sh',
    },
    {
        class: 'special',
    },
    {
        class: 'event',
    },
    {
        class: 'contact',
    },
    {
        class: 'discount',
    },
    {
        class: 'register',
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
