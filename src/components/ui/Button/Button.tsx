import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';
import cn from 'classnames';
import styles from './button.module.scss';

type ButtonProps = ButtonPropsA & {
    primary?: boolean;
    auth?: boolean;
};

export const Button = ({ primary, auth, ...rest }: ButtonProps) => {
    const classes = cn({
        [styles.primary]: primary,
        [styles.auth]: auth,
    });

    return <ButtonA {...rest} className={classes}></ButtonA>;
};

export const BuyTicketButton = () => {
    return (
        <button className={styles.buyTicket}>
            <div>
                <img src="images/home/bg-cate-booking.png" alt="" className="mr-1" />
                <span>Mua vé</span>
            </div>
        </button>
    );
};
