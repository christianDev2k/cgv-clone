import { Navigate, Outlet } from 'react-router-dom';
// ~
import { Footer, Header } from 'components';
import { Carousel } from 'antd';
import { useAuth } from 'hooks';

const AuthLayout = () => {
    const { userLogin } = useAuth();

    if (userLogin) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header />
            <div className="bg-[#fdfcf0]">
                <div className="max-w-screen-lg mx-auto flex py-8 px-2 lg:px-0">
                    <div className="w-4/5 mx-auto  md:mx-0 md:w-3/5 lg:w-1/2">
                        <Outlet />
                    </div>
                    <div className="w-2/5 lg:w-1/2 hidden md:block border-l border-gray-300">
                        <Carousel autoplay fade className="pb-6">
                            <div>
                                <img src="images/auth/1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="images/auth/2.jpg" alt="" />
                            </div>
                            <div>
                                <img src="images/auth/3.jpg" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
