import { Button } from 'antd';
import { Movie } from 'types';
import { BuyTicketButton } from '..';

type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    const { hinhAnh, tenPhim, ngayKhoiChieu, danhGia, biDanh } = movie;
    return (
        <a href="">
            <img src={hinhAnh} alt={biDanh} />
            <div>
                <h6>{tenPhim}</h6>
                <p>Khởi chiếu: {ngayKhoiChieu}</p>
                <p>Đánh giá: {danhGia}</p>
                <div>
                    <Button>Like</Button>
                    <BuyTicketButton />
                </div>
            </div>
        </a>
    );
};

export default MovieCard;
