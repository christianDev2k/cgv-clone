import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useAuth = () => {
    const { isFetchingLogin, userLogin, isUpdatingUser, userInfo } = useSelector(
        (state: RootState) => state.quanLyNguoiDungReducer,
    );

    return { isFetchingLogin, userLogin, isUpdatingUser, userInfo };
};

export default useAuth;
