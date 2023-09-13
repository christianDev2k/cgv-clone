import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useMovie = () => {
    const { movieList, bannerList, movieDetail, isFetchingBannerList, isFetchingMovieList, isFetchingmovieDetailt } =
        useSelector((state: RootState) => state.quanLyPhimReducer);
    return {
        movieList,
        bannerList,
        movieDetail,
        isFetchingBannerList,
        isFetchingMovieList,
        isFetchingmovieDetailt,
    };
};

export default useMovie;
