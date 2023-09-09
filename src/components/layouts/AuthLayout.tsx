import { Outlet } from 'react-router-dom';
// ~
import { Footer, Header } from 'components';
import { Carousel } from 'antd';

const AuthLayout = () => {
    return (
        <div>
            <Header />
            <div className="bg-[#fdfcf0]">
                <div className="max-w-screen-lg mx-auto grid grid-cols-2 py-8">
                    <Outlet />
                    <div className="border-l border-gray-300">
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
