// import React from 'react'
// import classNames from 'classnames/bind';
import { FooterInfor } from './FooterInfor';
import { FooterNav } from './FooterNav';
// import styles from './footer.module.scss';

// const cx = classNames.bind(styles);

const FooterTemplate = () => {
    return (
        <footer className="bg-[#fdfcf0]">
            <FooterNav />
            <FooterInfor />
        </footer>
    );
};

export default FooterTemplate;
