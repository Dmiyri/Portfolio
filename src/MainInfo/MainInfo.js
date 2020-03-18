import React from 'react';
import s from './MainInfo.module.css';

function MainInfo() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>HELLO!!!</span>
                    <span>I am Dmitry <span>Tarasiuk</span></span>
                    <h1>A front-end developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}/>
                </div>
            </div>
        </div>
    );
}

export default MainInfo;
