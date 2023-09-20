import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useBooking = () => {
    const { danhSachPhongVe, isFetchingPhongVe, bookedList, bookingStatus, isFetchingBooking } = useSelector(
        (state: RootState) => state.quanLyDatVeReducer,
    );
    return {
        danhSachPhongVe,
        isFetchingPhongVe,
        bookedList,
        bookingStatus,
        isFetchingBooking,
    };
};

export default useBooking;
