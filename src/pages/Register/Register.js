import React, {useContext, useRef} from 'react';
import {CustomContext} from "../../Context";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask'

const Register = () => {

    const {registerUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset
    } = useForm()
    const password = useRef({});
    password.current = watch("password", "")

    return (
        <section>
            <form className="form" onSubmit={handleSubmit(registerUser)}>
                <h2 className="form__title">Регистрация </h2>

                <input
                    className="form__input"
                    {...register('email')}
                    type="email"
                    placeholder="Введите email"/>

                <input
                    className="form__input"
                    {...register('login')}
                    type="text"
                    placeholder="Введите login"/>

                <InputMask
                    mask={'+\\9\\96(999)99-99-99'}
                    className="form__input"
                    {...register('phone')}
                    type="tel"
                    placeholder="Введите номер"/>

                <input
                    className="form__input"
                    type="password"
                    placeholder="Введите password"
                />

                <input
                    className="form__input"
                    type="password"
                    placeholder="Подтвердить password"
                />

                <button className="btn" type="submit">Регистрация</button>

                <p className="desc">
                    Уже есть аккаунт?
                    <Link to='/login'> Войти</Link>
                </p>
            </form>
        </section>
    );
};

export default Register;