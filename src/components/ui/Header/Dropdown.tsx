import classNames from 'classnames/bind';
// ~
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type PropsType = {
    navList: { title: string; path?: string }[];
};

const Dropdown: React.FC<PropsType> = ({ navList }) => {
    return (
        <ul className={cx('dropdown')}>
            <div className={cx('content')}>
                {navList.map((nav, index) => (
                    <li key={index}>
                        <Link to={nav.path}>{nav.title}</Link>
                    </li>
                ))}
            </div>
        </ul>
    );
};

export default Dropdown;
