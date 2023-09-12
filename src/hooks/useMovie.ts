import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useMovie = () => {
    const {
        movieList,
        bannerList,
        nowShowingList,
        isFetchingBannerList,
        isFetchingMovieList,
        isFetchingNowShowingList,
    } = useSelector((state: RootState) => state.quanLyPhimReducer);
    return {
        movieList,
        bannerList,
        nowShowingList,
        isFetchingBannerList,
        isFetchingMovieList,
        isFetchingNowShowingList,
    };
};

export default useMovie;
