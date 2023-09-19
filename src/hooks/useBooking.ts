import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useBooking = () => {
    const { danhSachPhongVe, isFetchingPhongVe, bookedList } = useSelector(
        (state: RootState) => state.quanLyDatVeReducer,
    );
    return {
        danhSachPhongVe,
        isFetchingPhongVe,
        bookedList,
    };
};

export default useBooking;
