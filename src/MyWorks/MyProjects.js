import React from 'react';
import s from './MyProjects.module.css';

function MyProjects() {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <span className={s.title}>My Projects</span>
                <div className={s.projectWrapper}>
                    <div className={s.project}>
                        <div className={s.projectImg}>
                            <a className={s.btnPlay} href=''>Смотреть</a>
                        </div>
                        <div className={s.ops}>
                            <span>Название проекта</span>
                            <span > Описание</span>
                        </div>
                    </div>
                    <div className={s.project}>
                        <div className={s.projectImg}>
                            <a className={s.btnPlay} href=''>Смотреть</a>
                        </div>
                        <div className={s.ops}>
                            <span>Название проекта</span>
                            <span > Описание</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
