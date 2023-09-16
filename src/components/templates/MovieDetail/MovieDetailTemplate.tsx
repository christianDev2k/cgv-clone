import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// ~
import { useMovie } from 'hooks';
import { useAppDispatch } from 'store';
import { GetInforMovieThunk } from 'store/quanLyPhimSlice';
import { BuyTicketButton, ToggleTabs, Breadcrumb, Tag } from 'components';
import { LikeFilled } from '@ant-design/icons';

const MovieDetail = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { movieDetail: movie } = useMovie();

    useEffect(() => {
        dispatch(GetInforMovieThunk(id));
    }, [dispatch, id]);

    const breadcump = [
        {
            title: (
                <Link to='/'>
                    <i className="fa-solid fa-house text-base"></i>
                </Link>
            ),
        },
        {
            title: <span className="underline font-bold uppercase">{movie?.tenPhim}</span>,
        },
    ];

    return (
        <div>
            <div className="bg-[#f1f0e5] border-b border-[#dfdba8]">
                <div className="max-w-screen-lg mx-auto py-[5px]">
                    <Breadcrumb
                        items={breadcump}
                        separator={<i className="fa-solid fa-angle-right mx-4 text-sm"></i>}
                    />
                </div>
            </div>
            <div className="bg-[var(--body-color)] py-8">
                <div className="max-w-screen-lg mx-auto">
                    {/* Title  */}
                    <div className="flex justify-between items-end border-b-[3px] border-black pb-1">
                        <h1 className="text-[28px] mb-2">Nội Dung Phim</h1>
                    </div>

                    {/* Detail */}
                    <div className="flex py-6 w-full">
                        <div className="w-1/5">
                            <div className="card relative pb-14">
                                <img src={movie?.hinhAnh} alt={movie?.biDanh} className="w-full h-[290px]" />
                                <div className="flex justify-between items-center absolute bottom-0 left-0 w-full">
                                    <div className="cursor-pointer">
                                        <Tag icon={<LikeFilled />} color="#1877f2">
                                            Like
                                        </Tag>
                                    </div>
                                    <BuyTicketButton />
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5 pl-8">
                            <h1 className="text-2xl mb-2 uppercase border-b border-[#d9d6c8] pb-3">{movie?.tenPhim}</h1>
                            <p>
                                <span className="font-bold text-[13px]">Ngày khởi chiếu: </span>
                                {movie?.ngayKhoiChieu.slice(0, 10)}
                            </p>
                            <p>
                                <span className="font-bold text-[13px]">Đánh giá: </span>
                                {movie?.danhGia} / 10
                            </p>
                            <p>
                                <span className="font-bold text-[13px]">Ngôn ngữ: </span>
                                Tiếng Anh với phụ đề tiếng Việt
                            </p>
                            <div className="mt-8">
                                <ToggleTabs title_1="Chi tiết" title_2="Trailer" />
                            </div>
                            <p className="mt-4">{movie?.moTa}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
