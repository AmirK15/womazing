import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <form className="form" action="">
                <h2 className="form__title">Вход в аккаунт</h2>

                <input
                    className="form__input"
                    type="email"
                    placeholder="Введите email"/>

                <input
                    className="form__input"
                    type="password"
                    placeholder="Введите пароль"/>

                <button className="btn" type="submit">Войти</button>

                <p className="desc">Нет аккаунта?
                    <Link to='/register'> Регистрация</Link>
                </p>
            </form>
        </section>
    );
};

export default Login;