import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CustomContext} from "../../Context";

const Login = () => {

    const {loginUser} = useContext(CustomContext)


    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    return (
        <section className="login">
            <form className="form" onSubmit={handleSubmit(loginUser)}>
                <h2 className="form__title">Вход в аккаунт</h2>

                <input
                    {...register('email')}
                    className="form__input"
                    type="email"
                    placeholder="Введите email"/>

                <input
                    {...register('password')}
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