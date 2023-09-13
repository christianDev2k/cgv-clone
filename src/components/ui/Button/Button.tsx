import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type ButtonProps = ButtonPropsA & {
    primary?: boolean;
    auth?: boolean;
};

export const Button = (props: ButtonProps) => {
    return <ButtonA {...props} />;
};

export const BuyTicketButton = () => {
    return (
        <button className={styles.buyTicket}>
            <div>
                <img src="/images/home/bg-cate-booking.png" alt="" className="mr-1" />
                <span>Mua vé</span>
            </div>
        </button>
    );
};

export const LikeButton = () => {
    return (
        <button className={cx('like-btn')} onClick={e => e.preventDefault()}>
            <i className="fa-solid fa-thumbs-up"></i>
            <span className="mx-1">Like</span>
            <span className="font-normal">{Math.floor(Math.random() * 10 * 50)}</span>
        </button>
    );
};
