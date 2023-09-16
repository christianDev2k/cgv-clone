import { PATH } from 'constant';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

const AccountTemplate = () => {
    const { userLogin: user } = useAuth();

    const AccButton = () => {
        return <span className="py-[3px] text-white font-bold rounded-[5px] bg-[#2f95ec] px-5 inline-block">Xem</span>;
    };

    return (
        <div>
            {/* Title  */}
            <h3 className="bg-[#222] text-[22px] text-white text-center">THÔNG TIN CHUNG</h3>

            {/* Avatar  */}
            <div className="mt-3">
                <img
                    src="/images/account/avatar.png"
                    alt="avatar"
                    className="rounded-full w-20 sm:w-28 block mx-auto"
                />
            </div>

            {/* Hello  */}
            <div className="mt-8 text-[13px]">
                <p className="font-bold">Xin chào {user?.hoTen}</p>
                <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
            </div>

            {/* Thông tin chung  */}
            <div className="mt-4 border border-[#ccc] rounded-lg p-2 grid grid-cols-2 sm:grid-cols-6 text-center text-xs text-[#4a452a]">
                <div className="col-span-2 flex justify-center sm:block sm:text-left">
                    <div className="text-left">
                        <div className="py-1 flex">
                            <p className="w-24 lg:w-28">Cấp độ thẻ</p>
                            <p className="font-bold">Member</p>
                        </div>
                        <div className="py-1 flex">
                            <p className="w-24 lg:w-28">Tổng chi tiêu</p>
                            <p className="font-bold">0đ</p>
                        </div>
                        <div className="py-1 flex">
                            <p className="w-24 lg:w-28">Điểm CGV</p>
                            <p className="font-bold">0</p>
                        </div>
                    </div>
                </div>
                <div className="sm:border-x border-gray-600">
                    <p className="py-1">Thẻ quà tặng</p>
                    <p className="py-1 font-bold">0đ</p>
                    <Link to={PATH.gift} className="">
                        <AccButton />
                    </Link>
                </div>
                <div>
                    <p className="py-1">Voucher</p>
                    <p className="py-1 font-bold">0</p>
                    <Link to={PATH.voucher}>
                        <AccButton />
                    </Link>
                </div>
                <div className="sm:border-x border-gray-600 mt-4 sm:mt-0">
                    <p className="py-1">Coupon</p>
                    <p className="py-1 font-bold">0</p>
                    <Link to={PATH.coupon}>
                        <AccButton />
                    </Link>
                </div>
                <div className="mt-4 sm:mt-0">
                    <p className="py-1">Thẻ thành viên</p>
                    <p className="py-1 font-bold">0</p>
                    <Link to={PATH.memberCard}>
                        <AccButton />
                    </Link>
                </div>
            </div>

            {/* Thông tin tài khoản  */}
            <h4 className="font-bold text-[15px] mt-8 pb-2 border-b border-gray-300">Thông tin tài khoản</h4>
            <div className="flex mt-3 text-[#333]">
                <p className="mr-10">LIÊN HỆ</p>
                <Link to={PATH.accountDetail}>
                    <p className="py-[3px] px-5 bg-[#9d9b9b] rounded-[5px] text-xs text-white">Thay đổi</p>
                </Link>
            </div>
            <div className="text-[#7f7f7f] text-[13px] mt-3">
                <p className="py-1">Tên: {user?.hoTen}</p>
                <p className="py-1">Email: {user?.email}</p>
                <p className="py-1">Tên đăng nhập: {user?.taiKhoan}</p>
                <p className="py-1">Điện thoại: {user?.soDT}</p>
            </div>
        </div>
    );
};

export default AccountTemplate;
