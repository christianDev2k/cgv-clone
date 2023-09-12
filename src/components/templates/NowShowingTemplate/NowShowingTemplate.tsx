import { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { PATH } from 'constant';
import { useAppDispatch } from 'store';
import { getNowShowingListThunk } from 'store/quanLyPhimSlice';
import { useMovie } from 'hooks';
import { MovieCard } from 'components';

const NowShowingTemplate = () => {
    const dispatch = useAppDispatch();
    const { nowShowingList } = useMovie();

    useEffect(() => {
        dispatch(getNowShowingListThunk());
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
                <div className="max-w-screen-lg mx-auto ">
                    {/* Title  */}
                    <div className="flex justify-between items-end border-b-[3px] border-black pb-1">
                        <h1 className="text-[38px] mb-2">Phim Đang Chiếu</h1>
                        <Link to={PATH.commingSoon} className="text-[20px] text-[#666]">
                            PHIM SẮP CHIẾU
                        </Link>
                    </div>

                    {/* Movie list  */}
                    {nowShowingList?.map(movie => (
                        <MovieCard movie={movie} />
                    ))}
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
        title: <a href="#">Phim</a>,
    },
    {
        title: <span className="underline font-bold">Phim đang chiếu</span>,
    },
];
