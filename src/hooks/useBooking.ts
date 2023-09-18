import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useBooking = () => {
    const { danhSachPhongVe, isFetchingPhongVe } = useSelector((state: RootState) => state.quanLyDatVeReducer);
    return {
        danhSachPhongVe,
        isFetchingPhongVe,
    };
};

export default useBooking;
