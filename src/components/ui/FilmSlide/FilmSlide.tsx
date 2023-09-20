import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// ~
import { Button } from 'components';
import styles from './film-slide.module.scss';
import { Movie } from 'types';

const cx = classNames.bind(styles);

type FilmSlideProps = {
    movie: Movie;
};

const FilmSlide = ({ movie }: FilmSlideProps) => {
    const { hinhAnh, tenPhim, maPhim } = movie;
    return (
        <div className="h-[355px]">
            <Link to={`/${maPhim}/movie-detail`} className={cx('film-slide')}>
                <img src={hinhAnh} alt="" className="w-full h-full" />
                <div className={cx('overlay')}>
                    <div className={cx('content')}>
                        <h4 className="text-center font-bold text-white mb-4">{tenPhim}</h4>
                        <div>
                            <Button type="primary" className="uppercase !font-bold !px-1 w-full">
                                Xem chi tiết
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FilmSlide;
