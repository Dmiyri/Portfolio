import React from 'react';
import s from './Slogan.module.css';

function Slogan() {
    return (
        <div className={s.slogan}>
            <div className={s.container}>
                <span>Рассматриваю вариант удаленной работы</span>
                <button className={s.btnClick}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Slogan;
