import { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { PATH } from 'constant';
import { useAppDispatch } from 'store';
import { useMovie } from 'hooks';
import { MovieCard } from 'components';
import { getMovieListThunk } from 'store/quanLyPhimSlice';

const NowShowingTemplate = () => {
    const dispatch = useAppDispatch();
    const { movieList } = useMovie();

    useEffect(() => {
        dispatch(getMovieListThunk());
    }, [dispatch]);

    return (
        <div>
            {/* Navigate  */}
            <div className="bg-[#f1f0e5] border-b border-[#dfdba8]">
                <div className="max-w-screen-lg mx-auto py-[5px]">
                    <Breadcrumb
                        items={breadcump}
                        separator={<i className="fa-solid fa-angle-right mx-4 text-sm"></i>}
                    />
                </div>
            </div>

            {/* Body  */}
            <div className="bg-[var(--body-color)] py-6">
                <div className="max-w-screen-lg mx-auto">
                    {/* Title  */}
                    <div className="flex justify-between items-end border-b-[3px] border-black pb-1">
                        <h1 className="text-[38px] mb-2">Phim Đang Chiếu</h1>
                        <Link to={PATH.commingSoon} className="text-[20px] text-[#666]">
                            PHIM SẮP CHIẾU
                        </Link>
                    </div>

                    {/* Movie list  */}
                    <div className="grid grid-cols-4 gap-x-10 gap-y-5 py-8 border-b-[3px] border-black">
                        {movieList
                            ?.filter(movie => movie.dangChieu)
                            ?.map((movie, index) => (
                                <MovieCard key={movie.maPhim} movie={movie} index={index} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NowShowingTemplate;

const breadcump = [
    {
        title: (
            <Link to={PATH.home}>
                <i className="fa-solid fa-house text-base"></i>
            </Link>
        ),
    },
    {
        title: <span>Phim</span>,
    },
    {
        title: <span className="underline font-bold">Phim đang chiếu</span>,
    },
];
