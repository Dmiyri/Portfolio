import React from 'react';
import s from './Footer.module.css';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <span className={s.title}>Dmitri Tarasiuk</span>
                <div className={s.iconsBlock}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span className={s.copyright}> &copy; 2020 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
