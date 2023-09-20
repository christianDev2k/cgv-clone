import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useMovie = () => {
    const { movieList, bannerList, movieDetail, isFetchingBannerList, isFetchingMovieList, isFetchingmovieDetail } =
        useSelector((state: RootState) => state.quanLyPhimReducer);
    return {
        movieList,
        bannerList,
        movieDetail,
        isFetchingBannerList,
        isFetchingMovieList,
        isFetchingmovieDetail,
    };
};

export default useMovie;
