import React from 'react';
import s from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={s.nav}>
            <a href="" className={s.link}>Main</a>
            <a href="" className={s.link}>Skills</a>
            <a href="" className={s.link}>Projects</a>
            <a href="" className={s.link}>Contacts</a>
        </div>
    );
}

export default NavMenu;
