import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useAuth = () => {
    const { accessToken, isFetchingLogin, userLogin } = useSelector((state: RootState) => state.quanLyNguoiDungReducer);

    return { accessToken, isFetchingLogin, userLogin };
};

export default useAuth;
