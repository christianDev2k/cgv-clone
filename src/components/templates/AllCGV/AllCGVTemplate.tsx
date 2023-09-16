import classNames from 'classnames/bind';
import styles from './all-cgv.module.scss';

const cx = classNames.bind(styles);

const AllCGVTemplate = () => {
    return (
        <div className="bg-[var(--body-color)] py-8">
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                <div>
                    <img src="/images/all-cgv/cinema-showtimes-favorite-top.png" alt="" />
                </div>
                <div className={cx('content')}>
        dadsadasdasasd
                </div>
                <div>
                    <img src="/images/all-cgv/cinema-showtimes-favorite-bottom.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AllCGVTemplate;
