import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// ~
import { PATH } from 'constant';
import { useAppDispatch } from 'store';
import { useMovie } from 'hooks';
import { MovieCard, Breadcrumb, LoadingUI } from 'components';
import { getMovieListThunk } from 'store/quanLyPhimSlice';

const NowShowingTemplate = () => {
    const dispatch = useAppDispatch();
    const { movieList, isFetchingMovieList } = useMovie();

    useEffect(() => {
        dispatch(getMovieListThunk());
    }, [dispatch]);
    
    if (isFetchingMovieList) return <LoadingUI />;

    return (
        <div>
            {/* Navigate  */}
            <div className="bg-[#f1f0e5] border-b border-[#dfdba8]">
                <div className="max-w-screen-lg mx-auto py-[5px] px-2 lg:px-0">
                    <Breadcrumb
                        items={breadcump}
                        separator={<i className="fa-solid fa-angle-right mx-4 text-sm"></i>}
                    />
                </div>
            </div>

            {/* Body  */}
            <div className="bg-[var(--body-color)] py-6">
                <div className="max-w-screen-lg mx-auto px-6 lg:px-0">
                    {/* Title  */}
                    <div className="flex justify-between items-end border-b-[3px] border-black pb-1">
                        <h1 className="text-2xl md:text-[38px] mb-2">Phim Sắp Chiếu</h1>
                        <Link to={PATH.nowShowing} className="hidden sm:block text-[20px] text-[#666]">
                            PHIM ĐANG CHIẾU
                        </Link>
                    </div>

                    {/* Movie list  */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-10 py-8 border-b-[3px] border-black">
                        {movieList
                            ?.filter(movie => movie.sapChieu)
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
            <Link to="/">
                <i className="fa-solid fa-house text-base"></i>
            </Link>
        ),
    },
    {
        title: <span>Phim</span>,
    },
    {
        title: <span className="underline font-bold">Phim sắp chiếu</span>,
    },
];
