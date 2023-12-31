import classNames from 'classnames/bind';
import styles from './toggle-tabs.module.scss';

const cx = classNames.bind(styles);

type TitleProps = {
    title_1: string;
    title_2: string;
};

const ToggleTabs = (props: TitleProps) => {
    return (
        <div className="flex justify-center">
            <ul className={cx('toogle-tabs')}>
                <li className="flex items-center">
                    <img src="/images/home/ico_finger.png" alt="" className="w-7 h-3" />
                    <div className="font-bold ml-3">{props.title_1}</div>
                </li>
                <li className="flex items-center">
                    <img src="/images/home/bg_tebmenu-line.gif" alt="" className="px-3 h-4" />
                    <div>{props.title_2}</div>
                </li>
            </ul>
        </div>
    );
};

export default ToggleTabs;
