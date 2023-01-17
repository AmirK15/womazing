import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <form action="">
                <h2>Вход в аккаунт</h2>

                <input type="email" placeholder="Введите email"/>

                <input type="password" placeholder="Введите пароль"/>

                <button type="submit">Войти</button>

                <p>Нет аккаунта,<Link to='/register'>Регистрация</Link></p>
            </form>
        </section>
    );
};

export default Login;