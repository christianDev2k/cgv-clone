import { PATH } from 'constant';
import { useBooking } from 'hooks';
import { Navigate } from 'react-router-dom';

const CheckoutTemplate = () => {
    const { bookedList } = useBooking();

    if (!bookedList.length) return <Navigate to={PATH.allCGV} />;
    return <div></div>;
};

export default CheckoutTemplate;
