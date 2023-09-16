import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useAuth = () => {
    const { accessToken, isFetchingLogin, userLogin, isUpdatingUser } = useSelector(
        (state: RootState) => state.quanLyNguoiDungReducer,
    );

    return { accessToken, isFetchingLogin, userLogin, isUpdatingUser };
};

export default useAuth;
