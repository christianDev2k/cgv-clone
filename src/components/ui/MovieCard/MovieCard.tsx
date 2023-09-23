import classNames from 'classnames/bind';
// ~
import { Movie } from 'types';
import { Button } from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { Tag } from 'antd';
import { LikeFilled } from '@ant-design/icons';
import styles from './movie-card.module.scss';

const cx = classNames.bind(styles);

type MovieCardProps = {
    movie: Movie;
    index?: number;
};

const MovieCard = ({ movie, index }: MovieCardProps) => {
    const { hinhAnh, tenPhim, ngayKhoiChieu, danhGia, biDanh, maPhim } = movie;
    const navigate = useNavigate();

    return (
        <div className="relative pb-10">
            <Link to={`/${maPhim}/movie-detail`} className="block border-[6px] border-black relative">
                {index < 3 && <div className={cx('hot-label', `label-${index + 1}`)}></div>}
                <img src={hinhAnh} alt={biDanh} className="w-full h-[250px] sm:h-[300px]" />
            </Link>
            <div>
                <h6 className="font-bold uppercase text-[15px] mt-2">{tenPhim}</h6>
                <p>
                    <span className="font-bold text-[13px]">Khởi chiếu:</span> {ngayKhoiChieu.slice(0, 10)}
                </p>
                <p>
                    <span className="font-bold text-[13px]">Đánh giá:</span> {danhGia} / 10
                </p>
                <div className="flex justify-between items-center absolute bottom-0 left-0 w-full">
                    <div className="cursor-pointer">
                        <Tag icon={<LikeFilled />} color="#1877f2">
                            Like
                        </Tag>
                    </div>
                    <Button
                        type="primary"
                        className="uppercase !font-bold !px-1 !text-[11px] !sm:text-sm  sm:!px-2"
                        onClick={() => navigate(`/${maPhim}/movie-detail`)}
                    >
                        Xem chi tiết
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
