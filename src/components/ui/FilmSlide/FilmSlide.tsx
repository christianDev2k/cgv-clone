import classNames from 'classnames/bind';

// ~
import { Button, BuyTicketButton } from '../Button';
import styles from './film-slide.module.scss';

const cx = classNames.bind(styles);

type FilmSlideProps = {
    hinhAnh: string;
    tenPhim: string;
};

const FilmSlide = ({ hinhAnh, tenPhim }: FilmSlideProps) => {
    return (
        <div className='h-[355px]'>
            <a href="..." className={cx('film-slide')}>
                <img src={hinhAnh} alt="" className="w-full h-full" />
                <div className={cx('overlay')}>
                    <div className={cx('content')}>
                        <h4 className="text-center font-bold text-white mb-4">{tenPhim}</h4>
                        <div className="flex justify-between">
                            <Button isPrimary>Xem chi tiết</Button>
                            <BuyTicketButton />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default FilmSlide;
