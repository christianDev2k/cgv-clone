import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';
import cn from 'classnames';
import styles from './button.module.scss';

type ButtonProps = ButtonPropsA & {
    isPrimary?: boolean;
};

export const Button = (props: ButtonProps) => {
    const classes = cn({
        [styles.primary]: props.isPrimary,
    });

    return <ButtonA {...props} className={classes}></ButtonA>;
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
