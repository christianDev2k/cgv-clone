import classNames from 'classnames/bind';
import { Carousel } from 'antd';
import { useRef } from 'react';
import { CarouselRef } from 'antd/es/carousel';
// ~
import styles from './home-carousel.module.scss';
import { carouselImg, homeSection } from './carousel';

const cx = classNames.bind(styles);

const HomeCarousel = () => {
    const ref = useRef<CarouselRef>(null);
    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <ul className="flex">
                    {homeSection.map(item => (
                        <li className={cx('home-sect-item')}>
                            <a href="..." className={cx('home-sect-link', item.class)}></a>
                        </li>
                    ))}
                </ul>
                <div className="h-2 mt-2 border-y border-black"></div>
            </div>
            <div className={cx('carousel')}>
                <div className="max-w-screen-lg mx-auto relative">
                    <Carousel ref={ref} autoplay dots style={{ border: '1px solid #fff' }}>
                        {carouselImg.map(item => (
                            <div>
                                <img src={item.imgPath} alt="" className="w-full" />
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
    );
};

export default HomeCarousel;
