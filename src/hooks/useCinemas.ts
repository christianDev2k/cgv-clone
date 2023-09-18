import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useCinemas = () => {
    const { listCinemas, isFetchingListCinemas, listLichChieu } = useSelector(
        (state: RootState) => state.quanLyRapReducer,
    );

    return {
        listCinemas,
        isFetchingListCinemas,
        listLichChieu,
    };
};

export default useCinemas;
