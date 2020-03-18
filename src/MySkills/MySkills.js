import React from 'react';
import s from './MySkills.module.css';

function MySkills() {
    return (
        <div className={s.mySkills}>
            <div className={s.container}>
                <div className={s.headerTitle}>
                    <h2 className={s.headerTitle}>My SKills</h2>
                    <div className={s.titleLine}></div>
                </div>
                <div className={s.skillsBlock}>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={s.nameSkill}>HTML+CSS</span>
                        <span className={s.greeting}> Описание</span>
                    </div>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={s.nameSkill}>HTML+CSS</span>
                        <span className={s.greeting}> Описание</span>
                    </div>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={s.nameSkill}>HTML+CSS</span>
                        <span className={s.greeting}> Описание</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
