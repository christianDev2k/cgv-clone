import classNames from 'classnames/bind';
// ~
import styles from './header.module.scss';

const cx = classNames.bind(styles);

type PropsType = {
    navList: { title: string }[];
};

const Dropdown: React.FC<PropsType> = ({ navList }) => {
    return (
        <ul className={cx('dropdown')}>
            <div className={cx('content')}>
                {navList.map((nav, index) => (
                    <li key={index}>
                        <a href="...">{nav.title}</a>
                    </li>
                ))}
            </div>
        </ul>
    );
};

export default Dropdown;
