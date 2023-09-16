import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';
import styles from './button.module.scss';

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
