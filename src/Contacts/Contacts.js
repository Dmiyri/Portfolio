import React from 'react';
import s from './Contacts.module.css';


function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <span className={s.title}>Контакты</span>
                <form className={s.tables}>
                    <input className={s.in} type='text' name='username' placeholder='Петров Иван Иванович'/>
                    <input className={s.in} type='e-mail' name='e-mail' placeholder='petrov@gmail.com'/>
                    <textarea className={s.in} name='comment' placeholder='Оствавьте комментарий'/>
                    <button className={s.btnSub} name='submit'>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
